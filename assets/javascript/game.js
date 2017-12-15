var targetNumber = randomNumber
var minNumber = 19;
var maxNumber = 120

var randomNumber = randomNumberFromRange(minNumber, maxNumber);

function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

$("#number-to-guess").text(randomNumber);
var counter = 0;
// Now for the hard part. Creating multiple crystals each with their own unique number value.
// We begin by expanding our array to include four options.
var numberOptions = randomNumberFromRange1;
// Next we create a for loop to create crystals for every numberOption.
//create an array with each image being an index
var image = [
  
      'assets/images/crystal-pic-1.jpg',
  
     'assets/images/crystal-2.jpeg',
  
     'assets/images/crystal-3.jpeg',

     'assets/images/crystal-4.jpeg'
  
  ];

for (var i = 0; i < numberOptions.length; i++) {
  // For each iteration, we will create an imageCrystal
  var imageCrystal = $("<img>");
  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal
    .addClass("crystal-image")
    .data('crystal-value',randomNumberFromRange1[i])
    .attr('src', image[i])
  $("#crystals").append(imageCrystal);
  //var image = new Array();
}
var minNumber1 = 1;
var maxNumber1 = 12

var randomNumber1 = randomNumberFromRange1(minNumber1, maxNumber1);

function randomNumberFromRange1(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
   
  
//   window.addEventListener("DOMContentLoaded", function() {
  
//       // Start preloading all the images.
  
//       for(var i in images) {
  
//           var img = new Image();
  
//           img.src = images[i];
  
//           img.style.display = "none";
  
//           img.addEventListener("load", function() {

//               this.parentNode.removeChild(this);
  
//           });
  
//           document.body.appendChild(img);
  
//       }
  
// for (var i = 0; i < numberOptions.length; i++) {
//   // For each iteration, we will create an imageCrystal
//  var src = images
//   var imageCrystal = $(image);
//   imageCrystal.addClass("crystal-image");
//   imageCrystal.attr( image[i]);
//   imageCrystal.attr(image[i]);
//   imageCrystal.attr(image[i]);
//   imageCrystal.attr(image[i]);
  
//   // Each imageCrystal will be given a data attribute called data-crystalValue.
//   // This data attribute will be set equal to the array value.
//   imageCrystal.attr("data-crystalvalue", numberOptions[i]);
//   // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
//   $("#crystals").append(imageCrystal);
// }
// This time, our click event applies to every single crystal on the page. Not just one.
$(document).on("click", '#crystals img', function() {
  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
  
  var crystalValue = $(this).data("crystal-value");
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  (counter += crystalValue);
  // All of the same game win-lose logic applies. So the rest remains unchanged.
  alert('New score:' + counter);
  if (counter === randomNumber) {
    alert("You win!");
  }
  else if (counter >= randomNumber) {
    alert("You lose!!");
  }
})