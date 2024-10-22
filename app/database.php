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
        "host" => "localhost",
        "database" => "senadb",
        "username" => "root",
        "password" => ""
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
