<?php


use \Klein\Klein;
use Respect\Validation\Validator as v;

require_once dirname(__DIR__) . "/app/database.php";
require_once dirname(__DIR__) . "/app/errorHandler.php";
require_once dirname(__DIR__) . "/app/users.php";

return function (Klein $klein, $twig) {
    $handler = new ErrorHandler();
    $uWorker = new Users();
    $klein->respond("GET", "/cadastro", function () use ($twig) {
        echo $twig->render("cadastro.twig");
    });

    $klein->respond("GET", "/login", function () use ($twig) {
        echo $twig->render("login.twig");
    });

    $klein->respond("GET", "/logout", function () use ($uWorker) {
        $uWorker->userLogout();
    });

    $klein->respond("POST", "/cadastro/enviar", function ($request, $response) use ($twig, $handler, $uWorker) {
        // Getting the data
        $form_data = $request->paramsPost()->all();

        #var_dump($form_data['name']);

        // Parsing the data
        if (!v::alpha(' ')->validate($form_data['name'])) {
            $handler->setError("Nome de usuário inválido!");
            return $response->redirect("/cadastro");
        }
        
        if (!v::email()->validate($form_data['email'])) {
            $handler->setError("Endereço de e-mail inválido!");
            return $response->redirect("/cadastro");
        }

        if (!v::length(6, null)->validate($form_data['senha'])) {
            $handler->setError("Sua senha deve conter no mínimo 5 caractéres");
            return $response->redirect("/cadastro");
        } 

        if ($form_data['senha'] !== $form_data['confirmSenha']) {
            $handler->setError("Senhas digitadas não são iguais!");
            return $response->redirect("/cadastro");
        }

        $data = [
            "name"      => $form_data['name'],
            "password"  => $form_data['senha'],
            "email"     => $form_data['email'],
            "phone"     => $form_data['telefone']
        ];

        $uWorker->createUser($data);
    });  

    $klein->respond("POST", "/login/enviar", function ($request, $response) use ($handler, $uWorker) {
        $form_data = $request->paramsPost()->all();

        if(!v::email()->validate($form_data['email'])  || empty($form_data['senha'])) {
            $handler->setError("Verifique se os campos foram preenchidos corretamente.");
            $response->redirect("/login");
        }

        // Attempt to login
        $uWorker->userLogin($form_data['email'], $form_data['senha']);
    });
};
