<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'SunfishWebsite.com';
    $email_subject = "New Message Received";
    $email_body = "You have received a new message from Sunfish Website.\n".
                "User Name: $name\n".
                "User Email: $email\n".
                "User Message: $message\n";
    $to = "20065231@imail.sunway.edu.my"
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $email \r\n";

    mail($to,$email_subject,$email_body,$headers);
    header("Location: Information.html");
    ?>