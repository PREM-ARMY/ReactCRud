<?php
header("Access-Control-Allow-Origin:*");
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type,Authorization');

include "../libs/dbConnection.php";
include "../libs/jwtToken.php";


$data = json_decode(file_get_contents('php://input'));





if ($reponse['status']) {
    try {
        $firstName = $data->name;
        $email = $data->email;
        $password = $data->password;
        $number = $data->number;
        $image = $data->image;
       




        $query = mysqli_query($con, "INSERT INTO user SET  name ='" . $firstName . "',email='" . $email . "',password='" . $password . "',number='" . $number . "', image='" . $image . "',status=1");
        if ($query) {
            $status = ['status' => true, 'message' => 'Data inserted successfully'];
        } else {
            $status = ['status' => false, 'message' => 'Failed to insert data'];
        }
    } catch (Exception $e) {
        $status = ['status' => false, 'message' => 'Something Went Wrong Please Try Agian Later...'];
    }
    echo json_encode($status);
}
?>