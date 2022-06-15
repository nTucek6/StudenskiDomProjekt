<?php 
include "connectionDb.php";
include "classes.php";
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Origin: *');
header('Content-type: text/json; charset=utf-8');

if(isset($_POST['json']))
{
switch ($_POST['json'])
{
    case 'listacekanja':
        $query = "Select studenti.Id,studenti.Ime,studenti.Prezime,studenti.Spol,studenti.OIB,studentbodovi.BrojBodova from studenti LEFT JOIN studentbodovi on studentbodovi.StudentId = studenti.Id ORDER BY studentbodovi.StudentId DESC;";
        $result = $oConnectionFaks->query($query);
        if($result->rowCount() > 0)
        {
            $studenti = array();
            while($oRow = $result->fetch(PDO::FETCH_BOTH))
            {
                $Id = $oRow['Id'];
                $Ime = $oRow['Ime'];
                $Prezime = $oRow['Prezime'];
                $Spol = $oRow['Spol'];
                $OIB = $oRow['OIB'];
                $BrojBodova = $oRow['BrojBodova'];

                $student = new StudentUpis($Id,$Ime,$Prezime,$Spol,$OIB,$BrojBodova);
                array_push($studenti,$student);
            }
            echo json_encode($studenti);
        }
        break;

}
}
else
{
    echo json_encode("error 404");
}



?>