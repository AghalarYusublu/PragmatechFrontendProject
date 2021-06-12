// Dəyərin tipini rəqəmə çevirərək əldə olunan nəticənin 2 qatını ekrana yazdırın.Tip çevirmə uğursuz alınarsa ona uyğun olaraq error mesajı çap elətdirin

let b = prompt("");

let deyer = Number(b);
// console.log(deyer);
// console.log(typeof(deyer));

if (isNaN(deyer)) {
    console.log(deyer + " Ugursuz oldu");
} else {
    console.log(deyer * 2 + " Ugurlu oldu");
}

// Ternary Operatorla

// let notNan = (isNaN(deyer)) ? (deyer + " ugursuz oldu") : (deyer + " ugurlu oldu");
// console.log(notNan);