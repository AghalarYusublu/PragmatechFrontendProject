let user = JSON.parse(localStorage.getItem('users'));
let userValues = JSON.parse(localStorage.getItem('values'))

let title = document.querySelector('.title')
let ad = document.querySelector('.name')
let soyad = document.querySelector('.surname')
let success = document.querySelector('.success')
if (userValues[0] == user.username && userValues[1] == user.password) {
    title.innerHTML += 'Xoş Gəlifsıız!!';
    ad.innerHTML += user.name;
    soyad.innerHTML += user.surname;
    success.innerHTML += 'Giriş uğurla tamamlandı.'
}

