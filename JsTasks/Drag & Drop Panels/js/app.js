let panel = [{
        id: 1,
        title: 'Handle 1',
        text: '',
        dataId: 1,
    },
    {
        id: 2,
        title: 'Handle 2',
        text: '',
        dataId: 2,
    },
    {
        id: 3,
        title: 'Handle 3',
        text: '',
        dataId: 3,
    },
    {
        id: 4,
        title: 'Handle 4',
        text: '',
        dataId: 4,
    },
    {
        id: 5,
        title: 'Handle 5',
        text: '',
        dataId: 5,
    }
]

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.dataId);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


let row = document.querySelector('.row');
let test = panel.forEach((element) => {
    let grid = `
    <div class="col-6" id="${element.dataId}" draggable="true" ondragstart="drag(event)">
        <div class="box">
            <div class="box__title">
                <h1>${element.title}</h1>
            </div>
            <div class="box__text">${element.text}</div>
        </div>
    </div>`
    row.innerHTML += grid;
})


let boxTitle = document.querySelectorAll('.box__title');
for (let i = 0; i < boxTitle.length; i++) {
    boxTitle[i].addEventListener('click', () => {
        boxTitle[i].classList.toggle('active');
    })
}