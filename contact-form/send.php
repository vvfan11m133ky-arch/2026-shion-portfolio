<?php
// 直接アクセスの対策
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: index.php");
    exit;
}

function h($str)
{
    return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}
$name = h($_POST["name"] ?? "");
$email = h($_POST["email"] ?? "");
$contactType = h($_POST["contact-type"] ?? "");
$detail = h($_POST["detail"] ?? "");

// メールの設定
$to = "自分のメールアドレス";
$subject = "お問い合わせ";
$body = "名前： {$name}\n";
$body .= "メール： {$email}\n";
$body .= "種類： {$contactType}\n";
$body .= "内容：\n{$detail}";

$headers = "From: {$email}";

// 送信の設定
mb_language("japanese");
mb_internal_encoding("UTF-8");
$result = true;
// $result = mb_send_mail($to, $subject, $body, $headers);
?>
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <title></title>
</head>

<body>
    <?php if ($result) {
        header("Location: thanks.php");
    } else {
        echo "<h1>エラーが発生しました。</h1>";
        echo "<p>申し訳ありませんが、時間をおいて再度お試しください</p>";
        echo '<button onclick="history.go(-2)">入力画面へ</button>';
    } ?>
</body>

</html>