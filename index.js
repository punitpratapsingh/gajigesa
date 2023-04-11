function stringToNumber(str){
    const str = '-123.456';
    const isNegative = str[0] === '-';
    const decimalIndex = str.indexOf('.');
    const integerPart = str.slice(isNegative ? 1 : 0, decimalIndex === -1 ? undefined : decimalIndex);
    const decimalPart = decimalIndex === -1 ? '' : str.slice(decimalIndex + 1);
    const integer = integerPart.split('').map(char => char.charCodeAt(0) - 48).reduce((acc, val) => acc * 10 + val, 0);
    const decimal = decimalPart.split('').reverse().map(char => char.charCodeAt(0) - 48).reduce((acc, val) => (acc + val) / 10, 0);
    const num = (isNegative ? -1 : 1) * (integer + decimal);

    console.log( num);
}
const str = '-123.456';
console.log(stringToNumber(str))