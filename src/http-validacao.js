 function extraiLinks(arrLinks){
        return arrLinks.map((objectLinks)=>Object.values(objectLinks).join());
 }
 
 
 //criar uma função listaValidada
 export default function listaValidada(listaDeLinks){
    return extraiLinks(listaDeLinks)
 }