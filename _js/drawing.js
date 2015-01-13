var canvas = document.getElementById('stage');
var c = canvas.getContext('2d');

function drawLine(context, from, to) {
    context.beginPath();
    context.moveTo(from[0], from[1]);
    context.lineTo(to[0], to[1]);
    context.stroke();
}


// Draw the canvas
function drawCanvas() {

    // reset the canvas and set basic styles
    canvas.width = canvas.width;
    c.lineWidth = 10;

    // draw the ground
    c.strokeStyle = 'green';
    drawLine(c, [0,145], [300,145]);

    c.strokeStyle = 'black';

    // draw gallow 1
    if(hangman.strikes > 0) {
      drawLine(c, [30,140], [30,10]);
    }

    // draw gallow 2
    if(hangman.strikes > 1) {
      c.lineTo(150,10);
      c.stroke();
    }

    c.lineWidth = 5;

    // draw the rope
    if(hangman.strikes > 2) {
      drawLine(c, [145,15], [145,30]);
    }

    // draw the head
    if(hangman.strikes > 3) {
      c.beginPath();
      c.moveTo(160, 45);
      c.arc(145, 45, 15, 0, (Math.PI/180)*360);
      c.stroke();
    }

    // draw body
    if (hangman.strikes > 4) {
      drawLine(c, [145,60], [145,130]);
    }

    // draw left arm
    if (hangman.strikes > 5) {
      drawLine(c, [145,80], [110,90]);
    }

    // draw right arm
    if (hangman.strikes > 6) {
      drawLine(c, [145,80], [180,90]);
    }

    // draw left leg
    if (hangman.strikes > 7) {
      drawLine(c, [145,130], [130,170]);
    }

    // draw right leg .. and game over!
    if (hangman.strikes > 8) {
      drawLine(c, [145,130], [160,170]);
    }
}
