<?php
session_start();

require "connexion.php";

$mailLog = htmlspecialchars($_POST['emailLog']);
$passLog = htmlspecialchars($_POST['passwordLog']);

$request = "SELECT * FROM users WHERE email = ?";
$stmt = $conn->prepare($request);
$stmt->bind_param("s", $mailLog);
$stmt->execute();

$result = $stmt->get_result();
$user = $result->fetch_assoc();

if (!$user || !password_verify($passLog, $user['password'])) {
    echo "Email or password incorrect";
} else {
    $_SESSION["email"] = $user['email'];
    $_SESSION["loggedIn"] = true;

    header("Location: ../dashboard.php");
    exit();
}
?>
