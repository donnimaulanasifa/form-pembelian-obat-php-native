<?php
$host="127.0.0.1";
$port="3020";
$user="root";
$password="my-secret-pw";
$database="data";

$db = new mysqli($host,$user,$password,$database,$port);
if (!$db){
	  die("Koneksi gagal:".mysqli_connect_error());
}
?>