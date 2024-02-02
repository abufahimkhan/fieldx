import * as React from "react";
import { useState } from "react";
import '../App.css'
export default function RegionList(props) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isModalopen, setModalOpen] = useState(false);
  const Modal = ({ open, close }) => {
    if (!isModalopen) return null;
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="flex flex-col px-12 py-12 text-sm whitespace-nowrap bg-white rounded-xl border border-solid shadow-2xl border-neutral-200 max-w-[675px] text-zinc-600 ml-10">
          <div className="font-medium">Region</div>
          <div className="justify-center items-start py-4 pr-16 pl-3 mt-3 bg-white rounded-xl border border-gray-300 border-solid">
            <input
              type="text"
              placeholder="Type region" />
          </div>

          <div className="flex justify-between w-30 mt-20 gap-2">
            <button
              className="text-base text-center text-white rounded-xl border border-indigo-500 border-solid bg-sky-950 px-5 py-3"
              onClick={close}
            >
              Add Region
            </button>
            <button
              className="text-base text-center text-white rounded-xl border border-indigo-500 border-solid bg-sky-950 px-5 py-3"
              onClick={close}
            >
              Close
            </button>
          </div>
        </div>
      </div>

    );
  };
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className={`flex flex-col items-stretch bg-slate-50 ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className="flex gap-0 justify-between items-stretch w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col justify-center items-center px-16 py-3 bg-white max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/81c5d92f5c4fa71f8d696c3db18ecfb97202bedbf77ad2c7bd767c4036afb0f9?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
            className="object-center max-w-full aspect-[2.13] w-[102px]"
          />
        </div>
        <div className="flex gap-2 items-center py-4 pr-6 pl-20 text-sm text-gray-600 whitespace-nowrap bg-white shadow-lg max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/197823bf94f83d700646c57dddc67b065294941156ca976bf746855f8a75497e?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/197823bf94f83d700646c57dddc67b065294941156ca976bf746855f8a75497e?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/197823bf94f83d700646c57dddc67b065294941156ca976bf746855f8a75497e?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/197823bf94f83d700646c57dddc67b065294941156ca976bf746855f8a75497e?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/197823bf94f83d700646c57dddc67b065294941156ca976bf746855f8a75497e?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/197823bf94f83d700646c57dddc67b065294941156ca976bf746855f8a75497e?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/197823bf94f83d700646c57dddc67b065294941156ca976bf746855f8a75497e?apiKey=331b62a6a72a498fb3ca861d6cc4da35&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/197823bf94f83d700646c57dddc67b065294941156ca976bf746855f8a75497e?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
            className="object-center self-stretch w-9 aspect-square"
          />
          <div className="self-stretch my-auto">Henry</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f50579fd5d498618424e57705148d74c0ea829ec2796eb45e7cb6349a2b27451?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
            className="object-center self-stretch my-auto aspect-square w-[13px]"
          />
        </div>
      </div>
      <div className="flex gap-0 justify-between items-stretch max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-0 justify-between items-stretch">
          <div className={`flex gap-0 justify-between items-stretch ${isSidebarOpen ? 'open' : 'close'}`}>      <div className="flex flex-col flex-1 items-stretch pt-7 pb-12 bg-white">
            <div className="self-start ml-5 text-xs font-semibold text-gray-500 max-md:ml-2.5">
              MENU
            </div>
            <div className="flex flex-col items-stretch pt-3 pb-12 pl-5 mt-5 w-full text-sm bg-white text-neutral-500 max-md:pl-5">
              <div className="flex gap-4 justify-between items-stretch">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/909c23fa3238d52652d89af87eb1377dc22cf6c96aab50dd038357de35a23600?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
                  className="object-center justify-center items-center w-6 aspect-square"
                />
                <div className="flex-auto my-auto">Geo Information</div>
              </div>
              <div className="flex gap-5 justify-between items-stretch self-end mt-3 max-w-full text-blue-700 whitespace-nowrap w-[191px]">
                <button className="self-start mt-2.5">Region</button>
                <div className="flex flex-col w-2.5 h-6 bg-blue-700" />
              </div>
              <button className="self-start mt-3.5 ml-10 max-md:ml-2.5">Area</button>
            </div>
          </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8a3232640ec25785effd1e36a7deb4e4bc3e4171fb2185fecda98b0dd154e4a?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
              className="object-center self-start mt-5 w-6 aspect-square"
              onClick={toggleSidebar}
            />
          </div>

        </div>
        <div className="flex flex-col flex-1 items-stretch self-start mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between items-stretch mx-6 whitespace-nowrap leading-[150%] max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
            <div className="flex flex-col items-stretch">
              <div className="text-xl font-bold text-slate-900">
                Region List
              </div>
              <div className="flex gap-1.5 justify-between items-center mt-3 text-sm">
                <div className="grow self-stretch my-auto text-slate-500">
                  Geo
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/be9de4580e68eb5542a3ec36c4897194a7f10f3014bef6db06a4bd307bef51a7?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
                  className="object-center self-stretch aspect-square w-[18px]"
                />
                <div className="grow self-stretch my-auto text-blue-700">
                  Geo List
                </div>
              </div>
            </div>
            <button
              onClick={openModal}
              className="justify-center items-stretch self-start px-4 py-2 text-base text-white rounded-xl bg-sky-950 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300 active:scale-95">
              + Create New
            </button>
            <Modal
              open={openModal}
              close={closeModal}
            />
          </div>
          <div className="flex flex-col justify-center items-center px-16 py-12 mx-6 mt-8 text-xl leading-8 text-center text-indigo-500 bg-white rounded-xl border border-solid shadow-2xl border-neutral-200 max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex flex-col items-stretch mt-40 mb-32 max-w-full w-[294px] max-md:my-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9334971f425b3d13ff143dc190755336911d7c0cc754b94eabb22b7cf6c80d4?apiKey=331b62a6a72a498fb3ca861d6cc4da35&"
                className="object-center w-full aspect-[1.69]"
              />
              <div className="mt-12 max-md:mt-10">
                <span className="text-neutral-400">Currently you have no Data.</span>
                <br />
                <span className="text-neutral-400">For next step first </span>
                <span className="self-start mt-2.5 text-indigo-500 ">Create Region</span>
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between items-stretch p-6 mt-24 w-full text-sm bg-gray-100 text-slate-500 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="">2022 © MAAC</div>
            <div className="flex gap-5 justify-between items-stretch">
              <div className="grow whitespace-nowrap">Contact Us</div>
              <div className="">Privacy Policy</div>
              <div className="grow whitespace-nowrap">Terms & Condition</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
