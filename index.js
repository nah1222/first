//Write a program to print all permutations of a given String. For example, if given String is "GOD" then your program should print all 6 permutations of this string, e.g. "GOD," "OGD," "DOG," "GDO," "ODG," and "DGO." ----------***
function permutations(str){
let combos = []
}
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