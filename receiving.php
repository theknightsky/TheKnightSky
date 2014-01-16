<?php 
 
    $name = $_POST['name']; 
    $email = $_POST['email']; 
    $message = $_POST['message']; 
 
if(isset($_POST['submit']))
 
{
    $from_add = "contactform@theknightsky.com"; 
 
    $to_add = "theknightsky22@gmail.com"; 
     
    $subject = "Your Subject Name";
     
    $message = "Name:$name \n Email: $email \n Message: $message";
     
    $headers = "From: $from_add \r\n";
    $headers .= "Reply-To: $from_add \r\n";
    $headers .= "Return-Path: $from_add\r\n";
    $headers .= "X-Mailer: PHP \r\n";
     
     
    if(mail($to_add,$subject,$message,$headers)) 
    {
        $msg = "Mail sent"
    } 
}
     
    print "<p>Thank you $name for your message, 
we will be in contact shortly. <a href=\"index.php\">Click here</a> 
to continue</p>";
     
 
 
?>