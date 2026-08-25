<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Honeypot check — if filled, block silently
    if (!empty($_POST["website"])) {
        header("Location: success.html");
        exit();
    }

    // Capture fields
    $name        = htmlspecialchars(trim($_POST["name"]));
    $email       = htmlspecialchars(trim($_POST["email"]));
    $subject     = htmlspecialchars(trim($_POST["subject"]));
    $query_type  = htmlspecialchars(trim($_POST["query_type"]));
    $message     = htmlspecialchars(trim($_POST["message"]));

    // Simulated email mode for local testing
    $log = "Name: $name\nEmail: $email\nQuery Type: $query_type\nSubject: $subject\nMessage:\n$message\n\n----------------------\n";
    file_put_contents("local_mail_log.txt", $log, FILE_APPEND);

    // Redirect to success page
    header("Location: success.html");
    exit();
}

?>
