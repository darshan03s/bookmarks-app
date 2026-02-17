import { Dispatch, SetStateAction } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import SignInButton from './sign-in-button';

const SignInRequiredModal = ({
  open,
  setOpen
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign In to add bookmark</DialogTitle>
          <DialogDescription>You need to sign in to start adding bookmarks</DialogDescription>
          <SignInButton />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SignInRequiredModal;
