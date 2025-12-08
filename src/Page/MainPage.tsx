import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import NavarBottom from "../Components/NavarBottem";
import FisrtSliderImg from "../img/forFirstSliderHamrah.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { useNumberLogin } from "../Store/useNumberLogin";

const MainPage = () => {
  const { t } = useTranslation();
   const { number, setNumber } = useNumberLogin();

  return (
    <section className="bg-gray-100 h-full">
      <div dir="rtl" className="p-4 bg-gray-100 h-full flex flex-col gap-4">
        <div className="flex gap-2">
          <div className="bg-white p-2 rounded-lg flex gap-14 items-center">
            <div className="flex justify-center items-center gap-2">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <defs></defs>
                <path
                  stroke="#374151"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 12h16"
                ></path>
                <g
                  stroke="#374151"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <path d="M4 6h16M4 18h16"></path>
                </g>
              </svg>
              <span className="text-[14px] ">{t("mainPage.number",{Number:number})}</span>
            </div>
            <div>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <defs></defs>
                <path
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6 9l6 6 3-3"
                ></path>
                <path
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M18 9l-1.5 1.5M6 9l4.586 4.586a2 2 0 002.828 0L15 12"
                ></path>
                <path
                  stroke="#ff4f00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M18 9l-1.5 1.5"
                ></path>
              </svg>
            </div>
          </div>
          <div className="bg-white p-2 rounded-lg ">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <defs></defs>
              <path
                stroke="#ff4f00"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M7 5c0 1.105.96 2 2.143 2H12s.143-4-2.857-4C7.959 3 7 3.895 7 5zM17.143 5c0 1.105-.96 2-2.143 2h-2.857S12 3 15 3c1.183 0 2.143.895 2.143 2z"
              ></path>
              <path
                stroke="#0095da"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M21 12v4.998a4 4 0 01-4 4H7a4 4 0 01-4-4V12m18 0v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1m18 0h-7M3 12h7"
              ></path>
              <path
                stroke="#ff4f00"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M14 21V7zM10 21V7z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="bg-white p-2 rounded-lg relative">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <defs></defs>
              <path
                fill="#B6C2CF"
                d="M5.25 18.884a.725.725 0 01-.534-.215.726.726 0 01-.216-.535c0-.212.072-.39.216-.534a.726.726 0 01.534-.215h1.058V9.923c0-1.345.415-2.534 1.245-3.567a5.517 5.517 0 013.197-1.983V3.75c0-.347.121-.642.364-.885.243-.244.538-.365.885-.365s.642.122.885.365c.244.243.366.538.366.885v.623a5.517 5.517 0 013.197 1.983c.83 1.033 1.245 2.222 1.245 3.567v7.462h1.058c.212 0 .39.072.534.215a.726.726 0 01.216.535c0 .212-.072.39-.216.534a.726.726 0 01-.534.215H5.25zm6.748 2.808c-.497 0-.923-.177-1.276-.53a1.742 1.742 0 01-.53-1.277h3.616c0 .498-.177.924-.532 1.277-.354.354-.78.53-1.278.53zm-4.19-4.307h8.384V9.923c0-1.158-.409-2.146-1.228-2.964C14.146 6.14 13.159 5.73 12 5.73s-2.146.41-2.964 1.228c-.819.818-1.228 1.806-1.228 2.964v7.462z"
              ></path>
            </svg>
            <div className="absolute flex justify-center items-center bg-red-500 text-[6px] text-white w-3 h-3 rounded-full top-2 right-2">
              10
            </div>
          </div>
          <div className="bg-white p-2 rounded-lg">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <defs></defs>
              <path
                stroke="#9FADBC"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15.333 10.889a4.444 4.444 0 01-4.444 4.444M10.889 19.778a8.889 8.889 0 118.889-8.89m-8.89 8.89a8.861 8.861 0 006.31-2.628 8.86 8.86 0 002.58-6.261m-8.89 8.889a8.848 8.848 0 004.74-1.368c.94-.593 2.207-.616 2.99.174L22 22m-2.222-11.111c0 1.73-.495 3.345-1.35 4.711-.583.93-.607 2.18.165 2.96L22 22m0 0l-4.82-4.831"
              ></path>
            </svg>
          </div>
        </div>
        <div>
          
        </div>
      </div>
      <NavarBottom />
    </section>
  );
};

export default MainPage;
