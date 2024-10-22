<?php

require_once "database.php";
require_once "products.php";
require_once "users.php";
require_once "errorHandler.php";

class Cart {
  private $db;
  public $handler;
  public $user;
  public $products;

  public function __construct() {
    $this->db       = new DatabaseController();
    $this->handler  = new ErrorHandler();
    $this->user     = new Users();
    $this->products = new Products();
  }

  public function addItemToCart(int $product_id, int $quantity) {
    // Getting the product
    $product = $this->products->getProduct($product_id);

    if(!$product) {
      return false;
    }

    // Check if the product is already added to the cart
    $check = $this->db->getCon()->select("carts", [
      "product_id",
      "quantity",
      "total"
    ], [
      "product_id" => $product_id
    ]);

    if (empty($check)) {
      // Adding the product
      $transaction = $this->db->getCon()->insert("carts", [
        "product_id" => intval($product_id),
        "quantity"   => intval($quantity),
        "name"       => $product['name'],
        "total"      => $product['price'] * $quantity,
        "image"      => $product['image'],
        "category"   => $product['category']
      ]);

      if(!$transaction or empty($transaction)) {
        return false;
      } else {
        return true;
      }
    }

    // Product already added
    // Updatating
    $newQuantity = $check[0]['quantity'] + $quantity;

    $update = $this->db->getCon()->update("carts", [
      "quantity" => $newQuantity,
      "total"    => $newQuantity * $product['price']
    ], [
      "product_id" => $product_id
    ]);

    if (!$update or empty($update)) {
      return false;
    } else {
      return true;
    }

  }

  public function getUserCart() {
    return $this->db->getCon()->select("carts", "*");
  }

  public function removeFromCart(int $product_id, int $quantity) {
    $product = $this->products->getProduct($product_id);

    if (!$product) {
      return false;
    }

    $transaction = $this->db->getCon()->select("carts", [
      "product_id",
      "quantity",
      "total"
    ]);

    if(!$transaction || empty($transaction)) {
      return false;
    }

    if ($transaction[0]['quantity'] < $quantity) {
      // Removing the product
      $remove = $this->db->getCon()->delete("carts", [
        "product_id" => $product_id
      ]);

      return true;
    }

    $newQuantity = $transaction[0]['quantity'] - $quantity;
    $newTotal    = $newQuantity * $product['price'];

    $update = $this->db->getCon()->update("carts", [
      "quantity" => $newQuantity,
      "total"    => $newTotal
    ], [
      "product_id" => $product_id
    ]);
    
    return true;
  }

  public function removeItemFromCart(int $product_id) {
    if($this->db->getCon()->delete("carts", ["product_id" => $product_id])) {
      return true;
    } else {
      return false;
    }
  }

  public function wipeCart() {
    $this->db->getCon()->query("DELETE FROM carts");
  }

}