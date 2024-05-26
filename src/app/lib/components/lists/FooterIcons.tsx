import Image from "next/image";
import { FunctionComponent } from "react";

interface FooterIconsProps {}

const textClass = "text-[10px] text-neutral-700 font-semibold";
const boxClass = "flex flex-col items-center justify-center  py-3 gap-y-1";
const FooterIcons: FunctionComponent<FooterIconsProps> = () => {
  return (
    <div className="flex justify-center md:gap-x-14 my-5">
      <section className={boxClass}>
        <Image
          alt=""
          width={60}
          height={60}
          src={"/asset/img/footer/express-delivery.svg"}
        />
        <p className={textClass}>اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</p>
      </section>
      <section className={boxClass}>
        <Image
          alt=""
          width={60}
          height={60}
          src={"/asset/img/footer/cash-on-delivery.svg"}
        />
        <p className={textClass}>امکان پرداخت در محل</p>
      </section>
      <section className={boxClass}>
        <Image
          alt=""
          width={60}
          height={60}
          src={"/asset/img/footer/support.svg"}
        />
        <p className={textClass}>۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ</p>
      </section>
      <section className={boxClass}>
        <Image
          alt=""
          width={60}
          height={60}
          src={"/asset/img/footer/days-return.svg"}
        />
        <p className={textClass}>هفت روز ضمانت بازگشت کالا</p>
      </section>
      <section className={boxClass}>
        <Image
          alt=""
          width={60}
          height={60}
          src={"/asset/img/footer/original-products.svg"}
        />
        <p className={textClass}>ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ</p>
      </section>
    </div>
  );
};

export default FooterIcons;
