import '../css/LoginPage.css'
import { Button } from '@mui/material';

export default function LoginPage() {
    const handleSignIn = () =>{
        //Login...
    
    }
    
    const handleGoogleSignIn = () =>{
        //Login...
    
    }
  return <main className='login'>
            <section className='login__page'>
                <div className='login__logo'>
                    <img src='' alt='' />
                </div>

                <Button variant='contained' onClick={handleSignIn}>Sign In</Button>
                <Button variant='contained' onClick={handleGoogleSignIn}>Google</Button>
            </section>
            </main>;
}