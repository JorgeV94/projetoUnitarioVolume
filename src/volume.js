//Calcular volume do cubo
const calcularVolumeCubo = (lado1) => Math.pow(lado1,3);

//Calculando o volume de um prisma retangular
const calcularVolumePrismaRetangular = (compr,larg,alt) => compr*larg*alt;

//Calculando o volume de um cilindro
const calcularVolumeCilindro = (raio,alt) => Math.PI*Math.pow(raio*2)*alt;

//Calculando o volume de uma pirâmide regular
const calcularVolumePiramideRetangular = (base,alt) => (1/3)*(base*alt);

//Calculando o volume de um cone
const calcularVolumeCone = (raio,alt) => (1/3)*Math.PI*Math.pow(raio*2)*alt;

//Calculando o volume de uma esfera
const calcularVolumeEsfera = (raio) => (4/3)*Math.PI*Math.pow(raio,3);

module.exports = {
    calcularVolumeCubo,
    calcularVolumePrismaRetangular,
    calcularVolumeCilindro,
    calcularVolumePiramideRetangular,
    calcularVolumeCone,
    calcularVolumeEsfera
};