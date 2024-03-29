import React, { useState, useEffect, useContext, createContext } from "react";
import { useRouter } from "next/router";
////file import 
import { createUser } from "./db";
import firebase from "./firebase";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

const formatUser = (user) => {
  return {
    uid: user.uid,
    name: user.displayName,
    email: user.email,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    token: user._delegate.accessToken,
  };
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const router = useRouter()

  ////////////////////////
  const handleUser = (rawuser) => {
    if (rawuser) {
      const user = formatUser(rawuser);
      const { accessToken, ...userWithoutToken } = user;
      setUser(user);
      createUser(user.uid, userWithoutToken);
      return user;
    } else {
      setUser(false);
      router.push('/');
      return false;
    }
  };
  ////////////////////////
  const signinWithGithub = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        handleUser(response.user);
        router.push('/dashboard');
      });
  };
  /////////////////////////////////
  const signinWithGoogle = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        handleUser(response.user);
        router.push('/dashboard');
      });
  };
  /////////////////////////////
  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        handleUser();
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);
  return {
    user,
    signinWithGithub,
    signinWithGoogle,
    signout,
  };
}


