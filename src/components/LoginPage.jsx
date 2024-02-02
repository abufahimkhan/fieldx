import * as React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from "react-redux";
// import { login } from '../redux/actions/authActions';

export default function LoginPage(props) {

  const [loginClicked, setLoginClicked] = useState(false);
  const [registrationClicked, setRegistrationClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const logoRedirect=()=>{
    navigate('/')
  }
  const handleLogin = () => {
    if(email==''||password==''){
      alert('Input fields missing!');
    }
    setLoginClicked(true);
    // dispatch(login({ email, password }))
    // .then(() => {

    setTimeout(() => {
      navigate('/login');
     setLoginClicked(false);
    }, 1000);
  // })
  // .catch((error) => {
  //   console.error("Login failed:", error);
  // })
  // .finally(() => {
  //   setLoginClicked(false);
  // });
  };

  const handleRegistration = () => {
    setRegistrationClicked(true);
    setTimeout(() => {
      navigate('/registration');;
      setLoginClicked(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-stretch bg-white">
      <div className="flex overflow-hidden relative flex-col items-center pt-5 pb-12 w-full font-medium leading-[150%] min-h-[1103px] max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3464260309d41b75bc0978bc36d4e9848a6e7598d3a139a35fe8da9d11e0cfb3?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3464260309d41b75bc0978bc36d4e9848a6e7598d3a139a35fe8da9d11e0cfb3?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3464260309d41b75bc0978bc36d4e9848a6e7598d3a139a35fe8da9d11e0cfb3?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3464260309d41b75bc0978bc36d4e9848a6e7598d3a139a35fe8da9d11e0cfb3?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3464260309d41b75bc0978bc36d4e9848a6e7598d3a139a35fe8da9d11e0cfb3?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3464260309d41b75bc0978bc36d4e9848a6e7598d3a139a35fe8da9d11e0cfb3?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3464260309d41b75bc0978bc36d4e9848a6e7598d3a139a35fe8da9d11e0cfb3?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3464260309d41b75bc0978bc36d4e9848a6e7598d3a139a35fe8da9d11e0cfb3?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
          className="object-cover object-center absolute inset-0 size-full"
        />
        <div className="flex relative gap-5 justify-between items-stretch w-full text-sm whitespace-nowrap max-w-[1216px] max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0551fbf8d97860e201a2b38412a7945c06b51ebdc0644e90a30827d779a96c33?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
            className="object-center max-w-full aspect-[2.13] w-[102px] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300 active:scale-95"
            onClick={logoRedirect}
          />
          <div className="flex gap-4 items-start self-start">
          <button
              className={`grow justify-center items-stretch px-6 py-3 text-sm font-medium leading-5 text-white bg-blue-700 rounded-lg max-md:px-5 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300 active:scale-95 ${loginClicked ? 'opacity-75' : ''}`}
              onClick={() => handleLogin()}
            >
              {loginClicked ? 'Logging in...' : 'Login'}
            </button>
            <button
              className={`flex flex-col flex-1 justify-center items-stretch py-px bg-blue-700 rounded-lg ${registrationClicked ? 'opacity-75' : ''}`}
              onClick={() => handleRegistration()}
            >
              <div className={`z-10 justify-center items-stretch px-6 py-3 text-sm font-medium leading-5 text-blue-700 bg-sky-50 rounded-lg border border-blue-700 border-solid max-md:px-5 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300 active:scale-95 ${registrationClicked ? 'border-opacity-75' : ''}`}>
                {registrationClicked ? 'Registering...' : 'Registration'}
              </div>
            </button>
          </div>
        </div>
        <div className="flex relative flex-col self-stretch mt-5 w-full bg-slate-300 min-h-[1px] max-md:max-w-full" />
        <div className="flex relative flex-col justify-center items-center px-16 py-12 mt-28 mb-10 w-full max-w-screen-lg text-xl bg-white rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col items-stretch mt-12 mb-14 max-w-full w-[608px] max-md:my-10">
            <div className="self-center text-5xl font-bold text-center text-gray-900 whitespace-nowrap max-md:text-4xl">
              Welcome Back!
            </div>
            <div className="self-center mt-11 text-2xl font-light text-center whitespace-nowrap text-neutral-600 max-md:mt-10">
              Please login to your account
            </div>
            <div className="mt-14 text-zinc-500 max-md:mt-10 max-md:max-w-full">
              Enter Your Email
            </div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white-200 border-b border-gray-400 px-5 py-2 mt-0 max-md:max-w-full"
            />            <div className="mt-12 text-zinc-500 max-md:mt-10 max-md:max-w-full">
              Password
            </div>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white-200 border-b border-gray-400 px-5 py-2 mt-0 max-md:max-w-full"
            />    
            <button
              className="justify-center items-center px-16 py-6 mt-12 text-xl font-extrabold leading-7 text-center text-white bg-blue-700 rounded-lg max-md:px-5 max-md:mt-10 max-md:max-w-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300 active:scale-95"
              onClick={handleLogin}
            >
              Sign in
            </button>        
           
            <div className="self-center mt-28 text-2xl text-center text-blue-700 whitespace-nowrap max-md:mt-10">
              Don't have any account?{" "}
              <span className="text-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300 active:scale-9"
              onClick={handleRegistration}
              >Sign Up</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-16 py-12 w-full text-center bg-slate-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center mt-10 mb-5 w-full max-w-[1216px] max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fa9d67ba3e810d863228cf59391407622ebd988acf0e092b15bb5b4a09d08f5?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
            className="object-center max-w-full aspect-[2.13] w-[136px]"
          />
          <div className="mt-10 text-base font-medium leading-6 text-white w-[516px] max-md:max-w-full">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque.
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f676a5b9ef5d1eeccc7ef338ef057ef3d5e78e6e4f5875b0aaa93e53f637a5a?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
            className="object-center mt-9 max-w-full aspect-[5] w-[200px]"
          />
          <div className="flex flex-col shrink-0 self-stretch mt-24 h-px bg-blue-950 max-md:mt-10 max-md:max-w-full" />
          <div className="mt-12 text-lg font-bold leading-7 text-red-600 whitespace-nowrap max-md:mt-10">
            © All rights reserve by <span className="text-red-600">MAAC</span>
          </div>
        </div>
      </div>
    </div>
  );
}

