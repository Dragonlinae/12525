<?php
//WORK ON VALIDATION

  if (isset($_POST['submit'])) {
    $mailTo = 'wolfcorprobotics12525@gmail.com';
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $emailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $headers = "From: ".$emailFrom;
    $txt = "An email has come in from ".$name." (".$emailFrom.").\n\n".$message;

    $mailSent = mail($mailTo, $subject, $txt, $headers);

  }
?>
