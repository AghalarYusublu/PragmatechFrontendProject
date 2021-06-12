// ededler massivinin tək yerdə duran elementlərinin dəyərlərini cüt yerdə duran elementlərlə dəyişdirin
ededler = [1, 3, 5, 6, undefined, null, true, {}, 34, 'FrontEndMasters', 'BackEndMAsters']

cutIndeks = [];
tekIndeks = [];
var a = 0
var b = 0

for (var i = 0; i < ededler.length; i++) {
    if (i % 2 == 1) {
        tekIndeks.push(ededler[i]);
    }
    else if (i % 2 === 0) {
        cutIndeks.push(ededler[i]);

    }
}
for (var j = 0; j < ededler.length; j++) {
    if (j % 2 === 0) {
        ededler[j] = tekIndeks[a]
        console.log(a)
        a++

    }
    else if (j % 2 === 1) {
        ededler[j] = cutIndeks[b]
        console.log(b)
        b++

    }
}
// console.log(tekIndeks);
// console.log(cutIndeks);

console.log(ededler)