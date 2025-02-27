<?php
include "../../includes/db.php";
header("Access-Control-Allow-Origin:*");
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type,Authorization');
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$banner_query = mysqli_query($conn, "SELECT * FROM tbl_users WHERE STATUS=1");
$banner = [];
while($fetch = mysqli_fetch_array($banner_query)){
    $banner[] = $fetch;
}
$response = ['status' => true, 'response' => $banner];
echo json_encode($response)
?>