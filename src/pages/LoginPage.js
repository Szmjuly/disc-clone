import '../css/LoginPage.css'
import { Button } from '@mui/material';
import { auth, provider } from '../firebase/firebase';
import { signInWithPopup } from 'firebase/auth'

export default function LoginPage() {
    const handleSignIn = () =>{
        //Login...
    
    }
    
    const handleGoogleSignIn = () =>{
        // Google Login...
        signInWithPopup(auth, provider).catch(error => alert(error.message))
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