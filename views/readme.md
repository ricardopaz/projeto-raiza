_Requisitos/Funcionalidades_

Pagina Incial :
{

    - Usuario só consegue acessar a pagina de sacola caso ele tenha sido logado, se tentar acessar a sacola sem esta logado, vai ser redirecionado para a pagina de login.

    - Buscar imagem do banco de dados dos produtos cadastro e mostra no catalogo inicial, trazendo todas informações dele

    - Ao clicar num produto ele deve ser redirecionado para a pagina do produto, onde vai ser puxado o produto certo que ele clicou

}

2 Pagina de Login/Cadastro: {

    - Ao inserir dados usuario poderá realizar seu cadastro (caso não tenha) enviando dados para o bd.(aplicar requisitos basico de um crud)

    - Permitir que usuario realize login com email e senha, criando uma SESSION para armazenar no navagedor que ele está logado

}

3 Pagina do produto: {

    -Trazer o produto que o usuario clicou e contendo as informaçoes do produto


    - Ao clicar no botão de compra o usuario vai para pagina da sacola

}

4 Pagina da sacola: {

     - Se o usuario estiver logado e acessar sua sacola, deve mostra que a sacola está vazia, mas caso tenha apertado no botão de compra da na pagina do produto, deve mostra a sacola cheia com as informações da compra (Tem duas sections na pagina da sacola, uma é para caso a sacola esteja vazia e a outra caso clique no botão de comprar, tem um comentario explicando).


    -Ao clicar em finalizar compra o usuario é redirecionado para a pagina do carrinho que sera possivel ele termina a sua compra, informando endereço e realizando pagamento via pix

}
