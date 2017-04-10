var x = 0;
var y = 0;
var speed = defaultSpeed;
var defaultSpeed = 3;
var img = document.getElementById("pImg")
//Muuta?

function move(direction: String) {
    if (direction == "left") {
        x -= speed;
        draw(c, x, y)
    } else if (direction == "right") {
        x += speed;
        draw(c, x, y)
    } else if (direction == "up") {
        y += speed;
        draw(c, x, y)
    } else if (direction == "down") {
        y -= speed;
        draw(c, x, y)
    }
}

function changeSpeed(newSpeed: Int) {
    speed = newSpeed
}

function reset() {
    x = 0;
    y = 0;
    speed = defaultSpeed;
}

function draw(c, x: Int, y: Int) {
    c.drawImage(img, x, y)
}