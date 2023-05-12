var canvas;
function setup()
{
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-2');
}

function draw()
{
    background(253, 138, 138);
    drawVectorField();
}

function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}

var vectorlen = 15;
var spacing = 50;
var interp = 0.0;
var curr_rot = 0;
var next_rot = 0;
var rot = 0;
function drawVectorField() {
    //drawing vectors
    fill(268, 209, 209);
    stroke(268, 209, 209);
    strokeWeight(1);
    width = windowWidth;
    height = windowHeight;
    for (var x = spacing/2; x < width; x += spacing){
        for (var y = spacing/2; y < width;y += spacing){
        angle = atan2(mouseX-x,mouseY-y)+rot;
        line(x,y,x+sin(angle)*vectorlen,y+cos(angle)*vectorlen);
        }
    }
}

function serp(start,end,fac){
    return map(cos(fac*PI),1,-1,start,end);
}