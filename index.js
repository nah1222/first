//Write a program to print all permutations of a given String. For example, if given String is "GOD" then your program should print all 6 permutations of this string, e.g. "GOD," "OGD," "DOG," "GDO," "ODG," and "DGO." ----------***

const findPermutation = (string) => {
    //edge cases
    if (!string || typeof string !== "string"){
        return "Please enter a string"
    }else if (string.length < 2){
        return string
    }
    //solutions
    let permutationsArray = [];

    for(let i = 0; i < string.length; i++){
        //Create a subproblem of string, even having size n/b
        let char = string[i]
        let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

        //Call procedure p recursicely on each subproblem
        //Combime the results from the subproblems
        for(let permutation of findPermutation(remainingChars)){
            permutationsArray.push(char + permutation)
        }
        
    }
    return permutationsArray
}
console.log(findPermutation("god"))

//Heap's algorithm
// const permutations = arr => {
//     const output = [];

//     //function that switches the array around
//     const swapInPlace = (arrSwap, indexA, indexB) => {
//         const temp = arrSwap[indexA];
//         arrSwap[indexA] = arrSwap[indexB];
//         arrSwap[indexB] = temp;
//     };

//     //edge case if the length only is 1
//     const generate = (n, heapArr) => {
//         if(n === 1){
//             // heapArr keeps changing so you make a copy of it using slice
//             output.push(heapArr.slice());
//             return;
//         }
//         //if it is not edge case do a for loop
//         generate(n - 1, heapArr);
//         for (let i = 0; i < n - 1; i++) {
//             if(i % 2 === 0) {
//                 swapInPlace(heapArr, 1, n - 1);
//             } else {
//                 swapInPlace(heapArr, 0, n-1);
//             }
//             generate(n - 1, heapArr)
//         }
//     };

//     generate(arr.length, arr.slice());

//     return output;
// };

// console.log(permutations([1,2,3]))

//Program to print elements of an string present on odd position, along with the count of those elements in the entire string
//i.e abbloseckc - a:1,b:2,o:1,e:1,k:1 -------------***
function frequency(str){
    let counter = [];
    const letters = str.split("")
    for(let i=0; i<letters.length; i++){
    counter[str[i]]?counter[str[i]]++: counter[str[i]] = 1 ;
    }
    return counter;
}
//Write a function that given a list of countries, returns the country(s) that occur the least times
//i.e - ["Argentina", "Cuba", "Chile", "Argentina"] -> ["Cuba", "Chile"] -----------***
function recurrence(arr){
//get a frequency counter of the elements in the array
    //use a for loop
//return values with the lowest frequency
}