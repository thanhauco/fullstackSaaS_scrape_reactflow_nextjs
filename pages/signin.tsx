import { signIn } from 'next-auth/react';

export default function SignIn() {
  return (
    <div>
      <h1>Sign in to Your Account</h1>
      <button onClick={() => signIn('google')}>Sign in with Google</button>
      <button onClick={() => signIn('github')}>Sign in with GitHub</button>
    </div>
  );
}