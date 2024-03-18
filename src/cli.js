//comand line interface (cli)



import pegaArquivo from "./index.js";
//1)criar uma variável para recepcionar

const caminho = process.argv;
console.log(caminho);

pegaArquivo(caminho[2]);