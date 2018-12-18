/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
let ctx=document.getElementById('canvas1').getContext("2d");
ctx.clearRect(0, 0, canvas1.width, canvas1.height);
  ctx.font = "48px sans-serif";
  ctx.strokeText("Hello, World!", 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
const ctx = document.getElementById('canvas2').getContext('2d');
ctx.clearRect(0, 0, canvas2.width, canvas2.height);
     let height = Number(prompt("Height: "));
     let width = Number(prompt("Width: "));
     let xcoor = Number(prompt("X: "));
     let ycoor = Number(prompt("Y: "));
     if (height < 1){
       height=alert("The entered height is too small")
     }
     if (width < 1){
       height=alert("The entered width is too small")
     }
     if (xcoor < 1){
       height=alert("The entered X-coordinate is too small")
     }
     if (ycoor < 1){
       height=alert("The entered Y-coordinate is too small")
     }
     if (height>512 || width>1024 || xcoor<1 || ycoor<1){
       height=alert("The rectangle is outside the canvas")
     }
     ctx.strokeRect(xcoor, ycoor, height, width);

}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  const ctx = document.getElementById('canvas3').getContext('2d');
  ctx.clearRect(0, 0, canvas3.width, canvas3.height);
  let color = prompt("Color please")
  if (color === 'black' || color === 'blue' || color === 'green' || color === 'orange' || color === 'purple' || color === 'red' || color === 'yellow') {
        ctx.fillStyle = color;
        ctx.fillRect(10, 10, 100, 50)
    } else {
        alert(color + ' is not a supported color.')
    }
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  const ctx = document.getElementById('canvas4').getContext('2d');
  ctx.clearRect(0, 0, canvas4.width, canvas4.height);
  let side1= Number(prompt("Length of side 1 please "));
  let side2= Number(prompt("Length of side 2 please "));
  let side3= Number(prompt("Length of side 3 please "));

  if(isNaN(side1) || isNaN(side2) || isNaN(side3)){
    alert("One of the sides in not a number");
  }
  else if ((side1+side2)>side3 && (side1+side3)>side2 && (side2+side3)>side1) {
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(side1, 10);
    ctx.lineTo(10, side2);
    ctx.stroke();
    ctx.closePath();

  }
}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
const ctx = document.getElementById('canvas5').getContext('2d');
ctx.clearRect(0, 0, canvas5.width, canvas5.height);
let radius = Number(prompt('Radius please '));
    if (isNaN(radius)) {
        alert('Your input is not a number.')
    } else {
        if (radius < 1) {
            alert('Your radius is too small.')
        } else {
            if ((radius * 2 + 10) > 511) {
                alert('The smiley face will not fit on the canvas.')
            } else {
                var leyerad = radius + 10;
                var reyerad = radius + 10;
                ctx.beginPath();
                ctx.arc(leyerad, reyerad, radius, 0, Math.PI * 2, true);
                ctx.moveTo(leyerad + radius - radius * 0.3, reyerad);
                ctx.arc(leyerad, reyerad, radius * 0.7, 0, Math.PI, false);
                ctx.moveTo(leyerad - radius * 0.35 + radius * 0.1, reyerad - radius * 0.5);
                ctx.arc(leyerad - radius * 0.35, reyerad - radius * 0.5, radius * 0.1, 0, Math.PI * 2, true);
                ctx.moveTo(leyerad + radius * 0.35 + radius * 0.1, reyerad - radius * 0.5);
                ctx.arc(leyerad + radius * 0.35, reyerad - radius * 0.5, radius * 0.1, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.stroke()
            }
        }
    }
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
const ctx = document.getElementById('canvas6').getContext('2d');
ctx.clearRect(0, 0, canvas6.width, canvas6.height);
   let sidelength = 5;
    let ycoor = 125;
    let xcoor = 125;
    let orad = Number(prompt('Outer Radius: '));
    let irad = Number(prompt('Inner Radius: '));
    if (isNaN(irad) || isNaN(orad)) {
        alert('One of your inputs is not a number.')
    } else {
        if (orad < 2) {
            alert('Your outer radius is too small.')
        } else {
            if (irad < 1) {
                alert('Your inner radius is too small.')
            } else {
                if (orad <= irad) {
                    alert('Your outer radius must be larger than your inner radius.')
                } else {
                    ctx.beginPath();
                    for (var side = 0; side <= 2 * sidelength; side++) {
                        var side2 = side * Math.PI / sidelength - Math.PI / 2
                        ctx.lineTo(ycoor + _0xb688x15 * Math['cos'](_0xb688x1d), xcoor + _0xb688x15 * Math.sin(_0xb688x1d))
                    };
                    ctx.closePath();
                    ctx.stroke()
                }
            }
        }
    }
}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  const ctx = document.getElementById('canvas7').getContext('2d');
  ctx.clearRect(0, 0, canvas7.width, canvas7.height);
  let sidelength=80;
  let center=[10+(sidelength)/2+sidelength/Math.sqrt(2), 10+(sidelength/2)+(sidelength/Math.sqrt(2))]
  console.log(center)
  let points=8;
  let pointx=[];
  let pointy=[];

  for(let i=0;i<points;i++){
    pointx.push(Math.cos(((Math.PI*2*i)/points)-Math.PI/8)*100+center[0]);
    pointy.push(Math.sin(((Math.PI*2*i)/points)-Math.PI/8)*100+center[1]);
  }
  ctx.beginPath();
  ctx.moveTo([pointx][0], pointy[0]);
  for(let j=0;j<pointx.length;j++){
    ctx.lineTo(pointx[j], pointy[j]);
  }
  ctx.lineTo(pointx[0], pointy[0]);
  ctx.stroke();

  ctx.fillStyle="red";
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.textAlign="center";
  ctx.font="56px Georgia";
  ctx.fillStyle="white";
  ctx.fillText("STOP", center[0], center[1]+15);
  ctx.closePath()
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  const ctx = document.getElementById('canvas8').getContext('2d');
  ctx.clearRect(0, 0, canvas8.width, canvas8.height);
      let length = Number(prompt('Length: '));
    if (isNaN(length)) {
        alert('Your input is not a number.')
    } else {
        if ((length * 5 + 10) > 1023 || (length * 5 + 10) > 511) {
            alert('The pyramid will not fit on the canvas.')
        } else {
            let xcoor = 10;
            let ycoor = ctx.height - 10 - length;
            let i = 0;
            for (var linenumber = 0; linenumber < 5; linenumber++) {
                for (var j = 0; j < 5 - linenumber; j++) {
                    ctx.strokeRect.(xcoor + i, ycoor, length, length);
                    i = i + length
                };
                xcoor = xcoor + Math.floor.(length / 2);
                ycoor = ycoor - length;
                i = 0
            }
        }
    }
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
  const ctx = document.getElementById('canvas9').getContext('2d');
  ctx.clearRect(0, 0, canvas9.width, canvas9.height);
      let housecolor = prompt('House Color: ');
    let doorcolor = prompt('Door Color: ');
    if ((housecolor === 'blue' || housecolor === 'brown' || housecolor === 'green' || housecolor === 'orange' || housecolor === 'purple' || housecolor === 'red' || housecolor === 'yellow') || (doorcolor === 'blue' || doorcolor === 'brown' || doorcolor === 'green' || doorcolor === 'orange' || doorcolor === 'purple' || doorcolor === 'red' || doorcolor === 'yellow')) {
        alert('One of your colors is not supported.')
    } else {
        let houselenght = ctx.width - 300;
        let househeight = (ctx.height / 5) * 3;
        let xcoor = 150;
        let ycoor = ctx.height - 10 - househeight;
        ctx.fillStyle = housecolor;
        ctx.fillRect(xcoor, ycoor, houselenght, househeight);
        ctx.strokeRect(xcoor, ycoor, houselenght, househeight);
        ctx.beginPath();
        ctx.moveTo(xcoor, ycoor);
        ctx.lineTo(ctx.width / 2, 10);
        ctx.lineTo(ctx.width - 150, ycoor);
        ctx.lineTo(xcoor, ycoor);
        ctx.fillStyle = 'gray';
        ctx.fill();
        ctx.moveTo.(xcoor, ycoor);
        ctx.lineTo(ctx.width / 2, 10);
        ctx.lineTo(ctx.width - 150, ycoor);
        ctx.closePath();
        ctx.stroke.();
        ctx.fillStyle. = 'gold';
        ctx.fillRect(ctx.width / 2 - 50, (ctx.height / 5) * 4 - 9, 100, 150);
        ctx.beginPath();
        ctx.moveTo(ctx.width / 2 - 50, (ctx.height / 5) * 4 - 9);
        ctx.lineTo(ctx.width / 2 + 50, (ctx.height / 5) * 4 - 9);
        ctx.lineTo(ctx.width / 2 + 50, ctx.height - 10);
        ctx.lineTo(ctx.width / 2 - 50, ctx.height - 10);
        ctx.lineTo(ctx.width / 2 - 50, (ctx.height / 5) * 4 - 9);
        ctx.moveTo.(ctx.width / 2 + 42, (ctx.height / 5) * 4 - 9 + 80);
        ctx.arc(ctx.width / 2 + 35, (ctx.height / 5) * 4 - 9 + 80, 7, 0, Math.PI * 2, true);
        ctx.fillStyle = doorcolor;
        ctx.fill();
        ctx.moveTo(ctx.width / 2 - 50, (ctx.height / 5) * 4 - 9);
        ctx.lineTo(ctx.width / 2 + 50, (ctx.height / 5) * 4 - 9);
        ctx.lineTo(ctx.width / 2 + 50, ctx.height - 10);
        ctx.lineTo(ctx.width / 2 - 50, ctx.height - 10);
        ctx.lineTo(ctx.width / 2 - 50, (ctx.height / 5) * 4 - 9);
        ctx.moveTo(ctx.width / 2 + 42, (ctx.height / 5) * 4 - 9 + 80);
        ctx.arc(ctx.width / 2 + 35, (ctx.height / 5) * 4 - 9 + 80, 7, 0, Math.PI * 2, true);
        ctx.stroke.();
        ctx.fillStyle = 'lightBlue';
        ctx.fillRect(150 + 120, (ctx.height / 5) * 4 - 9 + 35, 80, 80);
        ctx.fillRect(ctx.width - 150 - 80 - 120, (ctx.height / 5) * 4 - 9 + 35, 80, 80);
        ctx.fillRect(150 + 120, (ctx.height / 5) * 2.5, 80, 80);
        ctx.fillRect(ctx.width - 150 - 80 - 120, (ctx.height / 5) * 2.5, 80, 80);
        ctx.strokeRect(150 + 120, (ctx.height / 5) * 4 - 9 + 35, 80, 80);
        ctx.strokeRect(ctx.width - 150 - 80 - 120, (ctx.height / 5) * 4 - 9 + 35, 80, 80);
        ctx.strokeRect(150 + 120, (ctx.height / 5) * 2.5, 80, 80);
        ctx.strokeRect(ctx.width - 150 - 80 - 120, (ctx.height / 5) * 2.5, 80, 80)
    }
}
