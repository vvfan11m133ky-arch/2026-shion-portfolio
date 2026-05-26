// タブの切り替えとコンテンツの表示-----------------------------
const buttons = document.querySelectorAll(".tab-menu-item")
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
            const flag = (content.id === targetId);
            content.classList.toggle('visible', flag);
        })
    })
})
//-----------------------------------------------------------
//カラーピッカー用--------------------------------------------
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
}

color.addEventListener('input', colorBg);
//-----------------------------------------------------------
//チェックとボタン用---------------------------------------------
const isAgreed = document.querySelector('#check');
const cBtn = document.querySelector('#check-btn');

isAgreed.addEventListener('change', () => {
    // チェックボタンがcheckedでないならボタンを無効に
    cBtn.disabled = !isAgreed.checked
});
//-----------------------------------------------------------
//ダークモード用-------------------------------------------------
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
//テキストカウンター用----------------------------------------
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
//-----------------------------------------------------------
