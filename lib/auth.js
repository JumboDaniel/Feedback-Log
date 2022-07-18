import React, { useState, useEffect, useContext, createContext } from 'react';
import { createUser } from './db';
import firebase from './firebase';

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

const formatUser = (user) => {
  return{
    uid: user.uid,
    name: user.displayName,
    email: user.email,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL
  }
}

function useProvideAuth() { 
  const [user, setUser] = useState(null);
  const handleUser = (rawuser) => {
    if(rawuser){
      const user =formatUser(rawuser);
      setUser(user);
      createUser(user.uid, user)
      return user
    }
    else {
      setUser(false)
      return false
    }
  }
  const signinWithGithub = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        handleUser(response.user)
        console.log(response.user)
        return response.user;
      });
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        handleUser()
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
    signout
  };
}