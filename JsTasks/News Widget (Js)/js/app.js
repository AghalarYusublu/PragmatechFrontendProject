let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let slides = document.querySelector('.slides')
let slide = document.querySelectorAll('.slide')
let mainContent = document.querySelector('.main-content')
let height = mainContent.clientHeight

let mainItems = document.querySelector('.main-items')
let mainItem = document.querySelectorAll('.main-item')
let mainList = document.querySelector('.main-list')
let mainItemHeight = mainItems.clientHeight / 3
pos = 0;
pos01 = 0
slideObj = [{
        id: 1,
        title: 'Press On Read More To Open',
        date: 'March 12th, 2013',
        img: 'images/1.jpg',
        desc: `2 Different Styles to continue reading this. The Full page Style and In-Widget Style. This is the full page view. Check examples for the In-widget. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutp [...]`,
        dataId: 1
    },
    {
        id: 2,
        title: 'Links Can Be Direct Or As Read More Buttons Inside The News Reader',
        date: 'March 12th, 2013',
        img: 'images/2.jpg',
        desc: `2 Links can be 2 types "readmore" links and "direct" links. The readmore type will add a Continue reading button at the end of the article however the direct type will open the article in a new tab (can be self). To define
    a readmore link, add data-link-type to the list item. Otherwise the link will be direct. Lorem ipsum dolor [...]`,
        dataId: 2
    }, {
        id: 3,
        title: 'Multiple Animations Included',
        date: 'December 17th, 2012',
        img: 'images/3.jpg',
        desc: `2 You can customize all animations and control all their aspects. You can choose how the widget appears, how the article shows, how it closes and how the items react to your hovers. You can also set teh animations duration,
    delay and easing. I've included 10 animations: left right sides top-left top-right bottom-left bottom-right [...]`,
        dataId: 3
    }
]


mainItemObj = [{
    dataId: 1,
    date: '12  Mar',
    desc: 'Links can be direct or as Read More buttons inside the News'
}, {
    dataId: 2,
    date: '12  Mar',
    desc: 'This item is an external link'
}, {
    dataId: 3,
    date: '12  Mar',
    desc: 'Image with Overrided options'
}]


function SlideObj() {
    slideObj.forEach(element => {
        txt = `
        <div class="slide" data="${element.dataId}">
        <h2>${element.title}</h2>
        <span>${element.date}</span>
        <div class="main-img">
        <img src="${element.img}" alt="">
        </div>
        <p>${element.desc}
        </p>
        </div>
        `
        slides.innerHTML += txt


    })
}
SlideObj()

function MainItemObj() {
    mainItemObj.forEach(element => {
        txt = `
        <li class="main-item" data="${element.dataId}">
        <span>${element.date}</span>
        
        <a href="#0">${element.desc}</a>
        </li>
        `
        mainList.innerHTML += txt

    })
}
MainItemObj()


let slideNum = document.querySelectorAll('.slide').length
let mainItemNum = document.querySelectorAll('.main-item').length

next.addEventListener('click', function(e) {
    e.preventDefault()
    if (slideObj.dataId == mainItemObj.dataId) {
        if (pos != -((slideNum - 1) * height)) {
            pos += -height;
            slides.style.transform = `translateY(${pos}px)`
        } else if (pos <= slideNum - 1) {
            pos = 0;
            slides.style.transform = `translateY(${pos}px)`
        }
        if (pos01 != -((mainItemNum - 1) * mainItemHeight)) {
            pos01 += -mainItemHeight
            mainList.style.transform = `translateY(${pos01}px)`
        } else if (pos01 < (mainItemNum - 1) * mainItemHeight) {
            pos01 = 0;
            mainList.style.transform = `translateY(${pos01})`
        }

    }
})

console.log()
prev.addEventListener('click', function(e) {
    e.preventDefault()
    if (slideObj.dataId == mainItemObj.dataId) {
        if (pos != 0) {
            pos -= -height;
            slides.style.transform = `translateY(${pos}px)`
        } else if (pos <= slideNum) {
            pos += -(slideNum - 1) * height;
            slides.style.transform = `translateY(${pos}px)`
        }
        if (pos01 != 0) {
            pos01 -= -mainItemHeight
            mainList.style.transform = `translateY(${pos01}px)`
        } else if (pos01 <= mainItemNum) {
            pos01 += -(mainItemNum - 1) * mainItemHeight;
            mainList.style.transform = `translateY(${pos01}px)`
        }
    }
})