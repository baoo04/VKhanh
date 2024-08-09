// document.getElementById("thank-you-letter").innerHTML =
//     "Thư nayy! Nó ngắn thoii nên m bỏ chút thời gian đọc nhe. T đã suy nghĩ rất nhiều để có thể làm được bức thư nay đó, và cho dù có chuyện gì đi nua t vẫn sẽ cố gắng nhe. T biết t còn nhiều khuyết điểm nhưng mà t sẽ cố để khắc phục á. M có đôi lúc lạnh lùng vll nhưng mà vẫn quá tốt, gặp được m t cảm thấy thật may mắn đó!. Mà này, cho dù có chuyện gì đi nữa thì sống là phải vui vẻ nhe, với luôn ăn uống đầy đủ để khong bị gầy này, nếu mà có chuyện buồn gì á thì cứ nhắn t he. T vẫn luôn ở đó. Đừng bơ với block t là được nhe! Thư cũng dài roi nên t xin phép end he.";

// const text = document.getElementById("thank-you-letter").innerText;
// document.getElementById("thank-you-letter").innerHTML = "";
// let index = 0;

// function writeLetter() {
//     document.getElementById("thank-you-letter").innerHTML += text.charAt(index);
//     index++;
//     if (index < text.length) {
//         setTimeout(writeLetter, 60);
//     }
// }

// writeLetter();

// document.getElementById('redirect-button').addEventListener('click', function() {
//     window.location.href = 'index2.html';
// });

document.getElementById("comfortBtn").addEventListener("click", function () {
  window.location.href = 'index2.html';
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 10 + 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);
