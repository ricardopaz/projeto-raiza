<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fieldset Entre a Borda</title>
    <style>
    fieldset {
        border: 2px solid #007bff;
        /* Borda interna do fieldset */
        border-radius: 8px;
        /* Bordas arredondadas para o fieldset */
        padding: 10px;
        background-color: white;
        /* Cor de fundo do fieldset */
    }

    legend {
        font-weight: bold;
        color: #007bff;
        /* Cor do texto da legenda */
    }
    </style>
</head>

<body>

    <div class="container">
        <form action="">
            <fieldset>
                <legend>Informações Pessoais</legend>

                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome"><br><br>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email"><br><br>
            </fieldset>
        </form>
    </div>



    <div class="box-location-icon">
        <img src="../../../website-sena-make-up/src/carrinho/assets/img/icons8-vilta-frontal-da-bolsa-50 (1) 1.png"
            alt="...">
    </div>
    <hr class="first-hr" style="background: #7FD8E7;">
    <div class="box-location-icon icon">
        <img src="../../../website-sena-make-up/src/carrinho/assets/img/icons8-home-50 1.png" alt="...">
    </div>
    <hr>
    <div class="box-location-icon">
        <img src="../../../website-sena-make-up/src/carrinho/assets/img/icons8-debit-card-50 1.png" alt="...">
    </div>
    <hr>
    <div class="box-location-icon">
        <img src="../../../website-sena-make-up/src/carrinho/assets/img/icons8-ok-50 1.png" alt="...">
    </div>

</body>

</html>