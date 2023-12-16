<?php
include("conn.php");
$error = "";
$name= $_POST["name"];
$password= $_POST["password"];
$sql = "SELECT * FROM users WHERE username = '$name' AND password='$password'";
$result = mysqli_query($con, $sql);

if(mysqli_num_rows($result)>0){
    session_start();
    
    $arr=mysqli_fetch_array($result);
    $_SESSION['id']=$arr['id'];
    header("Location: https://www.youtube.com/"); 
    exit();

}else echo $error = "Invalid username or password.";


?>