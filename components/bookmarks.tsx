'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import BookmarkItem from './bookmark-item';
import { Bookmark } from '@/types';
import { TextAnimate } from './ui/text-animate';

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let channel: ReturnType<typeof supabase.channel> | null = null;

    async function init() {
      const {
        data: { session }
      } = await supabase.auth.getSession();

      if (!session) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('bookmarks')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setBookmarks(data);
      }

      setLoading(false);

      channel = supabase
        .channel('bookmarks-realtime')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'bookmarks'
          },
          (payload) => {
            if (payload.eventType === 'INSERT') {
              setBookmarks((prev) => [payload.new as Bookmark, ...prev]);
            }

            if (payload.eventType === 'DELETE') {
              setBookmarks((prev) => prev.filter((bookmark) => bookmark.id !== payload.old.id));
            }

            if (payload.eventType === 'UPDATE') {
              setBookmarks((prev) =>
                prev.map((bookmark) =>
                  bookmark.id === payload.new.id ? (payload.new as Bookmark) : bookmark
                )
              );
            }
          }
        )
        .subscribe();
    }

    init();

    return () => {
      if (channel) supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="py-6">
      <TextAnimate
        animation="blurInUp"
        by="word"
        className="font-bold text-2xl text-center text-white font-instrument-serif"
      >
        Your Bookmarks
      </TextAnimate>

      {loading ? (
        <span className="block text-center opacity-50 text-xs">Loading...</span>
      ) : bookmarks.length > 0 ? (
        <div className="max-h-[18em] overflow-y-auto w-full">
          {bookmarks.map((bookmark) => (
            <BookmarkItem
              key={bookmark.id}
              title={bookmark.title}
              url={bookmark.url}
              id={bookmark.id}
            />
          ))}
        </div>
      ) : (
        <span className="block text-center opacity-50 text-xs text-white">No bookmarks yet</span>
      )}
    </div>
  );
};

export default Bookmarks;
