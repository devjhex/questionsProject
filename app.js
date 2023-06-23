
/* Using selectors inside the element */
let question = document.querySelectorAll("#question");
   console.log(question);

question.forEach(function(q){
  let btn = q.querySelectorAll(".btn");
  btn.forEach(function(button){
   button.addEventListener('click', function(){
     let answer =  q.querySelector(".answer");
     answer.classList.toggle("hidden");
   })
  })
})













/* Traversing the Dom */

/* Select the buttons only and then after get the child elements through traversing */

// let openBtn = document.querySelectorAll("#plus");
// let closeBtn = document.querySelectorAll("#minus");


// openBtn.forEach(function(btn){
//    btn.addEventListener("click", function(event){
//     let question = event.currentTarget.parentElement.parentElement.parentElement;
    
//     question.querySelector("#answer").classList.toggle("hidden");
//     question.querySelector("#plus").classList.toggle("hidden");
//     question.querySelector("#minus").classList.toggle("hidden");
//    });
// }
// );
// closeBtn.forEach(function(btn){
//    btn.addEventListener("click", function(event){
//     let question = event.currentTarget.parentElement.parentElement.parentElement;
    
//     question.querySelector("#answer").classList.toggle("hidden");
//     question.querySelector("#plus").classList.toggle("hidden");
//     question.querySelector("#minus").classList.toggle("hidden");
//    });
// }
// );