import { Dispatch, SetStateAction, useState } from "react";
import LocaleNumber from "../../services/NumberService";
import LocaledNumber from "../LocaledNumber";

function formatNum(event: React.ChangeEvent<HTMLInputElement>): string {
  const value = event.target.value;

  //    LocaleNumber.toformatEnNumber(value);

  let localedNumber = value;
  const englishNumberRegex = /^[0-9]+$/;
  const englishstringNumber = (value as string).replace(/[^0-9]/g, "");
  const persianNumberRegex = /[\u06F0-\u06F9]+/g;
  const persianstringNumber = (value as string)
    .match(persianNumberRegex)
    ?.join("") as string;

  // Check if the value is an English number

  if (englishNumberRegex.test(englishstringNumber)) {
    // localedNumber = englishstringNumber;
  }
  if (persianNumberRegex.test(persianstringNumber)) {
    // localedNumber = persianstringNumber;
  }
  const yourString = "This is a string with Persian numbers: ۱۲۳۴ ۵۶۷۸۹۰";
  const matches = yourString.match(persianNumberRegex);
  //   console.log({ englishstringNumber });
  //   console.log({ persianstringNumber });
  if (persianstringNumber) {
    console.log({ llo: persianToEnglish(persianstringNumber) });
  }

  //   console.log(dir); // Outputs: ['۱۲۳۴۵۶۷۸۹۰']

  return localedNumber;
}

function persianToEnglish(persianNumber: string) {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const englishDigits = "0123456789";
  console.log({ persianNumber });
  let englishNumber = "";
  if (persianNumber)
    for (let i = 0; i < persianNumber.length; i++) {
      const ch = persianNumber.charAt(i);
      const index = persianDigits.indexOf(ch);
      if (index >= 0) {
        englishNumber += englishDigits.charAt(index);
      } else {
        englishNumber += ch;
      }
    }

  return englishNumber;
}

interface LocaleBasedInputProps {
  value: string | number;
  onChange: (value: string) => void;
}

function LocaleBasedInput(props: LocaleBasedInputProps) {
  const [state, setState] = useState();
  //   console.log(props.value);
  return (
    <input
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      type="text"
      value={props.value}
      onChange={(e) => {
        props.onChange;
      }}
    />
  );
}

export default LocaleBasedInput;
