'use server';

import { createClient } from '@/utils/supabase/server';

export async function addBookmark(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('Not authenticated');
  }

  const url = formData.get('url') as string;
  const title = formData.get('title') as string;

  const { error } = await supabase.from('bookmarks').insert({
    url,
    title,
    user_id: user.id
  });

  if (error) {
    throw new Error('Insert failed');
  }
}

export async function deleteBookmark(id: string) {
  const supabase = await createClient();

  const { error } = await supabase.from('bookmarks').delete().eq('id', id);

  if (error) {
    throw new Error('Failed to delete');
  }
}
