<?php
include "connectionDb.php";
include "classes.php";
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Origin: *');
header('Content-type: text/json; charset=utf-8');
//header('Content-Type: text/html; charset=utf-8');



if(isset($_POST['json']))
{
switch ($_POST['json']) {
    case 'StudentPoSobi':
        $oStudenti = VratiStudente();
        $oSobe = VratiSobe();
        $oStudentPoSobi = VratiStudentPoSobi();
        //$studentsId = array();
       
        $returnData = array();
        
       foreach($oSobe as $soba)
       {
        $studenti = array();
        $string = ""; // u varijablu spremam studente po sobi odvojene zarezom
        $c = 0;
        foreach($oStudentPoSobi as $sps)
        {
            if($soba->Id == $sps->SobaId)
            {
                foreach($oStudenti as $student)
                {
                    if($sps->StudentId==$student->Id)
                    {
                       array_push($studenti,$student);
                    }
                } 
            }
        }
        
        foreach($studenti as $s)
        {
            if($c == count($studenti)-1)
            {
                $string .= $s->Ime." ".$s->Prezime;
            }
            else
            {
                $string .= $s->Ime." ".$s->Prezime.", ";
            }
            $c++;
        }
        $string;
        array_push($returnData,new StudentSobaList($soba,$string));   
       } 

       echo json_encode($returnData);
        break;
        case 'StudentiBezSobe':
            $oStudenti = VratiStudente();
            $oStudentPoSobi = VratiStudentPoSobi();
            //$StudentBS = array();
            $emtpy;

            //echo json_encode($oStudenti);

            $studentCount =count($oStudenti);

            for ($i=0; $i < $studentCount; $i++) 
            { 
                //echo $i;
                $emtpy = false;
                for ($j=0; $j < count($oStudentPoSobi); $j++)
                {
                    if($oStudenti[$i]->Id == $oStudentPoSobi[$j]->StudentId)
                    {
                       
                        $emtpy = true;
                        //echo $emtpy;
                    }
                } 
                if($emtpy == true)
                {
                    //array_splice($oStudenti, $i, 1);
                    unset($oStudenti[$i]);
                    
                }
              // echo $oStudenti;
            }
            
            $oStudenti =array_values($oStudenti);

            //var_dump($oStudenti);

            echo json_encode($oStudenti);
            break;

            case 'StudentInfoRoom': //Kod prijave studenta vračamo informacije o studentu i njegovoj sobi
                $query = "Select * from studenti where Id=".$_POST["Id"];
                $result = $oConnection->query($query);

                $oRow = $result->fetch(PDO::FETCH_BOTH);
               // echo ($oRow['Prezime']);

                $id = $oRow['Id'];
                $i = utf8_encode($oRow['Ime']);
                $p = utf8_encode($oRow['Prezime']);
                $s = $oRow['Spol'];
                //$j = $oRow['JMBAG'];
                $o = $oRow['OIB']; 
                $student = new Student($id, $i,$p,$s,$o);

                $query = "Select * from studentposobi where StudentId=".$_POST["Id"];
                $result = $oConnection->query($query);
                $count = $result->rowCount();

             

                if($count > 0)
                {
                    $oRow = $result->fetch(PDO::FETCH_BOTH);
                    $query = "Select * from sobe where Id=".$oRow['SobaId'];
                    $result = $oConnection->query($query);
                    $oRow = $result->fetch(PDO::FETCH_BOTH);
                    $id = $oRow['Id'];
                     $bs =  $oRow['BrojSobe'];
                     $kat =  $oRow['Kat'];
                     $bm =  $oRow['BrojMjesta'];
                     $tip =  $oRow['Tip'];
                    $soba = new Soba($id,$bs,$kat,$bm,$tip);
                    $array = new StudentSobaList($soba,$student);
                    echo json_encode($array);
                }
                
                else
                {
               /* 
                array_push($data,$student);
                array_push($data,(object)["Soba"=>"null"]);
                echo json_encode($data); */
                $soba = (object)["BrojSobe"=>"null"];
                $array = new StudentSobaList($soba,$student);
                echo json_encode($array);
                }
                
                break;
                case 'GetStudentRoom': //Ispis studenata iz sobe za brisanje
                    $oStudentPoSobi = VratiStudentPoSobi();
                    $oStudenti = VratiStudente();
                    $sobaId = $_POST['SobaId'];
                    $returnData = array();

                    foreach($oStudentPoSobi as $sps)
                    {
                        if($sps->SobaId == $sobaId)
                        {
                            foreach($oStudenti as $student)
                            {
                                if($sps->StudentId == $student->Id )
                                {
                                    array_push($returnData,$student);
                                }
                            }
                        }
                    }
                    echo json_encode($returnData);
                    break;

                    case'DeleteStudentFromRoom':
                        $query = "Delete from studentposobi where StudentId=".$_POST['StudentId'];
                        $result =$oConnection->query($query);
                        $count = $result->rowCount();

                        if($count > 0)
                        {
                            echo json_encode("Delete successfull");
                        }
                        else
                        {
                            echo json_encode("Delete failed");
                        }
                        
                        break;
}
}
else
{
    echo json_encode("error 404");
}

function VratiSobe()
{
    header('Content-type: application/json; charset=utf-8');
    include "connectionDb.php";
        //$query = "Select sobe.Id,sobe.BrojSobe,sobe.Kat,sobe.BrojMjesta,sobe.Tip,studenti.Id as StudentId,studenti.Ime,studenti.Prezime from sobe left join studentposobi on sobe.Id = studentposobi.SobaId left join studenti on studentposobi.StudentId = studenti.Id ";
        $query = "Select * from sobe";
        $result = $oConnection->query($query);
        $oSobe = array();
        
        while($oRow = $result->fetch(PDO::FETCH_BOTH))
        {
            $id = $oRow['Id'];
            $bs =  $oRow['BrojSobe'];
            $kat =  $oRow['Kat'];
            $bm =  $oRow['BrojMjesta'];
            $tip =  $oRow['Tip'];

        $soba = new Soba($id,$bs,$kat,$bm,$tip); 
        array_push($oSobe,$soba);
        }
        
        return $oSobe;
}


function VratiStudente()
{
    //header('Content-type: application/json; charset=utf-8');
      include "connectionDb.php";
      //$query = "Select sobe.Id,sobe.BrojSobe,sobe.Kat,sobe.BrojMjesta,sobe.Tip,studenti.Id as StudentId,studenti.Ime,studenti.Prezime from sobe left join studentposobi on sobe.Id = studentposobi.SobaId left join studenti on studentposobi.StudentId = studenti.Id ";
      $query = "Select * from studenti";
      $result = $oConnection->query($query);
      $oStudenti = array();
      
      while($oRow = $result->fetch(PDO::FETCH_BOTH))
      {
      $id = $oRow['Id'];
      $i = utf8_encode($oRow['Ime']);
      $p = utf8_encode($oRow['Prezime']);
      $s = $oRow['Spol'];
      //$j = $oRow['JMBAG'];
      $o = $oRow['OIB']; 
      $student = new Student($id, $i,$p,$s,$o);
      array_push($oStudenti,$student);
      }
      //echo json_encode($oStudenti);
      return $oStudenti;  
}


function VratiStudentPoSobi()
{
    //header('Content-type: application/json; charset=utf-8');
    include "connectionDb.php";
      $query = "Select * from studentposobi";
      $result = $oConnection->query($query);
      $oSPS = array();
      while($oRow = $result->fetch(PDO::FETCH_BOTH))
      {
      $id = $oRow['Id'];
      $i = $oRow['SobaId'];
      $si = $oRow['StudentId'];
     
      $sps = new StudentPoSobi($id,$i,$si);
      array_push($oSPS,$sps);
      }
      return $oSPS;  
}

/*
function VratiJednogStudenta()
{
    include "connectionDb.php";
    $query = "Select * from studenti where Id="$_POST['StudentId'];
    $result = $oConnection->query($query);
    $oStudenti = array();
    
    while($oRow = $result->fetch(PDO::FETCH_BOTH))
    {
    $id = $oRow['Id'];
    $i = utf8_encode($oRow['Ime']);
    $p = utf8_encode($oRow['Prezime']);
    $s = $oRow['Spol'];
    //$j = $oRow['JMBAG'];
    $o = $oRow['OIB']; 
    $student = new Student($id, $i,$p,$s,$o);
    array_push($oStudenti,$student);
    }
    //echo json_encode($oStudenti);
    return $oStudenti;  
} */

/*
$query = "Select * From studenti";
$result = $oConnection->query($query);
$oStudenti = array();
while($oRow = $result->fetch(PDO::FETCH_BOTH))
{

$id = $oRow['Id'];
$i = $oRow['Ime'];
$p = $oRow['Prezime'];
$s = $oRow['Spol'];
$j = $oRow['JMBAG'];
$o = $oRow['OIB'];
$student = new Student($id, $i,$p,$s,$o); 
array_push($oStudenti,$student);
}
//var_dump($oArtikli);
echo json_encode($oStudenti);*/

?>