import FilmesService from '../Services/Filmes.js';
import ServiceFilme from  '../Services/Filmes.js'

const service = new ServiceFilme()

// CREATE
export const CriarFilmes = (req, res) => {

try {
  
    const {
    titulo,
    classificacao,
    descricao,
    lançamento 
 } = req.body;


 const novoFilme = FilmesService.Criar(
    titulo,
    classificacao,
    descricao,
    lançamento
 );

 res.status(201).send(novoFilme);

} catch (erro) {

    res.status(400).send ({
    mensagem: Error.message
     });
    }

};

// READ - listar todos
export const ListarFilmes = (req, res) => {

    try {
   const Lista = FilmesService.Listar();
       res.send(Lista);
     
    } catch (erro) {
          
    res.status(400).send({
    
    mensagem:Error.message
    });
    }
};

// READ - buscar por ID
export const buscarFilmesPorId = (req , res ) => {

    try {

    const id = Number(req.params.id);
    const item = FilmesService.buscarFilmesPorId(id);

    res.send(item);

} catch (erro) {

    res.status(404).send({
     mensagem:Error.message
     });
    }
};

// UPDATE
export const AtualizarFilmes = (req, res) => {

    try {
 const id = Number(req.params.id);

 const {
     titulo,
     classificacao,
     descricao,
     lançamento
  } = req.body;

  const item = FilmesService.Atualizar(
 titulo,
    classificacao,
    descricao,
    lançamento
 );

   res.send(item);

 } catch (erro) {

        res.status(404).send({
            mensagem: erro.message
        });
    }
};

// DELETE

export const DeletarFilmes = (req, res) => {
  
     try {

        const id = Number(req.params.id);

        const resultado = disneyService.deletar(id);

        res.send(resultado);

    } catch (erro) {

        res.status(404).send({
            mensagem: erro.message
        });
    }
};














    



































