import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../img/dark-logo.svg";
import { useForm } from "react-hook-form";
import Button2 from "../Components/Button2";
import { useNavigate } from "react-router";
import "../i18/index";
import { useNumberLogin } from "../Store/useNumberLogin";

interface IphoneNumber {
  phoneNumber: string;
}

const Login = () => {
  const { t } = useTranslation();
  const changePage = useNavigate();
  const { number, setNumber } = useNumberLogin();
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<IphoneNumber>({
    defaultValues: {
      phoneNumber: "",
    },
  });

  useEffect(() => {
    const phone = localStorage.getItem("phoneNumber");
    if (phone) {
      changePage("/MainPage");
    }
  }, [localStorage]);

  return (
    <div className="flex flex-col bg-[#0095da] w-full h-full pt-40 ">
      <form
        onSubmit={handleSubmit(() => {
          changePage("/Otp");
          setNumber(getValues("phoneNumber"));
        })}
        className="flex flex-col  bg-white justify-between relative px-5 py-8 rounded-t-2xl h-full"
      >
        <div className="flex flex-col">
          <img
            className="w-[110px] h-[74px] absolute -top-2 left-50  -translate-1/2"
            src={logo}
            alt=""
          />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col justify-center gap-2">
              <p>
                {t("loginPage.register")}
                <span className="text-gray-400"> | </span>
                {t("loginPage.login")}
              </p>
              <p className="text-[#1f2937] text-[14px]">
                {t("loginPage.hiPleaseEnterYourPhoneNumber")}
              </p>
            </div>
            <div
              dir="rtl"
              className="flex justify-center items-center py-3 pl-3 pr-8 rounded-md border border-gray-200"
            >
              <input
                className="w-full  placeholder:text-gray-400 text-[15px] outline-none"
                placeholder={t("loginPage.placeholder")}
                {...register("phoneNumber", {
                  required: true,
                  validate: (value) => {
                    return /^[0-9]+$/.test(value);
                  },
                })}
                max={11}
                maxLength={11}
                min={11}
                minLength={11}
                type="text"
              />

              <span className="flex justify-center text-gray-400">
                <span>|</span> &#1784;<span></span>&#1785; <span>+</span>
              </span>
            </div>
          </div>
          <p className="text-[14px] text-red-400 pt-4">
            {errors.phoneNumber && <span>{t("loginPage.error")} </span>}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <button
            className="bg-[#0095da] py-4 text-white rounded-md"
            type="submit"
          >
            {t("loginPage.button1")}
          </button>
          <Button2 />
        </div>
      </form>
    </div>
  );
};

export default Login;
