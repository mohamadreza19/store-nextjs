import { FunctionComponent } from "react";
import { AlertService } from "../../services";
import { MdClose } from "react-icons/md";
import { ButtonPrimary } from "../button";

interface ConfirmationAlertProps {}

const ConfirmationAlert: FunctionComponent<ConfirmationAlertProps> = () => {
  const alertService = new AlertService();
  const Alertvalue = alertService.getConfirmationAlert();
  console.log(Alertvalue);
  return (
    Alertvalue.open && (
      <div
        id="ConfirmationAlert"
        className="fixed w-screen h-screen bg-general_1 z-30 top-0 flex justify-center items-center"
      >
        <LogOutAlert />
      </div>
    )
  );
};

interface LogOutAlertProps {}

const LogOutAlert: FunctionComponent<LogOutAlertProps> = () => {
  return (
    <div className="bg-white px-3 py-4 rounded-lg w-[512px]">
      <section>
        <header className="border-b border-gray-100 pb-2 flex justify-between font-semibold">
          <div> از حساب کاربری خارج می‌شوید؟</div>
          <div>
            <MdClose size={22} />
          </div>
        </header>
      </section>
      <section>
        <div>
          با خروج از حساب کاربری، به سبد خرید فعلی‌تان دسترسی نخواهید داشت.
          هروقت بخواهید می‌توانید مجددا وارد شوید و خریدتان را ادامه دهید.
        </div>
        <div>
          <ButtonPrimary loading={false}>da</ButtonPrimary>
        </div>
      </section>
    </div>
  );
};

export default ConfirmationAlert;
