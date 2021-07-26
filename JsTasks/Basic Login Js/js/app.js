let obj = {
    name: 'Aghalar',
    surname: 'Yusublu',
    username: 'admin',
    password: 'admin'
}

let btn = document.querySelector('#btn');
let warning = document.querySelector('.warning')
let arr = []
btn.addEventListener('click', () => {
    let username = document.querySelector('#username').value
    let password = document.querySelector('#password').value
    if (username == obj.username && password == obj.password) {
        location.href = "/index.html"
    }else {
        warning.innerHTML += "istifadəçi adı və ya parol yanlışdır!"
    }
    arr.push(username)
    arr.push(password)
    localStorage.setItem('users',JSON.stringify(obj))
    localStorage.setItem('values',JSON.stringify(arr))
})
