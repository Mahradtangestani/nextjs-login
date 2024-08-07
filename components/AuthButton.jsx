import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/navigation';




const AuthButton = ()=>{

    const router = useRouter()

    const successLogin = credentialResponse => {

        const token = "fdojaodjibfuejdkkwd"
        const cookieStore = new Cookies(null , {path:"/"})
        cookieStore.set("loginToken" , token)
        router.push("/userpanel")

        const userInfo = jwtDecode(credentialResponse.credential)
        console.log(userInfo);
    }

    const catchLogin = () => {
        console.log('Login Failed');
    }

    

    // const login = useGoogleLogin({
    //     onSuccess: async (tokenResponse) => {
    //         const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
    //             headers: {
    //                 Authorization: `Bearer ${tokenResponse.access_token}`
    //             }
    //         })
    //         console.log(res);
    //     },
    // });
    

    return (
        // <button className='bg-gray-700 hover:bg-gray-400 hover:text-black text-white rounded-full h-12 w-96' onClick={() => login()}>Sign in with Google 🚀</button>
        <GoogleLogin onSuccess={successLogin} onError={catchLogin} />
    )
}

export default AuthButton;