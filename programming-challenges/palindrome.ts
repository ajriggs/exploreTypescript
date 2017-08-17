const racecar: string = 'racecar';
const evenPali: string = 'weffew';
const notPali: string = 'notpali';
const number: number = 1234321;

const isPalindrome = (input: string | number): boolean => {
    const string: any = input.toString();
    let half1: string = '';
    let half2: string = '';
    if(string.length % 2 == 0) {
        half1 = string.slice(0, string.length/2);
        half2 = string.slice(string.length/2);

    } else {
        let midpoint_index: number = Math.ceil(string.length/2);
        half1 = string.slice(0, midpoint_index -1);
        half2 = string.slice(midpoint_index);
    }

    for (let i = half1.length; i > 0; i--) {
        if (!(half2[half2.length -i] == half1[i - 1])) {
            return false;
        }
    }
    return true;
}
console.log('results!');
console.log(`racecar: ${isPalindrome(racecar)}`);
console.log(`random even-length pali: ${isPalindrome(evenPali)}`);
console.log(`the string 'notpali': ${isPalindrome(notPali)}`);
console.log(`the number 1234321: ${isPalindrome(number)}`);