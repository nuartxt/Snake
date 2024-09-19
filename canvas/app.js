// координаты

// const canvas = document.querySelector('.can')
// var ctx = canvas.getContext('2d')

// ctx.fillStyle = 'red'
// ctx.fillRect(90, 90, 30, 30)
// ctx.clearRect(0, 0, 180, 180)

// const canvas = document.querySelector('.can')
// const context = canvas.getContext('2d')


// context.clearRect(0, 0, 30, 30)
// context.strokeStyle = 'red'
// context.lineWidth = '5'
// context.rect(60, 60, 60, 60)
// context.stroke()
// context.fillStyle = 'orange'
// context.fill()





// canvas.addEventListener('click', (event) => {
//     context.fillStyle = input.value
//     console.log(event.offsetX)
//     console.log(event.offsetY)
//     let x = Math.floor(event.offsetX / 30) * 30
//     let y = Math.floor(event.offsetY / 30) * 30
//     context.fillRect(x, y, 30, 30)

// })
// const input = document.querySelector('input')
// canvas.onmousedown = () => {
//     canvas.onmousemove = (event) => {
//         context.fillStyle = input.value
//         let x = event.offsetX - 2
//         let y = event.offsetY - 2
//         context.fillRect(x, y, 4, 4)
//     }
// }
// canvas.onmouseup = function () {
//     canvas.onmousemove = null
// }
// let count = 0
// let interval = setInterval(() => {
//     if (count == 180) {
//         count = 0
//     }
//     context.clearRect(0, 0, 180, 180)
//     context.fillRect(count, 0, 30, 30)
//     count += 30

// }, 500)

// let coord = {
//     x: 0,
//     y: 0
// }

// clearInterval(interval)

// document.addEventListener('keydown', (event) => {
//     console.log(event.code)
// })













// ctx.fillStyle = 'orange' // Заливка цветом
// ctx.fillRect(150, 0, 30, 30) //Заливка прямоугольника канваса
// ctx.clearRect(60, 60, 60, 60) // Убрать область заливки

// ctx.strokeStyle = 'blue'
// ctx.lineWidth = '5'
// ctx.rect(0, 0, 30, 30)
// ctx.stroke()
// ctx.fillStyle = 'yellow'
// ctx.fill()

// canvas.onmousemove = function (event) {
//     ctx.fillRect(event.offsetX - 3.5, event.offsetY - 3.5, 7, 7)
// }

// canvas.onmousedown = function (event) {
//     ctx.fillRect(event.offsetX - 3.5, event.offsetY - 3.5, 7, 7)
// }

// canvas.onmouseup = function (event) {

// }
// let count = 0
// const block = 30
// let coord = {
//     x: 0,
//     y: 0
// }

// let int = setInterval(() => {
//     ctx.clearRect(0, 0, 180, 180)
//     ctx.fillStyle = 'orange' // Заливка цветом
//     ctx.fillRect(coord.x, coord.y, block, block) //Заливка прямоугольника канваса
//     coord.x += 30
// }, 100)

// document.addEventListener('keydown', (event) => {
//     console.log(event.code)
// })






// ctx.strokeStyle = 'blue'
// ctx.lineWidth = '3'
// ctx.rect(30, 30, 30, 30)
// ctx.stroke()

// ctx.fillStyle = 'orange'
// ctx.fill()






// canvas.onmousedown = () => {
//     canvas.onmousemove = (event) => {
//         let x = event.offsetX
//         let y = event.offsetY
//         ctx.fillRect(x, y, 5, 5)
//     }
//     canvas.onmouseup = function () {
//         canvas.onmousemove = null
//     }
// }


snake()

function snake() {

    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')

    const zmeikaFon = new Image()
    zmeikaFon.src = 'zmeika.png'

    const foodImg = new Image()
    foodImg.src = 'eda.png'

    let box = 32

    let score = 0

    let food = {
        x: Math.floor(Math.random() * 17) * box,
        y: Math.floor(Math.random() * 15) * box
    }

    let snake = []
    snake[0] = {
        x: 9 * box,
        y: 10 * box
    }

    document.addEventListener('keydown', nazhatie)
    let klav
    function nazhatie(event) {
        if (event.keyCode == 37 && klav != 'right') {
            klav = 'left'
        }
        else if (event.keyCode == 38 && klav != 'down') {
            klav = 'up'
        }
        else if (event.keyCode == 39 && klav != 'left') {
            klav = 'right'
        }
        else if (event.keyCode == 40 && klav != 'up') {
            klav = 'down'
        }
    }



    function drawGame() {
        ctx.drawImage(zmeikaFon, 0, 0)
        ctx.drawImage(foodImg, food.x, food.y)

        for (let i = 0; i < snake.length; i++) {
            ctx.fillStyle = 'green'
            ctx.fillRect(snake[i].x, snake[i].y, box, box)
        }

        ctx.fillStyle = 'white'
        ctx.font = '50px Arial'
        ctx.fillText(score, box * 2.5, box * 1.7)

        let snakeX = snake[0].x
        let snakeY = snake[0].y

        if (snakeX == food.x && snakeY == food.y) {
            score++
            food = {
                x: Math.floor(Math.random() * 17 + 1) * box,
                y: Math.floor(Math.random() * 15 + 3) * box
            }
        }
        else {
            snake.pop()
        }



        if (klav == 'left') snakeX -= box
        if (klav == 'right') snakeX += box
        if (klav == 'up') snakeY -= box
        if (klav == 'down') snakeY += box

        let newCoordinate = {
            x: snakeX,
            y: snakeY
        }

        snake.unshift(newCoordinate)
    }

    let game = setInterval(drawGame, 100)
}
