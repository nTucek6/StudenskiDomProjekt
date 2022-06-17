<?php
include "connectionDb.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
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

                $query = "Select OIB from studenti where OIB =".$_POST['Oib'];
                $result = $oConnection->query($query);
                echo $result->rowCount();

                if($result->rowCount()>0)
                {
                    $query = "Select * from studenti where OIB =".$_POST['Oib'];
                    $result = $oConnectionFaks->query($query);
                    if($result->rowCount()>0)
                    {
                        
                        $oRowS = $result->fetch(PDO::FETCH_BOTH); // podaci studenta koji se registrir
                        $query = "Select * from dodatnipodacistudent where StudentId=".$oRowS['Id'];
                        $result = $oConnectionFaks->query($query);
                        $oRowD = $result->fetch(PDO::FETCH_BOTH); // dodatni podaci studenta
                        $query = "Select * from studentbodovi where StudentId=".$oRowS['Id'];
                        $result = $oConnectionFaks->query($query);
                        $oRowB = $result->fetch(PDO::FETCH_BOTH); //bodovi studenta
    
                        $query = "Insert into studenti(Ime,Prezime,Spol,JMBAG,OIB,Upisan) values('".$oRowS['Ime']."','".$oRowS['Prezime']."','".$oRowS['Spol']."','".$oRowS['JMBAG']."','".$oRowS['OIB']."',0)";
                        $result = $oConnection->query($query);
                        $query = "Select * from studenti ORDER BY Id DESC LIMIT 1";
                        $result = $oConnection->query($query);
                        $oRow = $result->fetch(PDO::FETCH_BOTH);
                        $StudentId = $oRow['Id'];
    
                        $query = "Insert into dodatnipodacistudent (StudentId,Adresa,PBR,Grad) values($StudentId,'".$oRowD['Adresa']."',".$oRowD['PBR'].",'".$oRowD['Grad']."')";
                        $result = $oConnection->query($query);
    
                        $query = "Insert into studentbodovi (StudentId,BrojBodova) value($StudentId,".$oRowB['BrojBodova'].")";
                        $result = $oConnection->query($query); 
    
                        $query = "Insert into login (Email,Lozinka,StudentId) values('".$_POST['Email']."','".$_POST['Lozinka']."',$StudentId)";
                        $result = $oConnection->query($query); 
     
                        echo "Registration successfull";
                    }
                    else
                    {
                        echo "Registration failed"; 
                    }  
                }
                else
                {
                    echo "Student je vec registriran";   
                }
               
                break;
        }
    }
    else
    {
        echo "Login failed";
    }
   


}

?>