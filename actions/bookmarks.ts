'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function addBookmark(formData: FormData) {
  const supabase = await createClient();

  const url = formData.get('url') as string;
  const title = formData.get('title') as string;

  const { error } = await supabase.from('bookmarks').insert({
    url,
    title
  });

  if (error) {
    throw new Error('Not authenticated');
  }

  revalidatePath('/');
}

export async function deleteBookmark(id: string) {
  const supabase = await createClient();

  const { error } = await supabase.from('bookmarks').delete().eq('id', id);

  if (error) {
    throw new Error('Failed to delete');
  }

  revalidatePath('/');
}
