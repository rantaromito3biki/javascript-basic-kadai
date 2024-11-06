//ボタンとテキスト要素を取得
const button = document.getElementById("btn");
const text = document.getElementById("text");

//ボタンがクリックされたときの処理
button.addEventListener("click", () => {
    text.textContent = "ボタンをクリックしました";
});
