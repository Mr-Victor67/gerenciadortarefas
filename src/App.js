import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './componentes/Footer';

import Header from './componentes/Header';

import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import ListarTarefas from './paginas/ListarTarefas';
import ListarUmaTarefa from './paginas/ListarUmaTarefa';
import CadastrarTarefa from './paginas/CadastrarTarefa';
import CadastrarContato from './paginas/CadastrarContato';
import ListarContatos from './paginas/ListarContatos';
import ListarUmContato from './paginas/ListarUmContato';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
         
          <Route path='/sobre' element={<Sobre />}/>

          <Route path="/tarefas" element={<ListarTarefas />}/>
          <Route path="/tarefa/:id" element={<ListarUmaTarefa />}/>
          <Route path="/cadastrarTarefas" elemnet={<CadastrarTarefa />}/>
          
          <Route path="/contatos" element={<ListarContatos />}/>
          <Route path="/contato/:id" element={<ListarUmContato />}/>
          <Route path="/cadastrarContato" elemnet={<CadastrarContato />}/>
          </Routes>
      </main>
      <Footer />
      </BrowserRouter> 
  );
}

export default App;
