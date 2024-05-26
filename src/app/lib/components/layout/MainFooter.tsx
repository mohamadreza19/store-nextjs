import Image from "next/image";
import { FC, FunctionComponent } from "react";
import { MoveUpOutline } from "../button";
import { FooterIcons } from "../lists";
import { useScrollToTop } from "../../services";

interface MainFooterProps {}

const MainFooter: FunctionComponent<MainFooterProps> = () => {
  const scroll = useScrollToTop();

  return (
    <div className="w-full">
      <div className="w-full border-t border-solid border-neutral-300 px-2 pt-5 mt-4">
        <section className="w-auto flex flex-col ">
          <div className="w-auto flex justify-between">
            <Image
              src={"/asset/img/persian-logo.svg"}
              width={113}
              height={30}
              alt=""
            />
            <MoveUpOutline onClick={scroll} />
          </div>
          <div className="mt-3">
            <p className="text-xs ">
              تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱ <span className="mx-2">|</span>{" "}
              ۰۲۱-۹۱۰۰۰۱۰۰ <span className="mx-2">|</span> ۷ روز هفته، ۲۴ ساعته
              پاسخگوی شما هستیم
            </p>
          </div>
        </section>
        <section>
          <FooterIcons />
        </section>
        <section className="flex justify-center gap-x-32">
          <CustomList
            header="با دیجی‌کالا"
            textLists={[
              "با دیجی‌کالا",
              "اتاق خبر دیجی‌کالا",
              "فروش در دیجی‌کالا",
              "فرصت‌های شغلی",
              "تماس با دیجی‌کالا",
            ]}
          />
          <CustomList
            header="خدمات مشتریان"
            textLists={[
              "پاسخ به پرسش‌های متداول",
              "رویه‌های بازگرداندن کالا",
              "شرایط استفاده",
              "حریم خصوصی",
              "گزارش باگ",
            ]}
          />
          <CustomList
            header="راهنمای خرید از دیجی‌کالا"
            textLists={[
              "نحوه ثبت سفارش",
              "رویه ارسال سفارش",
              "شیوه‌های پرداخت",
            ]}
          />
          <div></div>
        </section>
      </div>
    </div>
  );
};
interface CustomListProps {
  header: string;
  textLists: string[];
}
const CustomList: FC<CustomListProps> = ({ header, textLists }) => (
  <div>
    <p className="text-sm text-neutral-700 font-semibold leading-9">{header}</p>
    <ul>
      {textLists.map((text, i) => (
        <li
          key={i}
          className="text-xs text-neutral-500 font-semibold leading-9"
        >
          {text}
        </li>
      ))}
    </ul>
  </div>
);
export default MainFooter;
