$(document).ready(function () {

$("#tweet-text").on("input", function () {
//   if (!this.value) {
    const maxChar = 140;
    let charactersUsed = this.value.length;
    let charactersLeft = maxChar - charactersUsed;
    console.log(charactersLeft);
    const counter = $(this).siblings(".newTweetFooter").find(".counter");
    console.log(counter);
    counter.text(charactersLeft);
   if (charactersLeft < 0) {
    counter.css("color", "red");
   } else {
    counter.css("color", "black");
   }})})
    




