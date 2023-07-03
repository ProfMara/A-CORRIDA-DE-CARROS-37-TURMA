var canvas;
var cenario, form;
var database;
var gameState = 0;
var carimg1, carimg2;
var pista, player;
var car1, car2;
var cars = [];
var playerCount = 0;
function preload() {
  cenario = loadImage("planodefundo.png");
  carimg1 = loadImage("car1.png");
  carimg2 = loadImage("car2.png");
  pista = loadImage("pista.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
 
  //1º) criar o objeto jogo da classe Game

  //2º) chamar o método start do objeto jogo

}

function draw() {
  background(cenario);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
