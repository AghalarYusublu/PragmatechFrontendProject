function creatGridLayout() {
    n = prompt('Element sayını daxil edin :')
    let row = document.createElement('div');
    row.className = 'row';
    document.body.appendChild(row)
    m = prompt('Sütunların sayını daxil edin : ')
    row.style.gridTemplateColumns = `repeat(${m},1fr)`
    a = prompt('Sütunlar arası məsafəni daxil edin (px) : ')
    row.style.gridGap = `${a}px`
    for (let i = 0; i < n; i++) {
        let grid = document.createElement('div');
        grid.className = 'grid__item'
        grid.style.backgroundImage = "url('2.jpeg')"
        row.appendChild(grid)
    }
}
creatGridLayout()



/* let setting = {
    elementSayi: 10,
    sutunSayi: 5,
    sutunlarArasiMesafe: 20,
}


function creatGridLayout() {
    n = setting.elementSayi;
    let row = document.createElement('div');
    row.className = 'row';
    document.body.appendChild(row)
    m = setting.sutunSayi
    row.style.gridTemplateColumns = `repeat(${m},1fr)`
    a = setting.sutunlarArasiMesafe
    row.style.gridGap = `${a}px`
    for (let i = 0; i < n; i++) {
        let grid = document.createElement('div');
        grid.className = 'grid__item'
        grid.style.backgroundImage = "url('3.jpg')"
        row.appendChild(grid)
    }
}
creatGridLayout() */