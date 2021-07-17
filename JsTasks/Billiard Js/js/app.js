setInterval(Billiard, 1000)

function Billiard() {
    let ball = document.querySelector(".ball")
    let board = document.querySelector(".board")
    ball.style.animation = 'moveX 3.05s linear 0s infinite alternate, moveY 3.4s linear 0s infinite alternate';










    /*   let holes = document.querySelector(".hole1") */
    let ball1 = ball.getBoundingClientRect()
        /*   let hole = holes.getBoundingClientRect()
          console.log(hole) */
    holeCordinates = [{
            id: 1,
            xMin: 0,
            xMax: 410.6000061035156,
            yMin: 0,
            yMax: 201

        },
        {
            id: 2,
            xMin: 0,
            xMax: 1078.5999755859375,
            yMin: 0,
            yMax: 201
        },
        {
            id: 3,
            xMin: 0,
            xMax: 1078.5999755859375,
            yMin: 0,
            yMax: 569
        },
        {
            id: 4,
            xMin: 0,
            xMax: 410.6000061035156,
            yMin: 0,
            yMax: 569
        },
    ]

    holeCordinates.forEach(element => {
        if ((ball1.x < element.xMin && ball1.x < element.xMax) && (ball1.y < element.yMin && ball1.y < element.yMax)) {
            console.log("udduz")
        };
    });




    /*    if ((ball1.x > holeCordinates[cordinates[xMin]] && ball1.x < xMax) && (ball1.y > yMin && ball1.y < yMax)) {
           console.log("udduz")
       } */
    const css = window.document.styleSheets[0];
    css.insertRule(` 
    @keyframes moveY {
        from {
            top: 0;
        }
        to {
            top: 380px;
        }
    }`, css.cssRules.length);
    const css01 = window.document.styleSheets[0];
    css01.insertRule(`
    @keyframes moveX {
        from {
            left: 0;
        }
        to {
            left: 680px;
        }
    }`, css01.cssRules.length);

}