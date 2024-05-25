import Link from "next/link";
import {
  FunctionComponent,
  LiHTMLAttributes,
  ReactEventHandler,
  useEffect,
  useRef,
} from "react";
import { CategoriseSegment, HoverCategoryFn } from "../../shared/interfaces";
import { Category } from "@/app/categories/interfaces";

interface LiButton1Props extends LiHTMLAttributes<HTMLLIElement> {
  onHover?: HoverCategoryFn;

  category: Category;
}

const LiButton1: FunctionComponent<LiButton1Props> = ({
  onHover,
  category,
  ...rest
}) => {
  const ref = useRef<HTMLLIElement>(null);
  useEffect(() => {
    if (category._id && ref.current) {
      ref.current.addEventListener("mouseenter", () => {
        if (onHover) onHover(category);
      });
      ref.current.addEventListener("mouseleave", () => {
        // if (onHover) onHover(null);
      });
    }
  }, [category._id]);
  return (
    <Link href={category.name}>
      <li
        ref={ref}
        {...rest}
        className=" py-4 px-2 text-[12px] flex gap-x-1 transition-colors text-[#424750] hover:text-red-500 hover:bg-white"
      >
        {rest.children}
      </li>
    </Link>
  );
};

export default LiButton1;
