<?php
use \Klein\Klein;
use Respect\Validation\Validator as v;

require_once dirname(__DIR__) . "/app/database.php";
require_once dirname(__DIR__) . "/app/errorHandler.php";
require_once dirname(__DIR__) . "/app/users.php";
require_once dirname(__DIR__) . "/app/cart.php";
require_once dirname(__DIR__) . "/app/products.php";

return function (Klein $klein, $twig) {
  $cartWorker = new Cart();
  $prodWorker = new Products();

  $klein->respond("POST", "/produtos/carrinho", function ($request, $response) use ($cartWorker) {
    $form_data = $request->paramsPost()->all();
    
    if($cartWorker->addItemToCart($form_data['product'], $form_data['quantity'])) {
      echo "ok";
    } else {
      echo "n";
    }
  });

  $klein->respond("GET", "/produto/[:id]", function ($request, $response) use ($twig, $prodWorker) {
    echo $twig->render("produto.twig", [
      "product" => $prodWorker->getProduct($request->id)
    ]);
  });

};
