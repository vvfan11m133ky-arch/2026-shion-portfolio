// タブの切り替え---------------------------------------------
const buttons = document.querySelectorAll(".navigation-item")
const contents = document.querySelectorAll(".content");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        // 全部のbuttonからactiveクラスを削除
        buttons.forEach(btn => btn.classList.remove("active"));
        // クリックしたbuttonにactiveクラスを追加
        button.classList.add("active");

        // 押したbuttonのdata-targetからid名を取得
        const targetId = button.dataset.target;

        // idが同じ要素を表示。そうでなければ非表示
        contents.forEach(content => {
            if (content.id === targetId) {
                content.classList.add("visible");
            } else {
                content.classList.remove("visible");
            }
        })
    })
})
//-----------------------------------------------------------
//color-picker用---------------------------------------------
const cText = document.querySelector('#colorText');
const color = document.querySelector('#color-picker');
const colorArea = document.querySelector('#color-picker-area')

const colorBg = () => {
    // カラーコードを表示
    if (color.value === '#ffffff') {
        cText.textContent = `カラーコード：${color.value}(white)`;
    } else if (color.value === '#000000') {
        cText.textContent = `カラーコード：${color.value}(black)`;
    } else {
        cText.textContent = `カラーコード：${color.value}`;
    }
    // 選択した色を背景色に適用
    colorArea.style.backgroundColor = color.value;
    // text.style.color = color.value;
}

color.addEventListener('input', colorBg);
//-----------------------------------------------------------
//check&button用---------------------------------------------
const isAgreed = document.querySelector('#check');
const cBtn = document.querySelector('#check-btn');

isAgreed.addEventListener('change', () => {
    // チェックボタンがcheckedでないならボタンを無効に
    cBtn.disabled = !isAgreed.checked
});
//-----------------------------------------------------------
//darkmode用-------------------------------------------------
const dmBtn = document.querySelector('#darkmode-btn');
const dmArea = document.querySelector('#darkmode-area');

dmBtn.addEventListener('click', () => {
    dmArea.classList.toggle('dark-theme')

    if (dmBtn.textContent === 'ダークモードにする') {
        dmBtn.textContent = 'ライトモードにする';
    } else {
        dmBtn.textContent = 'ダークモードにする';
    }
})
//-----------------------------------------------------------
//text-counter用---------------------------------------------
const text = document.querySelector('#text-area');
const count = document.querySelector('#text-count');

// 文字を入力するたびにカウント
text.addEventListener('keyup', () => {
    count.textContent = text.value.length;

    // テキストが100文字を超えると赤文字にする
    if (text.value.length > 100) {
        count.classList.add('alert');
    } else {
        count.classList.remove('alert');
    }
})