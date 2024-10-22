<?php

require_once "database.php";
require_once "errorHandler.php";

class Users {
  private $username;
  private $usermail;
  private $address;
  private $phone;
  private $cart;

  private $db;
  public  $handler;

  public function __construct() {
    $this->db = new DatabaseController();
    $this->handler = new Errorhandler();
  }

  public function createUser(array $data) {
    // Check if the e-mail address is already in use
    $check = $this->db->getCon()->select("clients", [
      'email'
    ], [
      'email' => $data['email']
    ]);

    if(!empty($check)) {
      $this->handler->setError("Endereço de e-mail já cadastrado!");
      header("Location: /cadastro");
      exit();
    }
    
    $transaction = $this->db->getCon()->insert("clients", [
      "name"      => $data['name'],
      "password"  => password_hash($data['password'], PASSWORD_DEFAULT),
      "email"     => $data['email'],
      "phone"     => $data['phone']
    ]);  
    
    if (!$transaction) {
      $this->handler->setError("Ocorreu um error ao tentar cadastrar o usuário.");
      header("Location: /cadastro");
      exit();
    }

    $this->handler->setSuccess("Usuário cadastrado com sucesso!");
    header("Location: /cadastro");
    exit();
  } 
  
  public function userLogin(string $email, string $password) {
    if (isset($_SESSION['email'])) {
      $this->handler->setError("Usuário já logado!");
      header("Location: /");
      exit();
    }

    $user = $this->getUser($email);

    if (!$user) {
      $this->handler->setError("Usuário e/ou senha incorretos.");
      header("Location: /login");
      exit();
    }

    var_dump($user, $password);

    if (!password_verify($password, $user[0]['password'])) {
      $this->handler->setError("Usuário e/ou senha incorretos2.");
      header("Location: /login");
      exit();
    }
    
    $_SESSION['id']    = $user[0]['id'];
    $_SESSION['name']  = $user[0]['name'];
    $_SESSION['email'] = $email;

    $this->handler->setSuccess("Login efetuado!");
    header("Location: /");
    exit();
  }

  public function getUser(string $email) {
    $transaction = $this->db->getCon()->select("clients", "*", [
      "email" => $email
    ]);

    if (empty($transaction)) {
      return false;
    }

    return $transaction;
  }

  public function getUserById(int $id) {
    $transaction = $this->db->getCon()->select("clients", "*", [
      "id" => $id
    ]);

    if (empty($transaction)) {
      return false;
    }

    return $transaction[0];
  }

  public function userLogout() {
    if(!isset($_SESSION['email'])) {
      header("Location: /");
      exit();
    }

    session_unset();

    $this->handler->setSuccess("Logout efetuado com sucesso!");
    header("Location: /");
    exit();
  }

  public function getUserCart() {
    
  }
}