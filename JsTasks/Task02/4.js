// numbers massivinin tək yerdə duran elementlərinin dəyərlərini cüt yerdə duran elementlərlə dəyişdirin
numbers = [1, 3, 5, 6, undefined, null, true, {}, 34, 'FrontEndMasters', 'BackEndMAsters']

evenIndexs = [];
oddIndexs = [];
var a = 0
var b = 0

for (var i = 0; i < numbers.length; i++) {
    if (i % 2 == 1) {
        oddIndexs.push(numbers[i]);
    } else if (i % 2 === 0) {
        evenIndexs.push(numbers[i]);
    }
}
for (var j = 0; j < numbers.length; j++) {
    if (j % 2 === 0) {
        numbers[j] = oddIndexs[a]
        a++

    } else if (j % 2 === 1) {
        numbers[j] = evenIndexs[b]
        b++
    }
}
console.log(numbers)