// ボタンを取得してクリック時に反応させる
document.getElementById("add-btn").addEventListener("click", () => {
	// 「入力欄の文字を取得」するコード
	const inputText = document.getElementById("input-text").value
	const li = document.createElement("li"); // 新しい li 要素を作る
	li.textContent = inputText; // 先ほど取得した文字をセット
	document.getElementById("item-list").appendChild(li); // ul に追加
});

