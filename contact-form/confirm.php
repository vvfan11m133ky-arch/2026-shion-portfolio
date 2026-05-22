<?php
// 直接アクセスの対策
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: index.php");
    exit;
}
/*htmlspecialchars()で悪意のあるプログラムを
  無害に(サニタイズ)する関数*/
function h($str)
{
    return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}
function nh($str,)
{
    return nl2br(htmlspecialchars($str, ENT_QUOTES, 'UTF-8'));
}

// index.phpからPOSTで送られてきたデータを受け取る(name属性を使って)
$name = h(trim($_POST["name"] ?? ""));
$email = h(trim($_POST["email"] ?? ""));
$contactType = h($_POST["contact-type"] ?? "");
$detail = nh(trim($_POST["detail"] ?? ""));
$consent = h($_POST["consent"] ?? "");

//バリデーション
$errors = [];
if (empty($name)) {
    $errors[] = "お名前を入力してください。";
}
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "メールアドレスを正しく入力してください。
    ＠が1つか、＠の前後にスペースやカンマなどがないか、
    .が含まれているかなどをご確認ください。";
}
if (empty($contactType)) {
    $errors[] = "お問い合わせの種類を入力してください。";
}
if (empty($detail)) {
    $errors[] = "お問い合わせ内容を入力してください。";
}
if (empty($consent)) {
    $errors[] = "個人情報の取り扱いに同意してください。";
}

if (!empty($errors)) {
    echo "<h2>入力内容に以下の不備があります。</h2>";
    foreach ($errors as $error) {
        echo "<p>$error</p>";
    }
    echo '<button type="button" onclick="history.back()">戻る</button>';
    exit;
}
?>
<?php
$pageTitle = "お問い合わせ内容確認";
include 'header.php' ?>
<main>
    <!-- 確認表示 -->
    <div id=check>
        <h2>お問い合わせ内容の確認</h2>
        <table>
            <tr>
                <th>お名前</th>
                <td><?php echo $name ?></td>
            </tr>
            <tr>
                <th>メールアドレス</th>
                <td><?php echo $email ?></td>
            </tr>
            <tr>
                <th>お問い合わせの種類</th>
                <td><?php echo $contactType ?></td>
            </tr>
            <tr>
                <th>内容</th>
                <td><?php echo $detail ?></td>
            </tr>
        </table>

        <!-- send.phpへデータを送るための、見えないフォーム -->
        <form action="send.php" method="POST" id="confirm-form">
            <input type="hidden" name="name" value="<?php echo $name; ?>">
            <input type="hidden" name="email" value="<?php echo $email; ?>">
            <input type="hidden" name="contact-type" value="<?php echo $contactType; ?>">
            <input type="hidden" name="detail" value="<?php echo $detail; ?>">
            <!-- 修正用の戻るボタン -->
            <button type="button" id="back-button" onclick="history.back()">修正する</button>
            <!-- 確定ボタン -->
            <button type="submit" id="send-button">この内容で送信する</button>
        </form>
    </div>
</main>
<?php include 'footer.php' ?>