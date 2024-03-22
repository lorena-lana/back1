async function checaStatus(listaURLs){
   const arrStatus= await Promise.all(
       listaURLs.map(async(url)=>{
         const response = await fetch (url);
            return response.status;
   
   })
   )
   return arrStatus;
 }
 
 
 
 function extraiLinks(arrLinks){
        return arrLinks.map((objectLinks)=>Object.values(objectLinks).join());
 }
 
 
 //criar uma função listaValidada
export default async function listaValidada(listaDeLinks){
   //return extraiLinks(listaDeLinks)
   const links = extraiLinks(listaDeLinks);
   const status= await checaStatus(links);
// console.log(status);
   return status;
}