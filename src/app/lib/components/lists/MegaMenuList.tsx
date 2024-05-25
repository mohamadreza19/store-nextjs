import Link from "next/link";
import { FunctionComponent } from "react";

import { IoIosArrowBack } from "react-icons/io";
import { IMegaMenuListSection, Item } from "../../shared/interfaces";

interface MegaMenuListProps {
  banner: Item;
  sections: IMegaMenuListSection[];
}

const MegaMenuList: FunctionComponent<MegaMenuListProps> = ({
  banner = {
    text: "همه محصولات موبایل",
    link: "asd",
  },

  sections = [
    {
      label: {
        text: "برند های مختلف گوشی موبایل",
        link: "/ff",
      },
      items: [
        {
          text: "ایفون",
          link: "/ss",
        },
        {
          link: "/ss",
          text: "ساسمونگ",
        },
      ],
    },
  ],
}) => {
  return (
    <div className="p-3 h-full dir-rtl">
      <Link
        href={banner.link}
        className=" text-xs font-semibold text-cyan-500 text-"
      >
        {banner.text}
        <CustomArrow />
      </Link>
      <div className="pt-9 grid grid-cols-3 gap-y-4">
        {sections.map(({ items, label }, index) => (
          <section key={index} className="flex flex-col px-4">
            <div>
              <Link
                href={label.link}
                className="text-nowrap text-sm text-neutral-900 hover:text-rose-600 font-semibold ps-2  border-s-2 border-rose-600"
              >
                {label.text}
                <CustomArrow />
              </Link>
            </div>

            <ul key={index} className="pt-3 text-xs text-neutral-500">
              {items.map((item, index) => (
                <>
                  <li key={index} className="py-2 hover:text-rose-600">
                    <Link href={item.link}>{item.text}</Link>
                  </li>
                </>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};
const CustomArrow = () => <IoIosArrowBack className="inline-block ms-2" />;
export default MegaMenuList;
