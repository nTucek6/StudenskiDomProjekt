<?php
header('Access-Control-Allow-Origin: *');
//header('Content-Type: text/html; charset=utf-8');

$host = '127.0.0.1';
$dbName = "vuv_studom";
$username = "root";
$password = "";

try
{
$oConnection = new PDO("mysql:host=$host;dbname=$dbName", $username, $password,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
//;charset=utf8
}
catch (PDOException $pe)
{
die("Could not connect to the database $dbName :" . $pe->getMessage());
}


?>