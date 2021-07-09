// ededler massivi daxilində olan ədədləri ayrı massiv halına gətirib ekrana çap elətdirən metod yazın
numbers = [1, 3, 5, 6, undefined, null, true, {}, 34, 'FrontEndMasters', 'BackEndMAsters']

newNumbers = [];



for (i = 0; i < numbers.length; i++) {
    if ((typeof(numbers[i]) === "number") === true) {
        newNumbers.push(numbers[i])

    }
}
console.log(newNumbers)