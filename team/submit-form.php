<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "boris.130@icloud.com";
    $subject = "來自網站的表單提交";
    $txt = "姓名： " . $name . "\n電子郵件： " . $email . "\n訊息： " . $message;
    $headers = "From: bs130.glorious@maomy.top"

    mail($to, $subject, $txt, $headers);
    echo "表單已成功提交！";
} else {
    echo "錯誤!"
}
?>