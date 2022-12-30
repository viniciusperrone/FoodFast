import { useState, useRef, useEffect, useContext } from 'react';
import { Context } from './context';

interface UserLoginData {
  email: string;
  password: string;
}

// type UserData = {
//   id: number;
//   email: string;
//   password: string;
//   avatar: any;
//   token: string;
// };

// type ContextProps = {
//   user: UserData;
//   setUser: React.Dispatch<React.SetStateAction<UserData>>;
// };

export function useAuth() {
  // const context = useContext(Context);
  // const { user, setUser } = context as ContextProps;
  const [user, setUser] = useState<UserLoginData>({} as UserLoginData);
  const [error, setError] = useState<boolean>(false);
  // const errorRef = useRef<boolean>(false);
  // const error = errorRef.current;

  function handleSignIn() {
    const controlledEmail = user?.email?.length || 0;
    const controlledPassword = user?.password?.length || 0;

    if (!user?.email || !user?.password) {
      setError(true);
      return;
    }

    if (controlledEmail < 10 || controlledPassword < 8) {
      setError(true);
      return;
    }

    console.log('success');
    setError(false);
  }

  function reset() {
    setUser({
      email: '',
      password: '',
    });

    setError(false);
  }

  return {
    user,
    setUser,
    error,
    handleSignIn,
    reset,
  };
}
