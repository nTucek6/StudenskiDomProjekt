<?php
include "connectionDb.php";
header('Access-Control-Allow-Origin: *');
//header("Content-Type: application/json");

if(isset($_POST['login']))
{
    if(isset($_POST['Email']) && isset($_POST['Lozinka']))
    {
        switch ($_POST['login']) 
        {
            case 'student':
                header('Content-type: text/json');
                $query = "Select * from login where Email='".$_POST['Email']."' AND Lozinka='".$_POST["Lozinka"]."'";
                $result = $oConnection->query($query);   
                $count = $result->rowCount();

                if($count > 0)
                {
                    $oRow = $result->fetch(PDO::FETCH_BOTH);
                    $data = (object)
                    [
                        "login"=>"Login successfully",
                        "Id"=>$oRow['StudentId']
                    ];
                   
                   // echo json_encode("Login successfully");
                   // echo json_encode ($oRow['StudentId']);
                   echo json_encode($data);

                }
                else
                {
                    echo "Login failed";
                }
                break;
            case 'admin':
              
                $query = "Select * from administrator where Email='".$_POST['Email']."' AND Lozinka='".$_POST["Lozinka"]."'";
               
                $result = $oConnection->query($query);   
                
                $count = $result->rowCount();

                if($count > 0)
                {
                    echo "Login successfully";
                }
                else
                {
                    echo "Login failed";
                }
                break;
            case 'register':

                
                break;
        }
    }
    else
    {
        echo "Login failed";
    }
   


}

?>