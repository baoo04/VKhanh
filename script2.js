// Sử dụng JavaScript để thêm nội dung của bức thư vào phần tử có id "thank-you-letter"
// document.getElementById("thankk-you-letter").innerHTML =
//   "Chúc em yêu của anh mau hết mệt ạ, anh xin lỗi vì những sai lầm khum đang có vào ngày hôm qua, anh sẽ luon để ý tới cảm xúc của cam, và làm sao cho em khong phải cảm thấy khó xử và nghĩ nhiều nhé, yêu cam nhất trên đời luon >_<, số 2 khong ai số 1, mong là tụi mình sẽ càng yeu nhiều hơn, và càng thấu hiểu nhau hơn nhé ạaa";
// if (document.getElementById("thankk-you-letter")) {
//   const text = document.getElementById("thank-you-letter").innerText;
//   document.getElementById("thankk-you-letter").innerHTML = "";
//   let index = 0;

//   function writeLetter() {
//     document.getElementById("thankk-you-letter").innerHTML +=
//       text.charAt(index);
//     index++;
//     if (index < text.length) {
//       setTimeout(writeLetter, 60);
//     }
//   }
// }

// writeLetter();

document
  .getElementById("redirect-button")
  .addEventListener("click", function () {
    window.location.href = "index.html";
  });

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  document.body.appendChild(heart);
  console.log("Heart");

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);
