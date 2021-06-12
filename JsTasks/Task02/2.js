// ededler = [1, 3, 5, 6, undefined, null, true, {}, 34, 'FrontEndMasters', 'BackEndMAsters']

// yeniEdedler=[];

// for (i = 0; i < ededler.length; i++){  
//     num = Number(ededler[i])
// if(typeof(num) === "number"){
//     yeniEdedler.push(ededler[i])
    
// }
// }
// console.log(yeniEdedler)

// ededler massivinin bütün elementlərini tiplərini edede çevirin. Tip çevirmə uğurlu alınıbsa əldə olunan nəticələri ayrı massiv olaraq çap elətdirin

ededler = [1, 3, 5, 6, undefined, null, true, {}, 34, 'FrontEndMasters', 'BackEndMAsters']

yeniEdedler=[];

for (i = 0; i < ededler.length; i++){  
    num = Number(ededler[i])
//     console.log(num);
  
if( !isNaN(num) && num !== 0 && num !==1 ){
    yeniEdedler.push(ededler[i])
    
}

// console.log(typeof(ededler[i]));
}

console.log(yeniEdedler)
