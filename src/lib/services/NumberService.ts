import LocaledNumber from '../components/LocaledNumber';

type Dir = 'rtl' | 'lrt';
class NumberService {
  static toformatEnNumber(num: any) {
    let formatedNum = this.filterStringToEnNumber(num);

    var str = formatedNum.toString().split('.');
    if (str[0].length >= 5) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
      str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
  }
  static filterStringToEnNumber(val: string) {
    return val.toString().replace(/\D/g, '');
  }
  static formatTime(time: number) {
    const minutes = LocaledNumber({
      number: Math.floor(time / 60),
    });
    const remainingSeconds = LocaledNumber({
      number: time % 60,
    });
    return `${String(minutes).padStart(
      2,
      LocaledNumber({
        number: 0,
      })
    )}:${String(remainingSeconds).padStart(
      2,
      LocaledNumber({
        number: 0,
      })
    )}`;
  }
}

export default NumberService;
