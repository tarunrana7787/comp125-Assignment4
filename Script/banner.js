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

/**
 * @ function: init()
 * @ purpose: to handle body load event
 * @ void
 */
function init(){
canvas=document.getElementById("canvas");
stage = new createjs.Stage(canvas);
var text = new createjs.Text("CreateJs CDN", "25px Verdana", "#000");
text.x = 5;
text.y = 220;
text.regX=250*0.5;
text.regY=250*0.5;
stage.addChild(text);

}
/**
 * @ function: Looper()
 * @ purpose: to handle the tick event
 * @ void
 */
function Looper(){
    text.x+=3;
    if(text.x>400){
        text.x=0;
    }
    stage.update();
}
