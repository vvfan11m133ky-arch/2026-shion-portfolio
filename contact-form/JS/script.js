//contact-formがある場合に実行
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email')
    const contactTypeInput = document.getElementById('contact-type')
    const detailInput = document.getElementById('detail')
    const consentInput = document.getElementById('consent')
    //エラーメッセージ用
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const contactTypeError = document.getElementById('contact-type-error');
    const detailError = document.getElementById('detail-error');
    const consentError = document.getElementById('consent-error');

    //バリデーション
    contactForm.addEventListener('submit', (event) => {
        let hasEr = false;
        if (nameInput.value.trim() === "") {
            nameError.textContent = "お名前を入力してください。";
            hasEr = true;
        } else { nameError.textContent = "" }

        if (!emailInput.value.includes("@")) {
            emailError.textContent = "メールアドレスの形式が正しくありません。";
            hasEr = true;
        } else { emailError.textContent = "" }

        if (contactTypeInput.value === "") {
            contactTypeError.textContent = "お問い合わせの種類を選択してください。";
            hasEr = true;
        } else { contactTypeError.textContent = "" }

        if (detailInput.value.trim() === "") {
            detailError.textContent = "お問い合わせ内容を入力してください。";
            hasEr = true;
        } else { detailError.textContent = "" }

        if (!consentInput.checked) {
            consentError.textContent = "個人情報の取り扱いへの同意が必要です。";
            hasEr = true;
        } else { consentError.textContent = "" }

        if (hasEr === true) {
            event.preventDefault();
        }
    });
}

//二重送信の防止
//confirm-formがある場合に実行
const confirmForm = document.getElementById('confirm-form');
if (confirmForm) {
    confirmForm.addEventListener('submit', (event) => {
        const btn = document.getElementById('send-button');
        if (btn) {
            btn.disabled = true;
            btn.textContent = "送信中…";
        }
    });
}