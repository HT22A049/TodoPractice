function addTask () {
	const input = document.getElementById("input-text");
	const inputText = document.getElementById("input-text").value;

	// 入力が空なら何もせずに終了
	if (inputText === "") return;

	// タスク表示用の li と削除ボタンを作成
	const li = document.createElement("li");
	const del = document.createElement("button");

	del.textContent = "削除";
	li.textContent = inputText;

	// 削除ボタンを押したらタスクを削除
	del.addEventListener("click", () => {
		li.remove();
	});

	// li に削除ボタンを追加してリストに表示
	li.appendChild(del);
	document.getElementById("item-list").appendChild(li);

	// 入力欄をリセット
	input.value ="";
}

// 追加ボタンがクリックされたらタスクを追加
document.getElementById("add-btn").addEventListener("click", addTask);

const input = document.getElementById("input-text");

// Enter キーでもタスクを追加できるようにする
input.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		addTask();
	}
});
