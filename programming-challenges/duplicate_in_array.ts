let array: number[] = [1, 2, 3, 4, 5, 2, 6, 7, 8, 9, 10, 11];
let bigger: number[] = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

const findDupe = (array: number[]): number => {
    let top_val: number = Math.max(...array);
    let total: number = 0
    for (var k in array) {
        total += array[k] 
    }
    let triSeriesTotal: number = 0
    for (var i: number = top_val; i > 0; i--) {
        triSeriesTotal += i;
    }
    return total - triSeriesTotal;
}

console.log(`with a duplicate of 2, in triseries of 11: dupe is ${findDupe(array)}`);
console.log(`with a dupe of 7, in triseries of 16: dupe is ${findDupe(bigger)}`);
