import { FunctionComponent } from 'react';
import { Card1 } from '../card';

interface CategoriesLandingProps {}

const CategoriesLanding: FunctionComponent<CategoriesLandingProps> = () => {
  return (
    <div>
      <h3 className="w-full text-neutral-700 !font-semibold  text-center ">
        خرید بر اساس دسته‌بندی
      </h3>
      <div className="w-full grid   md:grid-cols-5  grid-cols-2">
        <Card1 src="/asset/img/mobile.png" text="موبایل" />
        <Card1 src="/asset/img/mobile.png" text="موبایل" />
        <Card1 src="/asset/img/electronic_devices.png" text="کالای دیجیتال" />
        <Card1 src="/asset/img/mobile.png" text="موبایل" />
        <Card1 src="/asset/img/mobile.png" text="موبایل" />
        <Card1 src="/asset/img/electronic_devices.png" text="کالای دیجیتال" />
      </div>
    </div>
  );
};

export default CategoriesLanding;
