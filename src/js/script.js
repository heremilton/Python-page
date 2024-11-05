function runCode() {
    const code = document.getElementById("codeArea").value;
    let output = document.getElementById("output");

    if (code.toLowerCase().includes("print(")) {
        // Exemplo de interpretação simples
        output.innerText = `Saída:\nOlá, Mundo!`;
    } else {
        output.innerText = `Erro: Comando inválido. Tente usar "print('Olá, Mundo!')".`;
    }
}