/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import firebase from "firebase/compat/app";
import styled from "styled-components";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithGoogle, signOutWithGoogle } from "../../firebase/Signin";
import { firebaseconfig } from "../../firebase/firebaseconfig";
import { RoomiesPage } from "../../pages/RoomiesPage";
firebase.initializeApp(firebaseconfig);

const auth = firebase.auth();

export const SignButton = styled.button`
    background-color: #f9f9f9;
    border: 1px solid #f9f9f9;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 500;
    color: #000;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #000;
        color: #f9f9f9;
    }
`;

export const SignInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0rem;
    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
`;


export const SignInPage =  styled.div`
    display: flex;
    height: auto;
    min-height: 100vh;
    width: auto;
    padding: 2rem 0rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

function Autherntication() {
  const [user] = useAuthState(auth);
  const signIn = () => {
    signInWithGoogle();
  };
  const signOut = () => {
    signOutWithGoogle();
  };
  return (<>
    {!user&&<SignInPage>
      {!user&&<SignButton onClick={signIn}>Sign in with Google</SignButton>}
      {/* {user&&<SignButton onClick={signOut}>Sign out with Google</SignButton>} */}
      {user&&<RoomiesPage />}
      {/* {user && <SignButton>Current User: <img src={user.photoURL} alt="user" />{user?.displayName}</SignButton>} */}
    </SignInPage>}
    </>
  );
}

export default Autherntication;
