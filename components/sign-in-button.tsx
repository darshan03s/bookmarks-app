'use client';
import { supabase } from '@/lib/supabase/client';
import { Button } from './ui/button';
import Image from 'next/image';

const SignInButton = () => {
  async function handleSignIn() {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`
      }
    });
  }
  return (
    <Button
      size={'sm'}
      className="text-xs flex items-center gap-2"
      variant={'outline'}
      onClick={handleSignIn}
    >
      <Image src="/google.svg" alt="Google" width={12} height={12} />
      Sign In
    </Button>
  );
};
export default SignInButton;
