// ededler massivinin daxilində eyni tipli olan məlumatları ayrı ayrı massivlər şəklinə gətirən metod yazın
numbersArr = [1, 3, 5, 6, undefined, null, true, {}, 34, 'FrontEndMasters', 'BackEndMAsters']

numbers = [];
booleans = [];
strings = [];
objects = [];



for (i = 0; i < numbersArr.length; i++) {
    if (typeof(numbersArr[i]) === "number") {
        numbers.push(numbersArr[i])


    } else if (typeof(numbersArr[i]) === "boolean") {
        booleans.push(numbersArr[i])

    } else if (typeof(numbersArr[i]) === "string") {
        strings.push(numbersArr[i])

    } else if (typeof(numbersArr[i]) === "object") {
        objects.push(numbersArr[i])

    }

}
console.log(numbers);
console.log(booleans);
console.log(strings);
console.log(objects);