import LocaledNumber from "../LocaledNumber";

interface Card1Props {
  row1Val: string;
  row2Val: string;
}

function Card1(props: Card1Props) {
  return (
    <div className="flex items-center flex-col font-medium shadow-md w-40 h-36 rounded-md pt-4 ">
      <p className="text-lg border-b-2 border-gray-600 pb-4">{props.row1Val}</p>
      <p>
        <LocaledNumber number={props.row2Val} />
      </p>
    </div>
  );
}

export default Card1;
