import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
// import { signup } from '../redux/actions/authActions';
export default function RegistrationPage(props) {


  const [loginClicked, setLoginClicked] = useState(false);
  const [registrationClicked, setRegistrationClicked] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoRedirect=()=>{
    navigate('/')
  }
  const handleLogin = () => {
    // Add your login logic here
    setLoginClicked(true);
    setTimeout(() => {
      navigate('/login');
      setLoginClicked(false);
    }, 1000);
  };

  const handleRegistration = () => {
    setRegistrationClicked(true);
    setTimeout(() => {
      navigate('/registration');;
      setRegistrationClicked(false);
    }, 1000);
  };

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleAgreeTermsChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  const handleCreateAccount = () => {
    // if(fullName===''||id===''||email===''||mobileNumber===''||password===''||confirmPassword===){
    //   alert('Input fields missing!');
    // }
    // const userData = {
    //   name: fullName,
    //   email,
    //   employeeId: id,
    //   phoneNumber: mobileNumber,
    //   password,
    //   passwordConfirm: confirmPassword,
    //   role,
    // };

    // dispatch(signup(userData));
    console.log("Creating account with the following data:");
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("ID:", id);
    console.log("Mobile Number:", mobileNumber);
    console.log("Role:", role);
    console.log("Agree to Terms:", agreeTerms);
  };
  return (
    <div className="flex flex-col items-stretch bg-white">
      <div className="flex overflow-hidden relative flex-col items-center pt-5 w-full min-h-[1569px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/767713bc914a14eec8f866fe84ae0654c4d20db4f1885a745d1a34b0d3b58eb3?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
          className="object-cover object-center absolute inset-0 size-full"
        />
        <div className="flex relative gap-5 justify-between items-stretch w-full max-w-[1216px] max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5373fc16df16badd4fb3f1ce7a8a4a301f17a9613a521325a7067a3f9d25cd3?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
            className="object-contain object-center shrink-0 max-w-full aspect-[2.13] w-[102px] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300 active:scale-95"
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
              className={`flex flex-col flex-1 justify-center items-stretch py-px bg-blue-700 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300 active:scale-95 ${registrationClicked ? 'opacity-75' : ''}`}
              onClick={() => handleRegistration()}
            >
              <div className={`z-10 justify-center items-stretch px-6 py-3 text-sm font-medium leading-5 text-blue-700 bg-sky-50 rounded-lg border border-blue-700 border-solid max-md:px-5 ${registrationClicked ? 'border-opacity-75' : ''}`}>
                {registrationClicked ? 'Registering...' : 'Registration'}
              </div>
            </button>
          </div>

        </div>
        <div className="flex relative flex-col self-stretch mt-5 w-full bg-slate-300 min-h-[1px] max-md:max-w-full" />
        <div className="flex relative z-10 flex-col justify-center items-center px-16 py-12 mt-60 mb-0 w-full max-w-screen-lg bg-white rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col items-stretch mt-12 mb-8 max-w-full text-xl font-medium text-zinc-500 w-[609px] max-md:mt-10">
            <div className="self-center text-5xl font-bold text-center text-gray-900 whitespace-nowrap leading-[72px] max-md:text-4xl">
              Create Account
            </div>
            <div className="self-center mt-11 text-2xl font-light leading-9 text-center text-neutral-600 max-md:mt-10 max-md:max-w-full">
              Fill in the details below to create an account
            </div>
            <div className="mt-16 leading-[150%] max-md:mt-10 max-md:max-w-full">
              Enter Your Full Name
            </div>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-white-200 border-b border-gray-400 px-5 py-2 mt-0 max-md:max-w-full"
            />

            <div className="mt-12 leading-[150%] max-md:mt-10 max-md:max-w-full">
              Enter Your Email
            </div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white-200 border-b border-gray-400 px-5 py-2 mt-0 max-md:max-w-full"
            />
            <div className="mt-12 leading-[150%] max-md:mt-10 max-md:max-w-full">
              Your ID
            </div>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="bg-white-200 border-b border-gray-400 px-5 py-2 mt-0 max-md:max-w-full"
            />
            <div className="mt-12 leading-[150%] max-md:mt-10 max-md:max-w-full">
              Your Mobile Number
            </div>
            <input
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="bg-white-200 border-b border-gray-400 px-5 py-2 mt-0 max-md:max-w-full"
            />            <div className="mt-12 leading-[150%] max-md:mt-10 max-md:max-w-full">
              Password
            </div>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white-200 border-b border-gray-400 px-5 py-2 mt-0 max-md:max-w-full"
            />            <div className="mt-12 leading-[150%] max-md:mt-10 max-md:max-w-full">
              Confirm Password
            </div>
            <input
              type="text"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-white-200 border-b border-gray-400 px-5 py-2 mt-0 max-md:max-w-full"
            />            <div className="flex gap-5 justify-between items-stretch px-px mt-11 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex-auto self-start mt-2 text-xl font-medium leading-8 text-zinc-500">
                Select Your Role
              </div>
              {/* <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/227236a63262de33801f00684d04a369615fb70ed5fdf195095c341ce31e2196?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
                className="object-contain object-center shrink-0 justify-center items-center w-6 aspect-square"
              /> */}

            </div>
            <select
              value={role}
              onChange={handleRoleChange}
              className="border-b border-gray-300 px-5 py-5 mt-2 focus:outline-none focus:border-gray-300"
            >
              <option value="" disabled></option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              {/* Add more options as needed */}
            </select>
            <div className="flex gap-4 justify-between items-stretch mt-10 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col shrink-0 w-7 h-7 bg-white rounded border border-gray-400 border-solid">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={handleAgreeTermsChange}
                  className="opacity-0 absolute"
                />
                {agreeTerms && (
                  <svg
                    className="w-5 h-5 text-blue-700 fill-current self-center"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                )}
              </div>
              <div className="flex-auto text-xl font-medium leading-8 text-blue-700 max-md:max-w-full">
                I read and agree to the{" "}
                <span className="text-blue-700">Terms & Conditions</span>
              </div>
            </div>
            <button
              className="justify-center items-center px-16 py-6 mt-12 text-xl font-extrabold leading-7 text-center text-white bg-blue-700 rounded-lg max-md:px-5 max-md:mt-10 max-md:max-w-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300 active:scale-95"
              onClick={handleCreateAccount}
            >
              Create Account
            </button>
            <div className="self-center mt-20 text-2xl leading-9 text-blue-700 whitespace-nowrap max-md:mt-10">
              Already have an account?{" "}
              <span className="text-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300 active:scale-9"
              onClick={handleLogin}
              >Sign In</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-16 py-12 w-full bg-slate-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center mt-10 mb-5 w-full text-center max-w-[1216px] max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed6f25358084947c54dbee38e0f4dda6938766f7e297809ba5b5ddd6fbc6b96c?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
            className="object-contain object-center max-w-full aspect-[2.13] w-[136px]"
          />
          <div className="mt-10 text-base font-medium leading-6 text-white w-[516px] max-md:max-w-full">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque.
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/25a48ab51b096cd2ef27f57a10e84a791a10b0d80a18297d168f0beff7005c28?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
            className="object-contain object-center mt-9 max-w-full aspect-[5] w-[200px]"
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

