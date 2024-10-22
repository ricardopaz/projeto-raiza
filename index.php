<?php
session_start();

require_once "vendor/autoload.php";
require_once "app/products.php";

use Klein\Klein;
use Respect\Validation\Validator as v;

$klein = new Klein();

$loader = new \Twig\Loader\FilesystemLoader("views");
$twig   = new \Twig\Environment($loader, [
    "debug" => true
]);
$twig->addExtension(new \Twig\Extension\DebugExtension());

// Routers
$routeFiles = glob(__DIR__ . '/routes/*.php');

foreach ($routeFiles as $routeFile) {
    $routeHandler = require $routeFile;
    $routeHandler($klein, $twig);
}

// Index
$klein->respond("GET", "/", function () use ($twig) {
    // Getting all the products
    $products = new Products();

    echo $twig->render("home.twig", [
        "products" => $products->getProducts()
    ]);
});

$klein->dispatch();

