<?php
require "connexion.php";

$firstname = htmlspecialchars($_POST['firstname']);
$lastname = htmlspecialchars($_POST['lastname']);
$email = htmlspecialchars($_POST['emailRegister']);
$password = password_hash($_POST['passwordRegister'], PASSWORD_DEFAULT);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $query = $conn->prepare(
        "INSERT INTO users(firstname, lastname, email, password) VALUES (?, ?, ?, ?)"
    );

    $query->bind_param("ssss", $firstname, $lastname, $email, $password);

    if ($query->execute()) {
        echo "Registered successfully";
        header("Location: ../index.php");
        exit();
    } else {
        echo "Registration failed";
    }
}
?>
