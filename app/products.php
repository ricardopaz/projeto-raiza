<?php

require_once "database.php";
require_once "errorHandler.php";

class Products {
  private $db;
  public $handler;

  public function __construct() {
    $this->db       = new DatabaseController();
    $this->handler  = new ErrorHandler(); 
  }
  
  public function getProduct(int $product_id) {
    // Gets a single product by its ID
    $transaction = $this->db->getCon()->select("products", "*", [
      "id" => $product_id
    ]);

    if (empty($transaction)) {
      return false;
    }

    return $transaction[0];
  }

  public function getProducts() {
    // Returns all the products
    $transaction = $this->db->getCon()->select("products", "*");
    
    if (empty($transaction)) {
      return false;
    }

    return $transaction;
  }
}