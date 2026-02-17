import AddBookmark from '@/components/add-bookmark';
import Bookmarks from '@/components/bookmarks';
import { TextAnimate } from '@/components/ui/text-animate';

const page = async () => {
  return (
    <div className="h-[calc(100vh-48px)] flex items-center justify-center px-4 md:px-0">
      <div>
        <TextAnimate
          animation="blurInUp"
          by="word"
          className="text-4xl text-center py-6 text-white font-instrument-serif"
        >
          Easily add and manage bookmarks
        </TextAnimate>
        <AddBookmark />
        <Bookmarks />
      </div>
    </div>
  );
};
export default page;
