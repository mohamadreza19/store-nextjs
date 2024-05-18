interface LocaledNumberProps {
  number: string | number;
}
function LocaledNumber(props: LocaledNumberProps) {
  return Number(props.number).toLocaleString("fa");
}

export default LocaledNumber;
