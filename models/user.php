<?php
class User
{
    private $conn;

    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function register($firstname, $lastname, $email, $password)
    {
        $request = "INSERT INTO users (firstname, lastname, email, password) 
                VALUES ('$firstname', '$lastname', '$email', '$password')";
        return mysqli_query($this->conn, $request);
    }


    public function login($email, $password)
    {
        $query = mysqli_query($this->conn, "SELECT * FROM users WHERE email='$email' AND password='$password'");
        if (mysqli_num_rows($query) > 0) {
            $_SESSION['user'] = mysqli_fetch_assoc($query);
            echo "Login successful!";
            header("Location: ../dashboard.php");
        } else {
            echo "Email ou mot de passe incorrect.";
        }
    }
}
