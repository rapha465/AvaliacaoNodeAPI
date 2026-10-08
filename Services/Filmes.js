import modelFilmes from "../models/filmes.js";

const model = new modelFilmes()

const Filmes = [
   new Filmes(
       1,
       "Frozen",
       "Livre",
       "Filme sobre as irmãs Elsa e Anna",
       2013
   ),


   new Filmes(
    2,
    "Jogos Vorazes",
    "13 anos",
    "Jogos Vorazes conta a história de Katniss Everdeen, uma jovem do Distrito 12 que se voluntaria para participar de um torneio mortal televisionado no lugar de sua irmã, enfrentando 23 tributos em uma arena controlada pela Capital de Panem",
    2012
),

];

class FilmesService {

Criar(titulo, classificacao, descricao, lançamento) {

if (!titulo || !classificacao || !descricao || !lançamento)  {
   throw new Error ("Preencha todos os campos");
}

const novoFilme = new Filmes(

    Filmes.lengeth + 1,
    titulo,
    classificacao,
    descricao,
    lançamento
);

Filmes.push(novoFilme);

return novoFilme;

}

Listar() {

    return Filmes;

}
 buscarPorId(id) {

    const item = Filmes.find(
    Filmes => Filmes.id === id
);
    if (!item) {
    throw new Error ("Conteúdo não encontrado");
   }
 
   return item;
}

 Atualizar( id, titulo, classificacao, descricao, lançamento) {
    
    const item = Filmes.find(
    Filmes => Filmes.id === id
     );

     if (!item) {
        throw new Error("Contéudo não encontrado");
       }
 
       item.titulo = titulo;
       item.classificacao = classificacao;
       item.descricao = descricao;
       item.lançamento = lançamento;

       return item;
      }
 
      Deletar(id) {
      const idex = Filmes.findIndex(
      Filmes => Filmes.id === id 
        );

        if (index === -1) {
          throw new Error ("Conteúdo não encontrado");
         }
         Filmes.splice(index, 1);
          
         return {
           mensagem: "Conteúdo excluído com sucesso"
         };
       } 
      }
 
      export default FilmesService;