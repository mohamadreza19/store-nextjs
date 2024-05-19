import { NumberService } from '@/lib/services';
import { ApiCallStatus, UserLoginStep } from '@/lib/shared/interfaces';
import Image from 'next/image';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { MdArrowForward } from 'react-icons/md';
import InputText1 from '../InputText1';
import InputNumber1 from '../InputNumber';

const VerifyCode: FunctionComponent<UserLoginStep> = (props) => {
  const [seconds, setSeconds] = useState(180); // 3 minutes in seconds 180
  const [isActive, setIsActive] = useState(true);
  let interval = useRef<NodeJS.Timeout>();
  useEffect(() => {
    if (isActive && seconds > 0) {
      interval.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval.current);
      setIsActive(false);
    }

    return () => clearInterval(interval.current);
  }, [isActive, seconds]);

  function refreshTime() {
    if (!isActive && seconds == 0) {
      setIsActive(true);
      setSeconds(180);
      if (props.secondSubmit) props.secondSubmit();
    }
  }
  useEffect(() => {
    setIsActive(true);
  }, []);

  return (
    <div className="md:w-[400px] sm:w-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 flex gap-y-4 flex-col items-center justify-center border-solid md:border rounded-md boder-gray-300">
      <div className="flex justify-center relative w-full">
        <MdArrowForward
          onClick={props.decrement}
          className="absolute right-0 w-6 h-6 cursor-pointer"
        />
        <Image alt="logo" width={150} height={40} src="/asset/img/logo.svg" />
      </div>
      <p className="text-lg font-semibold self-start pb-2">
        کد تایید را وارد کنید
      </p>
      <p className="text-xs font-normal self-start">
        کد تایید برای {props.email} ارسال شد
      </p>
      <div className="w-full">
        <InputNumber1 textCenter className="text-center" />
      </div>
      <p className="text-xs  font-normal text-black">
        {seconds > 0 && (
          <> مانده تا دریافت مجدد کد {NumberService.formatTime(seconds)}</>
        )}
        {seconds === 0 && (
          <span>
            {' '}
            دریافت مجدد کد از طریق{' '}
            <span
              onClick={refreshTime}
              className="text-sky-700 cursor-pointer font font-semibold"
            >
              ایمیل
            </span>
          </span>
        )}
      </p>
      <button
        // onClick={props.submit}
        className="w-full mt-3 bg-rose-600 px-4 py-[0.8rem] text-sm font-bold rounded-md text-white"
      >
        ورود
      </button>
    </div>
  );
};

export default VerifyCode;
