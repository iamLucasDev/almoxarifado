export async function DadosEstoque() {
    try {
        const resposta = await fetch("http://localhost:8080/deposito");

        if (!resposta.ok) {
            throw new Error("Erro ao buscar depósitos");
        }

        return await resposta.json();

    } catch (erro) {
        console.error("Ocorreu um erro:", erro.message);
        throw erro;
    }
}