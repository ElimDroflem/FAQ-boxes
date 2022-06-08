//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  //   console.log(question);
  const btn = question.querySelector(".question-btn");
  //   console.log(btn);
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

// traversing the dom

// const Btns = document.querySelectorAll(".question-btn");

// // iterate through all buttons & attach event listener
// Btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     // select parent of parent & add the .show-text class
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
