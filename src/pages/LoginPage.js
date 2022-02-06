import '../css/LoginPage.css'
import { Button } from '@mui/material';
import { auth, provider } from '../firebase/firebase';
import { signInWithPopup } from 'firebase/auth'

import { serverTimestamp, setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export default function LoginPage() { 
    const handleSignIn = () =>{
        //Login...
    
    }
    
    const handleGoogleSignIn = () =>{
        // Google Login...
        signInWithPopup(auth, provider)
        .then((authenticatedUser) => {
            setDoc(doc(db, 'accounts/users/google', authenticatedUser.user.email), {
                userName: authenticatedUser.user.displayName,
                displayName: authenticatedUser.user.displayName,
                uid: authenticatedUser.user.uid,
                photo: authenticatedUser.user.photoURL,
                email: authenticatedUser.user.email,
                lastLoginTime: serverTimestamp(),
              });
        })
        .catch(error => alert(error.message))
    }
  return <main className='login'>
            <section className='login__page'>
                <div className='login__logo'>
                    <img src='' alt='' />
                </div>

                <div className='login__btns'>
                <Button variant='contained' onClick={handleSignIn}>Sign in with Email</Button>
                <Button variant='contained' onClick={handleGoogleSignIn}>Sign in with Google</Button>
                </div>
            </section>
            </main>;
}