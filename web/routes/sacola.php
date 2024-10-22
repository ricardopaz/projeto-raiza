<?php


use \Klein\Klein;
use Respect\Validation\Validator as v;

require_once dirname(__DIR__) . "/app/database.php";
require_once dirname(__DIR__) . "/app/errorHandler.php";
require_once dirname(__DIR__) . "/app/users.php";
require_once dirname(__DIR__) . "/app/cart.php";

return function (Klein $klein, $twig) {
   $cartWorker = new Cart();
   $klein->respond("GET", "/sacola", function () use ($twig, $cartWorker) {
      // Getting total from cart
      $cart = $cartWorker->getUserCart();
      $total = 0;
      $totalItems = 0;

      foreach($cart as $cartItem) {
         $total = $cartItem['total'] + $total;
         $totalItems = $cartItem['quantity'] + $totalItems;
      }
      
      echo $twig->render("sacola.twig", [
         "cartItems" => $cart,
         "total" => $total,
         "totalItems" => $totalItems
      ]);
   });

   $klein->respond("GET", "/carrinho", function () use ($twig, $cartWorker) {
      $cart = $cartWorker->getUserCart();
      $total = 0;
      $totalItems = 0;

      foreach($cart as $cartItem) {
         $total = $cartItem['total'] + $total;
         $totalItems = $cartItem['quantity'] + $totalItems;
      }
      
      echo $twig->render("carrinho.twig", [
         "cartItems" => $cart,
         "total"     => $total,
         "totalItems" => $totalItems
      ]);
   });

   $klein->respond("POST", "/carrinho/wipe", function () use ($cartWorker) {
      $cartWorker->wipeCart();
   });
};
