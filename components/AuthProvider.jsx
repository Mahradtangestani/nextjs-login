"use client"


import { GoogleClientId } from '@/public/googleID';
import { GoogleOAuthProvider } from '@react-oauth/google';


const AuthProvider = ({children})=>{
    
    // “To create a Client ID, go to https://console.cloud.google.com/ and create your Client ID.”
    // From Mahrad 
    // Thanks 


    return (
        <GoogleOAuthProvider clientId={GoogleClientId}>
            {children}
        </GoogleOAuthProvider>
    )
}

export default AuthProvider;