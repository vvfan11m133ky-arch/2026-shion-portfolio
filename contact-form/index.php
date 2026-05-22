<?php include 'header.php' ?>
<main>
    <form id="contact-form" action="confirm.php" method="post">
        <h2>お問い合わせ</h2>
        <p>下記項目を入力してください</p>

        <p><label for="name">お名前</label><br>
            <input type="text" id="name" name="name" placeholder="姓もしくは会社名">
            <br><span id=name-error class="error-message"></span>
        </p>

        <p><label for="email">メールアドレス</label><br>
            <input type="email" id="email" name="email" placeholder="example@ex.com">
            <br><span id=email-error class="error-message"></span>
        </p>

        <p><label for="contact-type">お問い合わせの種類</label><br>
            <select id="contact-type" name="contact-type">
                <option value="">--選択してください--</option>
                <option value="制作のご依頼">制作のご依頼</option>
                <option value="採用について">採用について</option>
                <option value="その他">その他</option>
            </select>
            <br><span id=contact-type-error class="error-message"></span>
        </p>

        <p><label for="detail">お問い合わせ内容</label><br>
            <textarea id="detail" name="detail"></textarea>
            <br><span id=detail-error class="error-message"></span>
        </p>

        <p><input type="checkbox" id="consent" name="consent">
            <label for="consent">個人情報の取り扱いへの同意</label>
            <br><span id=consent-error class="error-message"></span>
        </p>

        <button type="submit" id="submit-button">送信する</button>
    </form>
</main>
<?php include 'footer.php' ?>