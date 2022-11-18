// Bibliotecas
// Apontamento para o arquivo de desenvolvimento que vamos testar

const volume = require(".../.../src/volume");

// Funções de teste de unidade

//testes realizados sem entrada dos dados por parametro
test("Volume do cubo lado 5",()=>{
     //1-Configura
    //1.1 Dados de entrada
    const lad = 5;

    //1.2 Resultado Esperado
    const resultadoEsperado = 125;

    //2-Executa
    const resultadoAtual = calculadora.calcularVolumeCubo(lad);

    //3-Valida
    expect(resultadoAtual).tobe(resultadoEsperado);
})

test("Volume de uma esfera com raio 14",()=>{
     //1-Configura
    //1.1 Dados de entrada
    const raio = 14;

    //1.2 Resultado Esperado
    const resultadoEsperado = 11494.04;

    //2-Executa
    const resultadoAtual = calculadora.calcularVolumeEsfera(raio);

    //3-Valida
    expect(resultadoAtual).tobe(resultadoEsperado);

})

//testes realizados com entrada de dados por parametro

//Usando massa de dados do tipo lista


