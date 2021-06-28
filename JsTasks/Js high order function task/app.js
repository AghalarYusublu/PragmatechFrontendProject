students = [{
        ad: 'Samir',
        soyad: 'Kerimov',
        yas: 40
    },
    {
        ad: 'Hesen',
        soyad: 'Kerimov',
        yas: 35
    },
    {
        ad: 'Hesen',
        soyad: 'Serdarov',
        yas: 23
    },
    {
        ad: 'Malik',
        soyad: 'Serdarov',
        yas: 23
    }
]

/* function adiHesenOlan() {
    for (x in students) {
        if (students[x].ad == 'Hesen') {
            return students[x]
        }
    }


}
console.log(adiHesenOlan()) */


/* function adlariEyniOlan() {
    for (x in students) {
        for (a in students) {
            if (students[x].soyad === students[a].soyad) {
                return students[x], students[a]
            }
        }
    }


}
console.log(adlariEyniOlan()) */


/* function soyadlariEyniOlan() {
    let result = students.filter((el) => students.filter(_el => _el.soyad === el.soyad).length > 1)
    return result
}

console.log(soyadlariEyniOlan())



function adlariEyniOlan() {
    let result = students.filter((el) => students.filter(_el => _el.ad === el.ad).length > 1)
    return result
}

console.log(adlariEyniOlan())
 */

let result

function studentsFilter(rule) {
    arr = []
    for (x in students) {
        if (rule(students[x])) {
            arr.push(students[x])
        }
    }
    result = students.filter((el) => students.filter(_el => _el.soyad === el.soyad).length > 1)
    
    return arr

}


let telebe = studentsFilter(student => student.ad == 'Hesen')