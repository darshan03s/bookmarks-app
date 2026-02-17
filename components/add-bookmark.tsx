'use client';

import { addBookmark } from '@/actions/bookmarks';
import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import SignInRequiredModal from './signin-required-modal';

const AddBookmark = () => {
  const [open, setOpen] = useState(false);

  async function handleAddBookmark(formData: FormData) {
    try {
      await addBookmark(formData);
    } catch {
      setOpen(true);
    }
  }

  return (
    <>
      <form action={handleAddBookmark} className="space-y-4">
        <Input name="url" type="url" className="text-xs" placeholder="Enter URL" />
        <Input name="title" type="text" className="text-xs" placeholder="Enter Title" />
        <Button type="submit" className="w-full">
          Add Bookmark
        </Button>
      </form>

      <SignInRequiredModal open={open} setOpen={setOpen} />
    </>
  );
};

export default AddBookmark;
