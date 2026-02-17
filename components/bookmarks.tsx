import { createClient } from '@/utils/supabase/server';
import BookmarkItem from './bookmark-item';
import { Bookmark } from '@/types';

const Bookmarks = async () => {
  const supabase = await createClient();

  const { data: bookmarks, error } = await supabase
    .from('bookmarks')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="py-4">
      <div className="font-bold text-xl text-center">Your Bookmarks</div>
      {bookmarks && bookmarks?.length > 0 ? (
        <div className="max-h-[18em] overflow-y-auto w-full">
          {bookmarks?.map((bookmark: Bookmark) => (
            <BookmarkItem
              key={bookmark.id}
              title={bookmark.title}
              url={bookmark.url}
              id={bookmark.id}
            />
          ))}
        </div>
      ) : (
        <span className="block text-center opacity-50 text-xs">No bookmarks yet</span>
      )}
    </div>
  );
};
export default Bookmarks;
