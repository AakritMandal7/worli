<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Get form data
    $name  = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);

    // 2. Your email where leads go
    $to = "aakritmandal2340@gmail.com"; // change this!

    // 3. Subject + message
    $subject = "New Lead from Website";
    $message = "Name: $name\nEmail: $email\nPhone: $phone";

    // 4. Additional headers
    $headers = "From: noreply@yourdomain.com"; // optional but recommended

    // 5. Send email
    if (mail($to, $subject, $message, $headers)) {
        // Success redirect
        header("Location: thankyou.html");
        exit();
    } else {
        echo "Email sending failed. Try again.";
    }
}
?>
