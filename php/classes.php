<?php

abstract class Osoba
{
    public function __construct($i,$ime,$prez,$sp,$o)
    {
$this->Id = $i;       
$this->Ime = $ime;        
$this->Prezime = $prez;
$this->Spol = $sp;
$this->OIB = $o;        
    }
}

class Student extends Osoba
{

   /* public function __construct($id,$ime,$prezime)
    {
        $this->Id = $id;
        $this->Ime = $ime;
        $this->Prezime = $prezime;
    } */

}

class Voditelj extends Osoba
{
    
}

class Soba
{
    public function __construct($id,$BrojSobe,$kat,$BrojMjesta,$tip)
    {
        $this->Id  =  $id;         
        $this->BrojSobe =$BrojSobe;  
        $this->Kat  =  $kat;
        $this->BrojMjesta  =  $BrojMjesta;
        $this->Tip  = $tip;
    }

}
class StudentPoSobi
{
    public function __construct($id,$sobaId,$studentId)
    {
        $this->Id =$id;         
        $this->SobaId =$sobaId;  
        $this->StudentId =$studentId;
    }

}

class StudentSobaList
{
    public function __construct($soba,$ListStudent)
    {
        $this->Soba = $soba;
        $this->Studenti = $ListStudent;

    }

}



?>