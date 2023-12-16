<?php
include("conn.php");
$email= $_POST["email"];
$name= $_POST["name"];
$username= $_POST["username"];
$password= $_POST["password"];
$sql = "SELECT * FROM users WHERE email = '$email'";
$result = mysqli_query($con, $sql);
if(mysqli_num_rows($result)>0){
    echo "User already exists.";
   
}else {$sqll = "INSERT INTO users (email, name, username, password,id) VALUES ('$email', '$name', '$username', '$password','')";
    $result1 = mysqli_query($con, $sqll);
    header("Location: loginform.html");}









?>