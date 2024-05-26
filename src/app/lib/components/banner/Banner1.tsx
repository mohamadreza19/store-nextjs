import Image from "next/image";
import { FunctionComponent } from "react";

interface Banner1Props {}

const items = [
  {
    text: "دیجی جت",
    src: "/asset/img/digi-jet.png",
  },
  {
    text: "دیجی پی",
    src: "/asset/img/digi-pay.png",
  },
  {
    text: "دیجی پلاس",
    src: "/asset/img/digi-plus.png",
  },
  {
    text: "حراج سر ماه سوپر مارکت",
    src: "/asset/img/digi-food-beverage.png",
  },
];
const Banner1: FunctionComponent<Banner1Props> = () => {
  return (
    <div className="w-full flex justify-center items-center">
      {items.map((item, i) => (
        <section
          key={i}
          className="w-36 h-20 flex flex-col justify-center items-center gap-y-2"
        >
          <Image width={50} height={52} alt="" src={item.src} />
          <p className="text-xs  text-neutral-500 font-bold">{item.text}</p>
        </section>
      ))}
    </div>
  );
};

export default Banner1;
