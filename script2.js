// Sử dụng JavaScript để thêm nội dung của bức thư vào phần tử có id "thank-you-letter"
document.getElementById("thankk-you-letter").innerHTML =
    "Một lần nữa, tớ chúc cậu có một ngày 8/3 thật vui vẻ, hạnh phúc, khỏe mạnh và luôn mỉm cười nhe! Khong chúc xinh đẹp nua vì xinh sẵn roii. ";

// Thêm hiệu ứng viết từ từ vào nội dung bức thư
const text = document.getElementById("thank-you-letter").innerText;
document.getElementById("thank-you-letter").innerHTML = "";
let index = 0;

function writeLetter() {
    document.getElementById("thankk-you-letter").innerHTML += text.charAt(index);
    index++;
    if (index < text.length) {
        setTimeout(writeLetter, 60); 
    }
}

writeLetter();

document.getElementById('redirect-button').addEventListener('click', function() {
    window.location.href = 'index.html';
});