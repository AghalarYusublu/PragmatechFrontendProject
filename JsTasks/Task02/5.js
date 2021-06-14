// numbers massivi daxilində olan string tiplərini daxilində neçə sait və samit olduğunu ekrana çap elətdirən metod yazın
numbers = [1, 3, 5, 6, undefined, null, true, {}, 34, 'FrontEndMasters', 'BackEndMAsters'];

strings = [];
vowelArr = ['a', 'ı', 'o', 'u', 'e', 'ə', 'i', 'ö', 'ü'];


for (var i = 0; i < numbers.length; i++) {
    if ((typeof(numbers[i]) === "string")) {
        strings += numbers[i].toLowerCase();


    }
}
let count = 0;

for (var j = 0; j < strings.length; j++) {
    for (var k = 0; k < vowelArr.length; k++) {
        if (strings[j] === vowelArr[k]) {
            count++
        }
    }
}
let consonant = strings.length - count;

console.log('Massivdə ' + count + ' sait var');
console.log('Massivdə ' + consonant + ' samit var');