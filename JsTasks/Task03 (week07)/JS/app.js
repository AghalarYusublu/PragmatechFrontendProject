/* arr=[1,4,56,23,67,89,145,89,200,35]
verilən massivə əsasən elə bir funksiya (tək funksiya) yazın ki o funksiya sayəsində aşağıdakı filterləmə əməlyatlarını asanlıqla aparıla bilsin
1.cüt ədədləri tapsın
2.tək ədədlər tapsın
3.rəqəmlərinin cəmi 10-dan kiçik olanları tapsın
4. 2 rəqəmli ədədləri tapsın
 */


array = [1, 4, 56, 23, 67, 89, 145, 89, 200, 35]
OddEvenNumbers = []
twoDigitNumbers = []
let result

function FindOddEven(arr, OddOrEven, number) {

    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === OddOrEven) {
            result = arr.filter((num1, num2) => num1 + num2 < number)
            OddEvenNumbers.push(arr[i])
                /*  cem =  OddEvenNumbers  + result */
        }
    }
    for (let c = 0; c < arr.length; c++) {
        arr[c] = String(arr[c]);
        if (arr[c].length === 2) {
            twoDigitNumbers.push(Number(arr[c]));
        }
    }
    console.log("Cüt ədədlər (Tək ədədlər) : " + OddEvenNumbers)
    console.log("İki rəqəmli ədədlər : " + twoDigitNumbers)
    return "Rəqəmləri cəmi 10-dan kiçik olan ədədlər : " + result
        /* return cem */
}

console.log(FindOddEven(array, 0, 10))