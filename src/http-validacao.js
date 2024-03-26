import chalk from "chalk";

async function checaStatus(listaURLs){
   const arrStatus= await Promise.all(
       listaURLs.map(async(url)=>{
         try{
         const response = await fetch (url);
            return response.status;
         }catch(erro){
            return manejaErros(erro);
         }
   })
   )
   return arrStatus;
 }
 
 
 
 function extraiLinks(arrLinks){
        return arrLinks.map((objectLinks)=>Object.values(objectLinks).join());
 }
 

 function manejaErros(erro){
   //console.log(chalk.red("algo de errado"))
   if(erro.cause.code==="ENOTFOUND"){
      return "link não encontrado"
   }else{
      return "ocorreu um erro"
   }
 }
 
 //criar uma função listaValidada
export default async function listaValidada(listaDeLinks){
   //return extraiLinks(listaDeLinks)
   const links = extraiLinks(listaDeLinks);
   const status= await checaStatus(links);
// console.log(status);
   return listaDeLinks.map((objeto,indece)=>({
      ...objeto,
      status:status[indece]
   }));
}