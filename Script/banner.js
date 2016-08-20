/**
 * author : Tarun Rana
 * date : 20th August 2016
 * Student Id : 300871205
 * course : COMP 125
 * Purpose : script for banner ad
 */

var MyCanvas=document.getElementById("canvas");
var stage;


function init(){
stage = new createjs.Stage(canvas);
var text = new createjs.Text("CreateJs CDN", "30px Verdana", "#000");
text.x = 50;
text.y = 50;
stage.addChild(text);
stage.update();

}
