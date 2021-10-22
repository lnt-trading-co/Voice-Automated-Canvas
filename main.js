x = "";
y = "";
draw_c = "";
draw_s = "";

function setup() {
    canvas = createCanvas(700, 600)
    canvas.position(400, 160)
}
//voice commands begin here
var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = 'System is listening, please speak';
    Recognition.start();

}
Recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = 'System has recorded the text as: ' + content;
    if (content == "circle") {
        x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = 'Drawing circle in process';
        draw_c = "Set";
    }
    if (content == "square") {
        x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = 'Drawing sqaure in process';
        draw_s = "Set";
    }
}

function draw() {
    fill("white");
    stroke("blue");
    strokeWeight(8);
    if (draw_c == "Set") {
        radius = 300;
        circle(x, y, radius)
        document.getElementById("status").innerHTML = 'Circle Drawn';
        draw_c = "";
    }
    if (draw_s == "Set") {

        square(x, y, 100)
        document.getElementById("status").innerHTML = 'Square Drawn';
        draw_s = "";
    }
}
function cc(){
    background("seagreen");
}