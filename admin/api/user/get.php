<?php
include "../../includes/db.php";
header("Access-Control-Allow-Origin:*");
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type,Authorization');
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$get_query = mysqli_query($conn, "SELECT * FROM user WHERE STATUS=1");
$fetch = [];
while($fetch = mysqli_fetch_array($get_query)){
    $fetch[] = $fetch;
}
$response = ['status' => true, 'response' => $user];
echo json_encode($response)
?>