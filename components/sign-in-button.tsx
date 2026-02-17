'use client';
import { supabase } from '@/lib/supabase/client';
import { Button } from './ui/button';

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
    <Button size={'sm'} className="text-xs" variant={'outline'} onClick={handleSignIn}>
      Sign In
    </Button>
  );
};
export default SignInButton;
