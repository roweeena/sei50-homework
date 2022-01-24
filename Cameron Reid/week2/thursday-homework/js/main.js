const $cat = $("#cat");
$cat.css("left", 0);

const walkRight = function() {
  // $cat.toggleClass("flip") 

  const $walkRightID = setInterval(function() {

    let $currentOffsetInt = $cat.position().left += + 10;
    if($currentOffsetInt >= window.innerWidth - $cat.innerWidth){
      clearInterval($walkRightID);
      // walkLeft();
    }

  }, 50);

};

walkRight();

// $(function walkLeft() {
//     $cat.toggleClass("flip");

//     const walkLeftID = setInterval(function() {

//       const $currentOffsetInt = parseInt($cat.position().left);
//       $cat.position().left = $currentOffsetInt - 10 + "px";

//       if($currentOffsetInt < 0){
//         clearInterval(walkLeftID);
//         walkRight();
//       }

//     }, 50);

// });




// const walkLeft = function(){
//   cat.style.transform = "scaleX(-1)";  //flip image to face left

//   const walkLeftID = setInterval(function() {
      
//       const currentOffsetInt = parseInt(cat.style.left);
//       cat.style.left = currentOffsetInt - 10 + "px";

//       if(currentOffsetInt < 0){
//           clearInterval(walkLeftID);
//           walkRight();
//       }
//   }, 50);
// };