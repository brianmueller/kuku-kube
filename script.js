var sqColor;
var sqColorOff;
var randRow;
var randCol;
var score = 0;
var level = 1;
var record = 1;
var dist;
var isCorrect = "";


function setup() {
    dist = 50;
    createCanvas(500, 650);
    noStroke();
    sqColor = [random(165), random(165), random(165)]; // most of the squares' color
    // sqColorOff = [sqColor[0] + 20, sqColor[1] + 20, sqColor[2] + 20]; // the one color that is off
    sqColorOff = [sqColor[0] + dist, sqColor[1] + dist, sqColor[2] + dist]; // the one color that is off
    randRow = round(random(5));
    randCol = round(random(5));
    console.log((sqColorOff[0] - sqColor[0]));
    // console.log((sqColorOff[1] - sqColor[1]));
    // console.log((sqColorOff[2] - sqColor[2]));
}

function draw() {
    background(255);
    fill(sqColor[0], sqColor[1], sqColor[2]);
    for (i = 0; i < 6; i++) { // rows
        for (j = 0; j < 6; j++) { // columns
            if (i == randRow && j == randCol) {
                fill(sqColorOff[0], sqColorOff[1], sqColorOff[2]); // make different color
            }
            else {
                fill(sqColor[0], sqColor[1], sqColor[2]); // set back to original color
            }
            // rect(100 * j + 5, 100 * i + 5, 90, 90, 20); // draw a rectangle
            rect(width / 6 * j + width / 120, width / 6 * i + width / 120, width / 6 - width / 60, width / 6 - width / 60, width / 30); // draw a rectangle based on width
        }
    }

    textAlign(CENTER);
    textSize(30);
    // text("Score: " + score,width/2,height-50);

    text("Level: " + level, width / 2 - 100, height - 50);

    fill(0);
    text("Record: " + record, width / 2 + 100, height - 50);

    if (isCorrect == "Correct!") {
        fill(0, 200, 0);
    }
    else fill(200, 0, 0);
    text(isCorrect, width / 2, height - 100);

}

function mouseClicked() {
    if (
        // mouseX > 100 * randCol + 5 && 
        // mouseX < 100 * randCol + 95 && 
        // mouseY > 100 * randRow + 5 && 
        // mouseY < 100 * randRow + 95

        mouseX > width / 6 * randCol + width / 120 &&
        mouseX < width / 6 * randCol + width / 120 + width / 6 - width / 60 &&
        mouseY > width / 6 * randRow + width / 120 &&
        mouseY < width / 6 * randRow + width / 120 + width / 6 - width / 60

    ) { // mouse is inside correct square
        sqColor = [random(160), random(160), random(160)]; // generate new regular color
        // sqColorOff = [sqColor[0] + random(5,20), sqColor[1] + random(5,20), sqColor[2] + random(5,20)]; // generate new random color
        dist = dist * 9 / 10;
        sqColorOff = [sqColor[0] + dist, sqColor[1] + dist, sqColor[2] + dist]
        randRow = round(random(5)); // new square
        randCol = round(random(5)); // location
        // console.log((sqColorOff[0] - sqColor[0]));
        // console.log((sqColorOff[1] - sqColor[1]));
        // console.log((sqColorOff[2] - sqColor[2]));
        // console.log("");
        // console.log("Row: " + (randRow + 1) + ", Column: " + (randCol + 1));
        level++;
        isCorrect = "Correct!";
        if (level > record) {
            record++;
        }
        // score++;
    }
    else {
        sqColor = [random(160), random(160), random(160)]; // generate new regular color
        // sqColorOff = [sqColor[0] + random(5,20), sqColor[1] + random(5,20), sqColor[2] + random(5,20)]; // generate new random color
        dist = dist * 10 / 9;
        sqColorOff = [sqColor[0] + dist, sqColor[1] + dist, sqColor[2] + dist]
        randRow = round(random(5)); // new square
        randCol = round(random(5)); // location
        // console.log((sqColorOff[0] - sqColor[0]));
        // console.log((sqColorOff[1] - sqColor[1]));
        // console.log((sqColorOff[2] - sqColor[2]));
        // console.log("");
        // console.log("Row: " + (randRow + 1) + ", Column: " + (randCol + 1));
        level--;
        isCorrect = "Incorrect..."
            // score--;

    }
}