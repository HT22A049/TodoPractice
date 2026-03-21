// ボタンを取得してクリック時に反応させる
document.getElementById("add-btn").addEventListener("click", () => {
	// 「入力欄の文字を取得」するコード
	const inputText = document.getElementById("input-text").value
	const li = document.createElement("li"); // 新しい li 要素を作る
	const del = document.createElement("button") // 削除ボタンの作成
	del.textContent = "削除";
	li.textContent = inputText; // 先ほど取得した文字をセット

	del.addEventListener("click", () => {
		li.remove();
	});

	li.appendChild(del);
	document.getElementById("item-list").appendChild(li); // ul に追加
	document.getElementById("input-text").value = ""; // 入力欄を空にする
});

const input = document.getElementById("input-text");
input.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		const inputText = document.getElementById("input-text").value
		const li = document.createElement("li"); // 新しい li 要素を作る
		const del = document.createElement("button") // 削除ボタンの作成
		del.textContent = "削除";
		li.textContent = inputText;

		del.addEventListener("click", () => {
			li.remove();
		});

		li.appendChild(del);
		document.getElementById("item-list").appendChild(li); // ul に追加
		document.getElementById("input-text").value = ""; // 入力欄を空にする
	}
})
