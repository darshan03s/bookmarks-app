import AddBookmark from '@/components/add-bookmark';
import Bookmarks from '@/components/bookmarks';

const page = async () => {
  return (
    <div className="h-[calc(100vh-48px)] flex items-center justify-center">
      <div>
        <h1 className="text-4xl text-center py-6">Easily add and manage bookmarks</h1>
        <AddBookmark />
        <Bookmarks />
      </div>
    </div>
  );
};
export default page;
