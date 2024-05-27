import Image from 'next/image';
import { FC, FunctionComponent, useState } from 'react';
import { MoveUpOutline } from '../button';
import { FooterIcons } from '../lists';
import { useScrollToTop } from '../../services';
import { IoArrowDown } from 'react-icons/io5';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface MainFooterProps {}

const MainFooter: FunctionComponent<MainFooterProps> = () => {
  const scroll = useScrollToTop();

  return (
    <div className="w-full">
      <div className="w-full md:border-t border-t-0 border-solid border-neutral-200 2xl:px-32 px-2 pt-9 mt-4">
        <section className="w-auto flex flex-col ">
          <div className="w-auto flex md:justify-between justify-center">
            <Image
              className="hidden md:block"
              src={'/asset/img/persian-logo.svg'}
              width={113}
              height={30}
              alt=""
            />
            <MoveUpOutline onClick={scroll} />
          </div>
          <div className="mt-3 hidden md:block">
            <p className="text-xs ">
              تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱ <span className="mx-2">|</span>{' '}
              ۰۲۱-۹۱۰۰۰۱۰۰ <span className="mx-2">|</span> ۷ روز هفته، ۲۴ ساعته
              پاسخگوی شما هستیم
            </p>
          </div>
        </section>
        <section className="md:block hidden">
          <FooterIcons />
        </section>
        <section className="flex  md:flex-row flex-col  justify-center md:gap-x-32 ">
          <CustomList
            header="با دیجی‌کالا"
            textLists={[
              'با دیجی‌کالا',
              'اتاق خبر دیجی‌کالا',
              'فروش در دیجی‌کالا',
              'فرصت‌های شغلی',
              'تماس با دیجی‌کالا',
            ]}
          />
          <CustomList
            header="خدمات مشتریان"
            textLists={[
              'پاسخ به پرسش‌های متداول',
              'رویه‌های بازگرداندن کالا',
              'شرایط استفاده',
              'حریم خصوصی',
              'گزارش باگ',
            ]}
          />
          <CustomList
            header="راهنمای خرید از دیجی‌کالا"
            textLists={[
              'نحوه ثبت سفارش',
              'رویه ارسال سفارش',
              'شیوه‌های پرداخت',
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
const CustomList: FC<CustomListProps> = ({ header, textLists }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleoOpenModal() {
    setIsOpenModal(true);
  }
  function handleoCloseModal() {
    setIsOpenModal(false);
  }
  return (
    <div className="w-full md:border-b-0 border-b border-gray-300 py-3 md:px-0 px-2">
      <div className="flex justify-between items-center">
        <p className="md:text-sm  text-lg text-neutral-700 font-semibold leading-9">
          {header}
        </p>

        {isOpenModal ? (
          <IoIosArrowUp onClick={handleoCloseModal} size={20} />
        ) : (
          <IoIosArrowDown onClick={handleoOpenModal} size={20} />
        )}
      </div>
      {isOpenModal && (
        <ul>
          {textLists.map((text, i) => (
            <li
              key={i}
              className="md:text-xs text-sm text-neutral-500 md:font-semibold font-normal md:leading-9 leading-10 "
            >
              {text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default MainFooter;
