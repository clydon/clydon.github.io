<?php

// Define some constants
// On Second parameter add your email
define( "RECIPIENT_EMAIL", "muhibbur@gmail.com" );

// Read the form values
$success = false;
$name = $_POST['name'];
$email = $_POST['email'];
$guest = $_POST['guest'];
$attend = $_POST['attend'];

// Setting Up Email Subject
$subject = 'A mail Sended by ' . $name ;
// Setting Up Email Message
$message = $name . ' will attend to the ' . $attend . ' event as ' . $guest ;

// If all values exist, send the email
if ( $name && $email && $guest && $attend ) {
  $recipient = RECIPIENT_EMAIL;
  $headers = "From: " . $name . " <" . $email . ">";
  $success = mail( $recipient, $subject, $message, $headers );

  echo "<p class='output'>Thanks For attending!</p>";
}

?>