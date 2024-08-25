<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerenciamento de Contas Bancárias</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        button {
            margin: 10px;
            padding: 10px;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <h1>Banco</h1>
    <button onclick="inserirConta()">Inserir Conta</button>
    <button onclick="transferir()">Transferir</button>
    <button onclick="exibirConta()">Exibir Conta</button>
    <button onclick="removerConta()">Remover Conta</button>
    <button onclick="debitar()">Debitar</button>

    <script>
        // Matriz de contas
        let contas = [];
        let numeroConta = 1;

        function inserirConta() {
            let nome = prompt("Digite o nome completo:");
            let telefone = prompt("Digite o telefone:");
            let dataNascimento = prompt("Digite a data de nascimento (DD/MM/AAAA):");

            // Verifica se os campos foram preenchidos
            if (!nome || !telefone || !dataNascimento) {
                alert("Todos os campos são obrigatórios.");
                return;
            }

            // Cria a nova conta
            contas.push({
                nome: nome,
                telefone: telefone,
                dataNascimento: dataNascimento,
                numeroConta: numeroConta,
                saldo: 1000
            });
            numeroConta++;
            alert("Conta criada com sucesso. Número da conta: " + (numeroConta - 1));
        }

        function transferir() {
            let contaOrigem = parseInt(prompt("Digite o número da conta de origem:"));
            let contaDestino = parseInt(prompt("Digite o número da conta de destino:"));
            let valor = parseFloat(prompt("Digite o valor da transferência:"));

            // Verifica se os valores são válidos
            if (isNaN(contaOrigem) || isNaN(contaDestino) || isNaN(valor) || valor <= 0) {
                alert("Valores inválidos.");
                return;
            }

            let contaOrigemObj = contas.find(c => c.numeroConta === contaOrigem);
            let contaDestinoObj = contas.find(c => c.numeroConta === contaDestino);

            // Verifica se as contas existem
            if (!contaOrigemObj || !contaDestinoObj) {
                alert("Uma ou ambas as contas não existem.");
                return;
            }

            // Verifica se há saldo suficiente
            if (contaOrigemObj.saldo < valor) {
                alert("Saldo insuficiente.");
                return;
            }

            // Realiza a transferência
            contaOrigemObj.saldo -= valor;
            contaDestinoObj.saldo += valor;
            alert("Transferência realizada com sucesso.");
        }

        function exibirConta() {
            let numero = parseInt(prompt("Digite o número da conta para exibir:"));

            // Verifica se a conta existe
            let conta = contas.find(c => c.numeroConta === numero);
            if (!conta) {
                alert("Conta não encontrada.");
                return;
            }

            // Exibe os dados da conta
            alert(`Número da Conta: ${conta.numeroConta}\nNome: ${conta.nome}\nTelefone: ${conta.telefone}\nData de Nascimento: ${conta.dataNascimento}\nSaldo: R$ ${conta.saldo.toFixed(2)}`);
        }

        function removerConta() {
            let numero = parseInt(prompt("Digite o número da conta a ser removida:"));

            // Verifica se a conta existe
            let index = contas.findIndex(c => c.numeroConta === numero);
            if (index === -1) {
                alert("Conta não encontrada.");
                return;
            }

            // Remove a conta
            contas.splice(index, 1);
            alert("Conta removida com sucesso.");
        }

        function debitar() {
            let numero = parseInt(prompt("Digite o número da conta para debitar:"));
            let valor = parseFloat(prompt("Digite o valor a ser debitado:"));

            // Verifica se os valores são válidos
            if (isNaN(numero) || isNaN(valor) || valor <= 0) {
                alert("Valores inválidos.");
                return;
            }

            // Encontra a conta
            let conta = contas.find(c => c.numeroConta === numero);
            if (!conta) {
                alert("Conta não encontrada.");
                return;
            }

            // Verifica se há saldo suficiente
            if (conta.saldo < valor) {
                alert("Saldo insuficiente.");
                return;
            }

            // Realiza o débito
            conta.saldo -= valor;
            alert("Débito realizado com sucesso.");
        }
    </script>
</body>
</html>
