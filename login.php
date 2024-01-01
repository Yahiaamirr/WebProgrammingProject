<?php
include("conn.php");
session_start();

$error = "";
$name = $_POST["name"];
$password = $_POST["password"];

// Use prepared statements to prevent SQL injection
$stmt = $con->prepare("SELECT id, username, password FROM users WHERE username = ?");
$stmt->bind_param("s", $name);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $arr = $result->fetch_assoc();

    // Verify password using password_verify
    if (password_verify($password, $arr['password'])) {
        $_SESSION['id'] = $arr['id'];
        $_SESSION['username'] = $arr['username'];

        // Redirect to a welcome page using JavaScript
        echo '<script>';
        echo 'alert("Welcome back, ' . $arr['username'] . '!");';
        echo 'window.location.href = "myProject.html";'; // Replace "welcome.php" with your actual welcome page
        echo '</script>';
        exit();
    } else {
        $error = "Invalid username or password.";
    }
} else {
    $error = "Invalid username or password.";
}

echo $error;
?>

