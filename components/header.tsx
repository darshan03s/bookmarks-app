import Link from 'next/link';
import SignInButton from './sign-in-button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { getUser, logout } from '@/actions/auth';

const Header = async () => {
  const user = await getUser();

  const userData = user?.user_metadata;

  return (
    <header className="h-12 p-1 px-3 flex items-center justify-between py-4">
      <Link href={'/'} className="text-xl text-white font-instrument-serif">
        BookmarksApp
      </Link>
      <div className="header-right flex items-center gap-4">
        {userData ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <Image
                src={userData?.avatar_url}
                width={100}
                height={100}
                className="size-8 rounded-full"
                alt="Avatar"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="relative right-4 bg-primary text-primary-foreground outline-0 border-none">
              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs opacity-50">
                  {userData.email}
                </DropdownMenuLabel>
                <form action={logout}>
                  <button type="submit" className="w-full text-left">
                    <DropdownMenuItem className="cursor-pointer hover:bg-primary/50! hover:text-white!">
                      Sign Out
                    </DropdownMenuItem>
                  </button>
                </form>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <SignInButton />
        )}
      </div>
    </header>
  );
};
export default Header;
