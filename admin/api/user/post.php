<?php
header("Access-Control-Allow-Origin:*");
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type,Authorization');

include "../libs/dbConnection.php";
include "../libs/jwtToken.php";


$data = json_decode(file_get_contents('php://input'));





if ($reponse['status']) {
    try {
        $firstName = $data->f_name;
        $lastName = $data->l_name;
        $email = $data->email;
        $password = $data->psw;
        $country = $data->contry;
        $mobile = $data->mobile;
        $role = 'admin';
        @$department_id = $data->dept;
        $date = date('Y-m-d H:i:s');




        $query = mysqli_query($con, "INSERT INTO tbl_organization_data SET company_id='{$reponse['created_by']}', superadmin_id='" . $department_id . "', firstName='" . $firstName . "',lastName='" . $lastName . "',email='" . $email . "',password='" . $password . "',role='" . $role . "',country_id='" . $country . "',mobile='" . $mobile . "',created_by='" . $reponse['userId'] . "',created_at='" . $date . "',updated_at='" . $date . "',status=1");
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