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
    public function __construct($i,$ime,$prez,$sp,$o,$u)
    {
$this->Id = $i;       
$this->Ime = $ime;        
$this->Prezime = $prez;
$this->Spol = $sp;
$this->OIB = $o; 
$this->Upisan = $u;           
    }


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

class StudentUpis
{
    public function __construct($i,$ime,$prez,$sp,$o,$b)
    {
$this->Id = $i;       
$this->Ime = $ime;        
$this->Prezime = $prez;
$this->Spol = $sp;
$this->OIB = $o;        
$this->BrojBodova = $b;        
    }
}

class Komentar
{
    public function __construct($i,$si,$k,$v,$vi,$vu)
    {
        $this->Id = $i;
        $this->SobaId = $si;
        $this->Komentar = $k;
        $this->Vlasnik = $v;
        $this->VlasnikId = $vi;
        $this->VrijemeUnosa = $vu;
    }
}

class Racun
{
    public function __construct($i,$si,$iz,$du,$p)
    {
        $this->Id = $i;
        $this->StudentId = $si;
        $this->Iznos = $iz;
        $this->DatumUplate = $du;
        $this->Placeno = $p;

    }


}



?>