function carCrash() {
    if (wall.x = car.x < (car.width + wall.width)/2) {

        car.velocityX = 0;

        var deformation = 0.5 * speed * weight * speed / 22509;

        if (deformation < 100) {

            car.shapeColor = "green";
        }

        if (deformation > 100 && deformation < 180) {

            car.shapeColor = "yellow";
        }

        if (deformation > 180) {

            car.shapeColor = "red";
        }

    }
}