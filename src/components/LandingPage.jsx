import * as React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function LandingPage(props) {
  const [loginClicked, setLoginClicked] = useState(false);
  const [registrationClicked, setRegistrationClicked] = useState(false);
  const navigate = useNavigate();

  const logoRedirect=()=>{
    navigate('/')
  }
  const handleRegistrationClick = () => {
    // Navigate to the login page
    setRegistrationClicked(true);
    setTimeout(() => {
      // Navigate to the login page after the delay
      navigate('/registration');;
      
      // Reset the loginClicked state after the navigation
      setLoginClicked(false);
    }, 1000);
    
  };

  const handleLoginClick = () => {
    setLoginClicked(true);
    console.log('clicked');
    setTimeout(() => {
      // Navigate to the login page after the delay
      navigate('/login');
      
      // Reset the loginClicked state after the navigation
      setLoginClicked(false);
    }, 1000);
  };
  

  return (
    <div className="flex flex-col items-stretch bg-white">
      <div className="flex overflow-hidden relative flex-col items-center px-5 pt-5 pb-12 w-full font-extrabold min-h-[910px] max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6c8560b0392e8cfb4d72875cb63a63a225cd2b7f2b837942c7ee95c2b3264b6b?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c8560b0392e8cfb4d72875cb63a63a225cd2b7f2b837942c7ee95c2b3264b6b?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c8560b0392e8cfb4d72875cb63a63a225cd2b7f2b837942c7ee95c2b3264b6b?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c8560b0392e8cfb4d72875cb63a63a225cd2b7f2b837942c7ee95c2b3264b6b?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c8560b0392e8cfb4d72875cb63a63a225cd2b7f2b837942c7ee95c2b3264b6b?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c8560b0392e8cfb4d72875cb63a63a225cd2b7f2b837942c7ee95c2b3264b6b?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c8560b0392e8cfb4d72875cb63a63a225cd2b7f2b837942c7ee95c2b3264b6b?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c8560b0392e8cfb4d72875cb63a63a225cd2b7f2b837942c7ee95c2b3264b6b?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
          className="object-cover object-center absolute inset-0 size-full"
        />
        <div className="flex relative gap-5 justify-between items-stretch w-full text-sm font-medium leading-5 whitespace-nowrap max-w-[1216px] max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/92d71dc243d1a1d1733da773dfa56fca382acade967c90cf155c6d0bc8d50d48?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
            className="object-center max-w-full aspect-[2.13] w-[102px] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300 active:scale-95"
            onClick={logoRedirect}
          />
        <div className="flex gap-4 items-start self-start">
          <button
              className={`grow justify-center items-stretch px-6 py-3 text-sm font-medium leading-5 text-white bg-blue-700 rounded-lg max-md:px-5 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300 active:scale-95 ${loginClicked ? 'opacity-75' : ''}`}
              onClick={() => handleLoginClick()}
            >
              {loginClicked ? 'Logging in...' : 'Login'}
            </button>
            <button
              className={`flex flex-col flex-1 justify-center items-stretch py-px bg-blue-700 rounded-lg  ${registrationClicked ? 'opacity-75' : ''}`}
              onClick={() => handleRegistrationClick()}
            >
              <div className={`z-10 justify-center items-stretch px-6 py-3 text-sm font-medium leading-5 text-blue-700 bg-sky-50 rounded-lg border border-blue-700 border-solid max-md:px-5 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300 active:scale-95 ${registrationClicked ? 'border-opacity-75' : ''}`}>
                {registrationClicked ? 'Registering...' : 'Registration'}
              </div>
            </button>
          </div>
        </div>
        <div className="flex relative flex-col self-stretch mt-5 w-full bg-slate-300 min-h-[1px] max-md:max-w-full" />
        <div className="relative mt-44 text-6xl text-center text-gray-900 leading-[75px] w-[863px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
          Analytics that transform your product inside-out
        </div>
        <div className="flex relative gap-5 justify-between items-start mt-12 mb-64 text-xl leading-7 text-center whitespace-nowrap max-md:flex-wrap max-md:my-10 max-md:max-w-full">
          <button 
          type="button"
          onClick={()=>console.log('hello')}
          className="grow justify-center items-stretch px-12 py-6 text-white bg-blue-700 rounded-lg max-md:px-5 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300 active:scale-95" >
            Request for Demo
          </button>
          <div className="flex flex-col flex-1 justify-center items-stretch py-0.5 mt-0 text-blue-700 bg-blue-700 rounded-lg">
            <button 
            type="button"
            onClick={()=>console.log('hello')}
            className="z-10 justify-center items-stretch px-12 py-6 -mt-1 bg-blue-50 rounded-lg border-2 border-solid border-[color:var(--Corporate-Color,#0052CC)] max-md:px-5 transition-all duration-300 transform hover:scale-105 ">
              Download
            </button>
          </div>
        </div>
      </div>

      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0080adc4a86fa5c813f05bbe320067ffdcd98302c329d617e54029bb4593ea2b?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0080adc4a86fa5c813f05bbe320067ffdcd98302c329d617e54029bb4593ea2b?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0080adc4a86fa5c813f05bbe320067ffdcd98302c329d617e54029bb4593ea2b?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0080adc4a86fa5c813f05bbe320067ffdcd98302c329d617e54029bb4593ea2b?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0080adc4a86fa5c813f05bbe320067ffdcd98302c329d617e54029bb4593ea2b?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0080adc4a86fa5c813f05bbe320067ffdcd98302c329d617e54029bb4593ea2b?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0080adc4a86fa5c813f05bbe320067ffdcd98302c329d617e54029bb4593ea2b?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0080adc4a86fa5c813f05bbe320067ffdcd98302c329d617e54029bb4593ea2b?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
        className="object-center z-10 self-center mt-[-320px] w-full aspect-[1.19] max-w-[1032px] max-md:mt-0 max-md:max-w-full rounded-lg rounded-s-2xl"
      />

      <div className="flex flex-col mt-24 w-full bg-neutral-200 min-h-[1px] max-md:mt-10 max-md:max-w-full" />
      <div className="self-center mt-28 text-xl font-medium leading-7 text-center text-blue-700 whitespace-nowrap max-md:mt-10">
        Products Features
      </div>
      <div className="self-center mt-10 text-5xl font-extrabold text-center text-gray-900 leading-[62.4px] max-md:max-w-full max-md:text-4xl">
        Make more out of your data
      </div>
      <div className="self-center px-5 mt-24 w-full max-w-[1216px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
          <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-end text-2xl font-extrabold leading-8 text-right text-gray-900 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/57061242209deed21fc751781c0f37b9365de9409505a91bfb013b46b580280f?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
                className="object-center aspect-square w-[72px] shadow-2xl"
              />
              <div className="mt-7 whitespace-nowrap">Real-time analytics</div>
              <div className="self-stretch mt-7 text-base leading-7 text-neutral-600">
                See product usage, sign-ins, feature metrics change as users
                work on your.
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/be80d07927290a3dc3f93f133e5dcc397d61186cb1a51d5fab684b32bc9a338e?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
                className="object-center mt-16 aspect-square w-[72px] max-md:mt-10 shadow-2xl"
              />
              <div className="mt-7 whitespace-nowrap">Intuitive dashboard</div>
              <div className="self-stretch mt-9 text-base leading-7 text-neutral-600">
                See product usage, sign-ins, feature metrics change as users
                work on your.
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/011bfc56631dfb8c0570c80713a6cb3c10b7ecb074258f65c229dfa60be3749a?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
                className="object-center mt-16 aspect-square w-[72px] max-md:mt-10 shadow-2xl "
              />
              <div className="mt-7 whitespace-nowrap">Smart suggestions</div>
              <div className="self-stretch mt-7 text-base leading-7 text-neutral-600">
                See product usage, sign-ins, feature metrics change as users
                work on your.
              </div>
            </div>
          </div>




          {/* editing */}
          <div className="flex flex-col items-stretch ml-5 w-[100%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center items-center self-stretch px-16 my-auto w-full bg-blue-700 rounded-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://s3-alpha-sig.figma.com/img/7cde/9ecb/73c9e5469d942d5600b7605b082e5049?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LXn8Et3sCdMD8bzNyaFAPt8HJ7fNH2d5f50xJN3TxEERp9rKo2SHkV79vBrbrtPutBDh6kXBTE0CzEEswNJR52-Jr9GfL-FZ6wM8ivrOJHmT2ZE7FaXQuMsrQJxE3vxKvagrIZ-0Fj-A9LKvdkKtNpWp45F3jxC4MHVIz7lI3zGjxO~Ji5g~n8x7iMpg2vjY381yZMr7PvIQE0vT0GAEpA6Wu-EolMPq~amPqaaOrsNu0k6b8AltVq-CNRzG-HIpxUfBcvO5c50~78NHDushqrh6YbmFysKMRo697ILyebVAyIOM8Ub7NAbi0~jwkZ5gF2X3BM5JXuYHf71IluCbNA__"
                className="object-center z-10 mt-0 max-w-full aspect-[0.5] w-[372px] rounded-3xl shadow-lg shadow-indigo-500/40"
              />
            </div>
          </div>

          <div className="flex flex-col items-stretch ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-stretch text-2xl font-extrabold leading-8 text-gray-900 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f02b6983f944f04323be926f0a0d8909c9cbee945eb516b5275392df13103842?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
                className="object-center aspect-square w-[72px]"
              />
              <div className="mt-7">Multiple views</div>
              <div className="mt-7 text-base leading-7 text-neutral-600">
                See product usage, sign-ins, feature metrics change as users
                work on your.
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5ef9e54630341450b412fc0ad6c1ce78247638d5c5a472e4d589a571e3d499a?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
                className="object-center mt-16 aspect-square w-[72px] max-md:mt-10 shadow-2xl"
              />
              <div className="mt-7">AI-led diagnoses</div>
              <div className="mt-7 text-base leading-7 text-neutral-600">
                See product usage, sign-ins, feature metrics change as users
                work on you.
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad943d818b52b9741108e30df20a9d135a648206d70d56d362e6eabf16c29d07?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
                className="object-center mt-16 aspect-square w-[72px] max-md:mt-10 shadow-2xl"
              />
              <div className="mt-7">Responsive</div>
              <div className="mt-7 text-base leading-7 text-neutral-600">
                See product usage, sign-ins, feature metrics change as users
                work on your.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 mt-40 w-full min-h-[1196px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/401bacc50dc16ec67e44e91c1e1564371d70bd5fa04e2e0ad58846355b66cc03?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/401bacc50dc16ec67e44e91c1e1564371d70bd5fa04e2e0ad58846355b66cc03?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/401bacc50dc16ec67e44e91c1e1564371d70bd5fa04e2e0ad58846355b66cc03?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/401bacc50dc16ec67e44e91c1e1564371d70bd5fa04e2e0ad58846355b66cc03?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/401bacc50dc16ec67e44e91c1e1564371d70bd5fa04e2e0ad58846355b66cc03?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/401bacc50dc16ec67e44e91c1e1564371d70bd5fa04e2e0ad58846355b66cc03?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/401bacc50dc16ec67e44e91c1e1564371d70bd5fa04e2e0ad58846355b66cc03?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/401bacc50dc16ec67e44e91c1e1564371d70bd5fa04e2e0ad58846355b66cc03?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
          className="object-cover object-center absolute inset-0 size-full shadow-2xl"
        />
        <div className="flex relative flex-col items-stretch mt-24 mb-16 w-full max-w-[1216px] max-md:my-10 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
              <div className="flex flex-col items-stretch w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3bbb43dfcb228848016a4a37356686ad99122a318a92453eae22f2e89f499d0b?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bbb43dfcb228848016a4a37356686ad99122a318a92453eae22f2e89f499d0b?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bbb43dfcb228848016a4a37356686ad99122a318a92453eae22f2e89f499d0b?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bbb43dfcb228848016a4a37356686ad99122a318a92453eae22f2e89f499d0b?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bbb43dfcb228848016a4a37356686ad99122a318a92453eae22f2e89f499d0b?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bbb43dfcb228848016a4a37356686ad99122a318a92453eae22f2e89f499d0b?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bbb43dfcb228848016a4a37356686ad99122a318a92453eae22f2e89f499d0b?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bbb43dfcb228848016a4a37356686ad99122a318a92453eae22f2e89f499d0b?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
                  className="object-center grow w-full aspect-[0.83] max-md:mt-10 max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col items-stretch ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-stretch self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                  <div className="text-xl font-semibold leading-7 text-blue-700 max-md:max-w-full">
                    About Us
                  </div>
                  <div className="mt-10 text-4xl font-extrabold text-gray-900 leading-[60px] max-md:mt-10 max-md:max-w-full">
                    A dedicated solution for startups and enterprises
                  </div>
                  <div className="mt-14 text-xl leading-8 text-neutral-600 max-md:mt-10 max-md:max-w-full">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </div>
                  <div className="flex flex-col shrink-0 mt-11 h-0.5 bg-zinc-100 max-md:mt-10 max-md:max-w-full" />
                  <div className="mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
                      <div className="flex flex-col items-stretch w-[16%] max-md:ml-0 max-md:w-full">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bb7250b45087f7687eab5dc3c4bdad7381d0d2ece4ab25ee228706d52c70b995?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb7250b45087f7687eab5dc3c4bdad7381d0d2ece4ab25ee228706d52c70b995?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb7250b45087f7687eab5dc3c4bdad7381d0d2ece4ab25ee228706d52c70b995?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb7250b45087f7687eab5dc3c4bdad7381d0d2ece4ab25ee228706d52c70b995?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb7250b45087f7687eab5dc3c4bdad7381d0d2ece4ab25ee228706d52c70b995?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb7250b45087f7687eab5dc3c4bdad7381d0d2ece4ab25ee228706d52c70b995?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb7250b45087f7687eab5dc3c4bdad7381d0d2ece4ab25ee228706d52c70b995?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb7250b45087f7687eab5dc3c4bdad7381d0d2ece4ab25ee228706d52c70b995?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
                          className="object-center rounded-full aspect-square w-[88px] max-md:mt-10"
                        />
                      </div>
                      <div className="flex flex-col items-stretch ml-5 w-[84%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow items-stretch mt-2.5 text-2xl max-md:mt-10 max-md:max-w-full">
                          <div className="font-medium leading-9 text-neutral-600 max-md:max-w-full">
                            &quot;Fieldx is for teams that care about their
                            product growth.&quot;
                          </div>
                          <div className="mt-5 font-bold text-gray-900 leading-[160%] max-md:max-w-full">
                            CEO, FieldX
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-center mt-40 w-full max-w-[1124px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
              <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-center text-center whitespace-nowrap leading-[150%] max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cefda8e9fc42dd649b303cc11ac355e827dfcb10544d990ecc1d6018b8680ff?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
                    className="object-center justify-center items-center w-12 aspect-square"
                  />
                  <div className="mt-8 text-4xl font-extrabold text-blue-700">
                    10+
                  </div>
                  <div className="self-stretch mt-10 text-2xl text-neutral-600">
                    Platforms Created
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-stretch text-center whitespace-nowrap leading-[150%] max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0526e12ffa2c1df5e05523c98ddc3a021bb72226ac60f64973bbe1f86ef1c6e7?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
                    className="object-center justify-center items-center self-center w-12 aspect-square"
                  />
                  <div className="mt-8 text-4xl font-extrabold text-blue-700">
                    1559+
                  </div>
                  <div className="mt-10 text-2xl text-neutral-600">
                    Total Users
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-center text-center whitespace-nowrap leading-[150%] max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a18c7d01b8425b1c77bf551efd67021844eadd98710ff9a0e15d7326481af9e?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
                    className="object-center justify-center items-center w-12 aspect-square"
                  />
                  <div className="mt-8 text-4xl font-extrabold text-blue-700">
                    10<span className="text-blue-700">+</span>
                  </div>
                  <div className="self-stretch mt-10 text-2xl text-neutral-600">
                    Total Clients
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center text-center whitespace-nowrap leading-[150%] max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe2c827532aba1d0621b08ab22f4a3df093f79afc3e94c9e28e3b113ff336a69?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
                    className="object-center justify-center items-center w-12 aspect-square"
                  />
                  <div className="self-stretch mt-8 text-4xl font-extrabold text-blue-700">
                    300 Days
                  </div>
                  <div className="mt-8 text-2xl text-neutral-600">
                    In Operations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* editing */}
      <div className="flex flex-col bg-blue-700 min-h-[934px]" >
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12  min-h-[934px] max-md:px-5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/af4b52c11c08c72532bb9f8d306c5b840b2383be7669272171f1c1fd4b112d24?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/af4b52c11c08c72532bb9f8d306c5b840b2383be7669272171f1c1fd4b112d24?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af4b52c11c08c72532bb9f8d306c5b840b2383be7669272171f1c1fd4b112d24?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/af4b52c11c08c72532bb9f8d306c5b840b2383be7669272171f1c1fd4b112d24?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/af4b52c11c08c72532bb9f8d306c5b840b2383be7669272171f1c1fd4b112d24?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af4b52c11c08c72532bb9f8d306c5b840b2383be7669272171f1c1fd4b112d24?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/af4b52c11c08c72532bb9f8d306c5b840b2383be7669272171f1c1fd4b112d24?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/af4b52c11c08c72532bb9f8d306c5b840b2383be7669272171f1c1fd4b112d24?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
            className="object-cover object-center absolute inset-0 size-full"
          />
          <div className="flex relative flex-col items-center mt-24 w-full max-w-[1216px] max-md:mt-10 max-md:max-w-full">
            <div className="text-xl font-medium leading-7 text-center text-white whitespace-nowrap">
              Common Question{" "}
            </div>
            <div className="mt-11 text-5xl font-extrabold text-center text-white leading-[72px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              Frequently asked questions
            </div>
            <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
                <div className="flex flex-col items-stretch w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-stretch text-xl max-md:mt-8 max-md:max-w-full">
                    <div className="flex flex-col items-stretch px-8 py-8 bg-white rounded-2xl border border-solid border-neutral-200 max-md:px-5 max-md:max-w-full">
                      <div className="flex gap-5 justify-between items-stretch font-semibold text-gray-900 leading-[150%] max-md:flex-wrap max-md:max-w-full">
                        <div className="flex-auto">
                          What kind of data can I see in FieldX?
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1ab7018225503e557a3f96f56828f3649be8325d73b12e3148e9542533c2cae?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
                          className="object-center justify-center items-center w-6 aspect-square"
                        />
                      </div>
                      <div className="mt-9 leading-8 text-neutral-600 max-md:max-w-full">
                        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in voluptate.
                      </div>
                    </div>
                    <div className="flex gap-5 justify-between items-stretch px-8 py-8 mt-8 font-semibold text-gray-900 bg-white rounded-2xl border border-solid border-neutral-200 leading-[150%] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                      <div className="flex-auto">
                        Does Bizzy read my customers' data?
                      </div>{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1072a4a17bef7b5071c16be7d88a286e28e4750dd0975bd59f094b833a8649ad?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
                        className="object-center justify-center items-center self-start w-6 aspect-square"
                      />
                    </div>{" "}
                    <div className="flex gap-5 justify-between items-stretch px-8 py-8 mt-8 font-semibold text-gray-900 bg-white rounded-2xl border border-solid border-neutral-200 leading-[150%] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                      <div className="flex-auto">
                        What's your refund and cancellation policy?
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1072a4a17bef7b5071c16be7d88a286e28e4750dd0975bd59f094b833a8649ad?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
                        className="object-center justify-center items-center self-start w-6 aspect-square"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-stretch text-xl font-semibold leading-8 text-gray-900 max-md:mt-8 max-md:max-w-full">
                    <div className="flex gap-5 justify-between items-stretch px-8 py-8 bg-white rounded-2xl border border-solid border-neutral-200 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                      <div className="flex-auto">How do you take payments?</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1072a4a17bef7b5071c16be7d88a286e28e4750dd0975bd59f094b833a8649ad?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
                        className="object-center justify-center items-center self-start w-6 aspect-square"
                      />
                    </div>
                    <div className="flex gap-5 justify-between items-stretch px-8 py-8 mt-8 bg-white rounded-2xl border border-solid border-neutral-200 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                      <div className="flex-auto">
                        Can I also track website analytics on fieldX?
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1072a4a17bef7b5071c16be7d88a286e28e4750dd0975bd59f094b833a8649ad?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
                        className="object-center justify-center items-center self-start w-6 aspect-square"
                      />
                    </div>
                    <div className="flex gap-5 justify-between items-stretch px-8 py-8 mt-8 leading-8 bg-white rounded-2xl border border-solid border-neutral-200 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                      <div className="flex-auto">
                        What makes Bizzy different from other analytics tools?
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1072a4a17bef7b5071c16be7d88a286e28e4750dd0975bd59f094b833a8649ad?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
                        className="object-center justify-center items-center self-start w-6 aspect-square"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>














      <div className="flex flex-col justify-center items-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-stretch mt-24 mb-16 w-full max-w-[1178px] max-md:my-10 max-md:max-w-full">
          <div className="self-center text-3xl font-semibold leading-10 text-center text-blue-700 max-md:max-w-full">
            5,000+ high-impact teams rely on Fieldx
          </div>
          <div className="flex gap-5 justify-between items-stretch mt-16 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1004c4e6968d109a7a13960be4650266150750975ca4551abbc9b0ce561cfe04?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1004c4e6968d109a7a13960be4650266150750975ca4551abbc9b0ce561cfe04?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1004c4e6968d109a7a13960be4650266150750975ca4551abbc9b0ce561cfe04?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1004c4e6968d109a7a13960be4650266150750975ca4551abbc9b0ce561cfe04?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1004c4e6968d109a7a13960be4650266150750975ca4551abbc9b0ce561cfe04?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1004c4e6968d109a7a13960be4650266150750975ca4551abbc9b0ce561cfe04?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1004c4e6968d109a7a13960be4650266150750975ca4551abbc9b0ce561cfe04?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1004c4e6968d109a7a13960be4650266150750975ca4551abbc9b0ce561cfe04?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
              className="object-center max-w-full aspect-[3.33] w-[161px]"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ffd503dd28ac2e7efe4b7313fda369d18e71eeae451f6cc199a3e55e3fc42737?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffd503dd28ac2e7efe4b7313fda369d18e71eeae451f6cc199a3e55e3fc42737?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffd503dd28ac2e7efe4b7313fda369d18e71eeae451f6cc199a3e55e3fc42737?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffd503dd28ac2e7efe4b7313fda369d18e71eeae451f6cc199a3e55e3fc42737?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffd503dd28ac2e7efe4b7313fda369d18e71eeae451f6cc199a3e55e3fc42737?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffd503dd28ac2e7efe4b7313fda369d18e71eeae451f6cc199a3e55e3fc42737?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffd503dd28ac2e7efe4b7313fda369d18e71eeae451f6cc199a3e55e3fc42737?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffd503dd28ac2e7efe4b7313fda369d18e71eeae451f6cc199a3e55e3fc42737?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
              className="object-center max-w-full aspect-[3.85] w-[183px]"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5d7db2d38f598dca1c58bf33f524153c9a888e605e18276ead003f090ddd3170?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d7db2d38f598dca1c58bf33f524153c9a888e605e18276ead003f090ddd3170?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d7db2d38f598dca1c58bf33f524153c9a888e605e18276ead003f090ddd3170?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d7db2d38f598dca1c58bf33f524153c9a888e605e18276ead003f090ddd3170?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d7db2d38f598dca1c58bf33f524153c9a888e605e18276ead003f090ddd3170?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d7db2d38f598dca1c58bf33f524153c9a888e605e18276ead003f090ddd3170?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d7db2d38f598dca1c58bf33f524153c9a888e605e18276ead003f090ddd3170?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d7db2d38f598dca1c58bf33f524153c9a888e605e18276ead003f090ddd3170?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
              className="object-center max-w-full aspect-[3.57] w-[173px]"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a91b1d93d0deac74e1c85f4f7cfcc68efa5c933492ab9e785a139918c4d86bc9?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91b1d93d0deac74e1c85f4f7cfcc68efa5c933492ab9e785a139918c4d86bc9?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91b1d93d0deac74e1c85f4f7cfcc68efa5c933492ab9e785a139918c4d86bc9?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91b1d93d0deac74e1c85f4f7cfcc68efa5c933492ab9e785a139918c4d86bc9?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91b1d93d0deac74e1c85f4f7cfcc68efa5c933492ab9e785a139918c4d86bc9?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91b1d93d0deac74e1c85f4f7cfcc68efa5c933492ab9e785a139918c4d86bc9?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91b1d93d0deac74e1c85f4f7cfcc68efa5c933492ab9e785a139918c4d86bc9?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91b1d93d0deac74e1c85f4f7cfcc68efa5c933492ab9e785a139918c4d86bc9?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
              className="object-center max-w-full aspect-[2.78] w-[133px]"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/52aa20eea7b1c6076c9f0d0f4a7876a32255a69549ae8adb1341dca0ef61de6e?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/52aa20eea7b1c6076c9f0d0f4a7876a32255a69549ae8adb1341dca0ef61de6e?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/52aa20eea7b1c6076c9f0d0f4a7876a32255a69549ae8adb1341dca0ef61de6e?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/52aa20eea7b1c6076c9f0d0f4a7876a32255a69549ae8adb1341dca0ef61de6e?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/52aa20eea7b1c6076c9f0d0f4a7876a32255a69549ae8adb1341dca0ef61de6e?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/52aa20eea7b1c6076c9f0d0f4a7876a32255a69549ae8adb1341dca0ef61de6e?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/52aa20eea7b1c6076c9f0d0f4a7876a32255a69549ae8adb1341dca0ef61de6e?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/52aa20eea7b1c6076c9f0d0f4a7876a32255a69549ae8adb1341dca0ef61de6e?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
              className="object-center max-w-full aspect-[3.57] w-[172px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-16 py-12 w-full text-center bg-slate-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center mt-10 mb-5 w-full max-w-[1216px] max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5068164a83c103a840d3040f080ed3c7fbb0901474ae1d2829765bf840050f4?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
            className="object-center max-w-full aspect-[2.13] w-[136px]"
          />
          <div className="mt-10 text-base font-medium leading-6 text-white w-[516px] max-md:max-w-full">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque.
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1b0c914e2d75a9c3d60557bd585d3fca5949ab4bcfebe344a82b1b46f62c22e?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
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

