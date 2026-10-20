import { useState } from 'react';
import './index.css';
import contatos from '../../mook/contatos';
import { Navigate, useNavigate } from 'react-router-dom';

function CadastrarContato() {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('')
    const [cidade, setCidade] = useState('')
    const [email, setEmail] = useState('')
    const [conteúdo, setConteúdo] = useState('')
    const [error, setError] = useState('')
    function cadastrarContato(e){
        e.preventDefault()

        if (!nome.trim()) {
            setError("campo nome não pode estar vazio!!!")
            return;
        }

        if (!telefone.trim()) {
            setError("campo telefone não pode estar vazio!!!")
            return;
        }

        if (!cidade.trim()) {
            setError("cidade não pode estar vazio!!!")
            return;
        }
        if (!email.trim()) {
            setError("campo email não pode estar vazio!!!")
            return;
        }
        if (!conteúdo.trim()) {
            setError("campo conteúdo não pode estar vazio!!!")
            return;
        }






     
        try{
        const addContato ={
            'id': contatos.length + 1,
            'nome':nome,
            'telefone':telefone,
            'cidade':cidade,
            'email':email,
            'conteúdo':conteúdo,
        }
        contatos.push (addContato);
        setNome("");
        setTelefone("");
        setCidade("");
        setEmail("");
        setConteúdo("");

        navigate(-1)
    }catch(error){
    console.log("Erro ao Cadastrar tarefa:" + error)
    }
    }

    return (
        <main>
            <header>
                <h1>Nova Contato</h1>
            </header>
            <section>
                <h2>Formulário para cadastro de contatos</h2>
                <p>Entre com todos os campos!!!</p>
                 {
                  error && (
                     <div className='error'>
                       <p className=''> </p>
                     </div>
                  )
                 }
                <div className='formulario'>
                    <form onSubmit={cadastrarContato}>
                        <label>Nome da Tarefa</label>
                        <input type="text" value={nome} onChange={e=>setTitulo(e.target.value)} />
                       
                        <label>Telefone</label>
                        <input type="text" value={telefone} onChange={e=>setResponsavel(e.target.value)} />
                        
                        <label>Cidade</label>
                        <input type="text" value={cidade} onChange={e=>setResponsavel(e.target.value)} />
                      
                        <label>Email</label>
                        <input type="text" value={email} onChange={e=>setResponsavel(e.target.value)} />

                        <label>Conteúdo</label>
                        <textarea value={conteúdo} onChange={e=>setDescricao(e.target.value)} ></textarea>
                        
                       
                        <button type='submit'>Salvar</button>
                    </form>
                </div>
            </section>
        </main>
    )
}
export default CadastrarContato;