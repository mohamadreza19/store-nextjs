import { FunctionComponent, useEffect, useMemo, useRef, useState } from "react";
import { AiOutlineMobile } from "react-icons/ai";

import { LuLaptop, LuPencilRuler } from "react-icons/lu";
import { LiButton1 } from "../../../button";
import { HoverCategoryFn, Item } from "@lib/shared/interfaces";
import { MegaMenuList } from "../../../lists";
import { Category } from "@/app/categories/interfaces";
import LocaledNumber from "../../../LocaledNumber";

interface MegaMenuProps {
  id: string;
  mainCategories: Category[];
  subCategories: Category[];
  fetchSubCategoriesByParentId: (parentId: string) => Promise<void>;
}

const MegaMenu: FunctionComponent<MegaMenuProps> = ({
  mainCategories,
  subCategories,
  id,
  fetchSubCategoriesByParentId,
}) => {
  const [segment, setSegment] = useState<Category>({
    _id: "",
    name: "",
    parent_id: "",
  });
  const handleHoverCategory: HoverCategoryFn = (href) => {
    if (!href) return setSegment(mainCategories[0]);
    setSegment(href);
  };

  useEffect(() => {
    if (mainCategories.length) {
      handleHoverCategory(mainCategories[0]);
    }
  }, [mainCategories.length]);
  useEffect(() => {
    if (segment._id) fetchSubCategoriesByParentId(segment._id);
  }, [segment._id]);

  return (
    <div
      id={id}
      className={`flex invisible transition-opacity duration-500  ease-out opacity-0 absolute min-h-96 md:w-[940px] top-full`}
    >
      <div className="dir-ltr md:w-1/5 overflow-y-auto bg-[#f5f5f5] rounded-e-sm">
        {/* <first menu> */}
        <ul className="dir-rtl w-full   ">
          {mainCategories.map((mainCategory, index) => (
            <LiButton1 onHover={handleHoverCategory} category={mainCategory}>
              {index == 0 && (
                <AiOutlineMobile size={18} className="text-inherit" />
              )}
              {index == 1 && <LuLaptop size={18} className="text-inherit" />}
              {index == 2 && (
                <LuPencilRuler size={18} className="text-inherit" />
              )}
              {mainCategory.name}
            </LiButton1>
          ))}
        </ul>
      </div>

      {/* <second menu> */}
      {mainCategories.length > 0 && (
        <section className="dir-ltr md:w-4/5 bg-white  overflow-y-auto box-content rounded-s-sm ">
          {segment.name === mainCategories[0].name && (
            <MegaMenuList
              banner={{
                text: "همه محصولات موبایل",
                link: "/mobile",
              }}
              sections={[
                {
                  label: {
                    text: "برندهای مختلف گوشی موبایل",
                    link: "/landing/mobile_brands/",
                  },
                  items: mapedSubCategorise(subCategories, "mobile"),
                },
                {
                  label: {
                    text: "گوشی براساس قیمت",
                    link: "landing/mobile_prices",
                  },
                  items: [
                    {
                      text: `گوشی تا ${LocaledNumber({
                        number: 2,
                      })} میلیون تومان`,
                      link: "/search/category-mobile-phone/?max-price=2000000",
                    },
                    {
                      text: `گوشی تا ${LocaledNumber({
                        number: 6,
                      })} میلیون تومان`,
                      link: "/search/category-mobile-phone/?max-price=6000000",
                    },
                    {
                      text: `گوشی تا بالای ${LocaledNumber({
                        number: 15,
                      })} میلیون تومان`,
                      link: "/search/category-mobile-phone/?max-price=15000000",
                    },
                  ],
                },
              ]}
            />
          )}
          {segment.name === mainCategories[1].name && (
            <MegaMenuList
              banner={{
                text: "همه محصولات کالای دیجیتال",
                link: "/ss",
              }}
              sections={[
                {
                  label: {
                    text: "لپ تاپ ",
                    link: "/ff",
                  },
                  items: mapedSubCategorise(subCategories, "electric-devices"),
                },
              ]}
            />
          )}
        </section>
      )}
    </div>
  );
};

const mapedSubCategorise = (
  subCategories: Category[],
  prefixLink: string
): Item[] => {
  return subCategories.map((category) => ({
    text: category.name,
    link: `/${prefixLink}/` + category.name,
  }));
};

export default MegaMenu;
