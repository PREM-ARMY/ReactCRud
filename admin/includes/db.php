<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_error', 1);
    error_reporting(E_ALL);
//  $conn = mysqli_connect("localhost","root", "", "percentages");
$conn = mysqli_connect('217.21.87.103','u237107965_reacttest','React@321$#','u237107965_reacttest');

if($conn==true)
{
    echo '<script>alert("connection success")</script>';
}
else{
    echo '<script>alert("connection failed")</script>';
}

 ?>