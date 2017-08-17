import * as _ from 'lodash';

class Fibonacci {
    memo: {[index: number]: number} = {};


    //zero-indexed
    atIndex(index: number): number {
        let result: number = 0;
        if (index < 0) {
            throw new Error (
                "no negative indices"
            );
        }
        else if (index == 0 || index == 1) {
            result = index;
        }
        else if (this.memo[index]) {
            result = this.memo[index];
        }
        else {
            result = this.atIndex(index-1) + this.atIndex(index-2);
        }

        this.memo[index] = result;
        return result;
    }
}
let fib = new Fibonacci();

console.log(`10th index of fibonacci: ${fib.atIndex(10)}`);
console.log(`let's see the crazy memo!`);
console.log(`keys ${_.keys(fib.memo)}`);
console.log(`vals ${_.values(fib.memo)}`);