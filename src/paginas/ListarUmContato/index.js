
import './index.css';
import { useParams } from 'react-router-dom';
import contatos from '../../mook/contatos';

function ListarUmContato(){
    const {id} = useParams();
    const contato = contatos.find((item) => String(item.id) === String(id));

    if (!contato){
        return <p> contato não encontrada.</p>;
    }

    const {nome, telefone, cidade, email, conteúdo} = contato;

       return( 
        
       <section>
           <header>
               <h1>Listar contato</h1>
           </header>
       <div>

        <h2>#{id} - {nome}</h2>
        <p>telefone: {telefone}</p>
        <p>{cidade}</p>
        <p>{email}</p>
        <p>{conteúdo}</p>
       </div>  
        
      </section>
        
    )
}

export default ListarUmContato;