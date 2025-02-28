<?php
header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json, charset=utf-8');

include "../../includes/db.php";


$data = [];
$query = mysqli_query($conn, "SELECT * FROM user WHERE status = 1");

if ($query) {
    $count = mysqli_num_rows($query); 
  
    while ($fet = mysqli_fetch_assoc($query)) {
        $data[] = $fet;
    }
    
   
    $status = ['status' => true, 'message' => 'Success', 'data' => $data, 'count' => $count];
} else {
 
    $status = ['status' => false, 'message' => 'Unable to fetch data, please try again later.'];
}


echo json_encode($status);
?>
