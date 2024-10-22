<?php

require_once dirname(__DIR__) . "/vendor/autoload.php";
use Medoo\Medoo;

class DatabaseController {
  public $con;
  public $status;
  public function __construct() {
    // Creating connection
    try {
      $this->con = new Medoo([
        "type" => "mysql",
        "host" => "sp6xl8zoyvbumaa2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        "database" => "r9arzv0cve5cslwu",
        "username" => "saqwjr0v0u275yoy",
        "password" => "rvjn1ovkaw21utoo"
      ]);

      $this->status = "Success";
    } catch (Exception $e) {
      echo "Database Connection failed: " . $e->getMessage();
    }
  }

  public function getCon() {
    return $this->con;
  }

  public function getStatus() {
    return $this->status;
  }
}
