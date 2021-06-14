// Dəyərin tipini rəqəmə çevirərək əldə olunan nəticənin 2 qatını ekrana yazdırın.Tip çevirmə uğursuz alınarsa ona uyğun olaraq error mesajı çap elətdirin

let enteredValue = prompt("");
let typeİsNumberValue = Number(enteredValue);
// console.log(deyer);
// console.log(typeof(deyer));
if (isNaN(typeİsNumberValue)) {
    console.log(typeİsNumberValue + " Tip cevirme  ugursuz oldu");
} else {
    console.log(typeİsNumberValue * 2 + " Tip cevirme ugurlu oldu");
}



// Ternary Operatorla

// let notNan = (isNaN(deyer)) ? (deyer + " ugursuz oldu") : (deyer + " ugurlu oldu");
// console.log(notNan);