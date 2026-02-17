import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item';
import { Button, buttonVariants } from './ui/button';
import { ExternalLink, Trash } from 'lucide-react';
import Link from 'next/link';
import { deleteBookmark } from '@/actions/bookmarks';

const BookmarkItem = ({ title, url, id }: { title: string; url: string; id: string }) => {
  async function handleDeleteBookmark() {
    await deleteBookmark(id);
  }

  return (
    <Item>
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{url}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Link
          href={url}
          target="_blank"
          title="Open in new tab"
          className={buttonVariants({ variant: 'outline', size: 'icon-sm' })}
        >
          <ExternalLink className="size-3" />
        </Link>
        <form action={handleDeleteBookmark}>
          <Button title="Delete bookmark" size={'icon-sm'} variant={'destructive'}>
            <Trash className="size-3" />
          </Button>
        </form>
      </ItemActions>
    </Item>
  );
};
export default BookmarkItem;
