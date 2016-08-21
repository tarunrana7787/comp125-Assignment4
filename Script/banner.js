/**
 * author : Tarun Rana
 * date : 20th August 2016
 * Student Id : 300871205
 * course : COMP 125
 * Purpose : script for banner ad
 */
var body=document.getElementById("body");
body.addEventListener("load",init());
var MyCanvas;
var stage;
var text;
var picture;
/**
 * @ function: init()
 * @ purpose: to handle body load event
 * @ void
 */
function init(){
canvas=document.getElementById("canvas");
stage = new createjs.Stage(canvas);
text = new createjs.Text("CreateJs CDN", "25px Verdana", "#000");
text.x = 0;
text.y = 345;
text.regX=250*0.5;
text.regY=250*0.5;
stage.addChild(text);
createjs.Ticker.framerate = 25;
createjs.Ticker.addEventListener("tick", Looper);
text.addEventListener("click", VisitLink, false);
picture = new createjs.Bitmap("http://cdn.bleacherreport.net/images/team_logos/150x150/tennis.png");
stage.addChild(picture);
}
/**
 * @ function: Looper()
 * @ purpose: to handle the tick event
 * @ void
 */
function Looper(){
    text.x += 3;
    // text.y+=3;
    if(text.x > 400){
        text.x=0;
        // text.y=0;
    }
    stage.update();
}
/**
 * @ function: VisitLink()
 * @ pourpose: to visit the link when the text in canvas is clicked
 * @ void
 */
function VisitLink(){
    window.open("http://studentweb.cencol.ca/trana5/Assignment3.html");
}
