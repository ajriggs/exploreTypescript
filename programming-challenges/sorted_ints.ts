const unsortedInts: number[] = [8,8,8,9,8,1,2,2,2,3,4,4,5,5,5,5,6,7,6,7,9,35,35,45,4,5,4,47,47,57];


const sortIntegers = (ints: number[]): number[] => {
    let frequencies: number[] = [];
    let sortedInts: number[] = [];
    
    for (var k in ints) {
        let currentValue: number = ints[k];
        frequencies[currentValue] ? frequencies[currentValue] += 1 : frequencies[currentValue] = 1;
    }
    
    for (var k in frequencies) {
        let frequency: number = frequencies[k]
        console.log(`there are ${frequency} occurences of index ${k}`)
        while(frequency) {
            sortedInts.push(parseInt(k));
            frequency -= 1;
        }
    }
    return sortedInts;
}

console.log(`sorting ${unsortedInts}`);
console.log(`${sortIntegers(unsortedInts)}`);


