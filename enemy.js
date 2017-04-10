var enemies = Array();


function create(x: Int, y: Int, s: Int, dir: String) {
    enemies += {x: x, y: y, speed: s, direction: dir}
}

move(direction: String) {
    for (i <- 0 until enemies.length) {}
    if (direction == "left") {
        x -= speed;
        enemies(i).direction = "left";
    } else if (direction == "right") {
        x += speed;
        enemies(i).direction = "right";
    } else if (direction == "up") {
        y += speed;
        enemies(i).direction = "up"
    } else if (direction == "down") {
        y -= speed;
        enemies(i).direction = "down";
    }
}