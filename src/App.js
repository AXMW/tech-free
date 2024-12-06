import './App.css';
import './styles/Elements.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Recuperacao from './components/Recuperacao';
import CadastroEmpresa from './components/CadastroEmpresa';
import CadastroFreelancer from './components/CadastroFreelancer';
import CodigoDeRecuperacao from './components/CodigoDeRecuperacao';
import RecuperacaoDeSenha from './components/RecuperacaoDeSenha';
import CodigoDeConfirmacao from './components/CodigoDeConfirmacao';
import Contato from './components/Contato';
import Busca from './components/Busca';
import Vaga from './components/Vaga';
import HistoricoProjetos from './components/HistoricoProjetos';


function App() {
  return (
    <>
      {}
      <Router>
        <Routes>
          {}
          <Route 
            exact
            path='/'
            element={<Home />}
          />
          {}
          <Route 
            exact
            path='/HistoricoProjetos'
            element={<HistoricoProjetos />}
          />
          {}
          <Route 
            exact
            path='/Home'
            element={<Home />}
          />
          {}
          <Route 
            exact
            path='/Vaga'
            element={<Vaga />}
          />
          {}
          <Route 
            exact
            path='/Busca'
            element={<Busca />}
          />
          {}
          <Route 
            exact
            path='/Contato'
            element={<Contato />}
          />
          {}
          <Route 
            exact
            path='/CodigoDeConfirmacao'
            element={<CodigoDeConfirmacao />}
          />
          {}
          <Route 
            exact
            path='/RecuperacaoDeSenha'
            element={<RecuperacaoDeSenha />}
          />
          {}
          <Route 
            exact
            path='/CodigoDeRecuperacao'
            element={<CodigoDeRecuperacao />}
          />
          {}
          <Route 
            exact
            path='/Recuperacao'
            element={<Recuperacao />}
          />
          {}
          <Route 
            exact
            path='/CadastroFreelancer'
            element={<CadastroFreelancer />}
          />
          {}
          <Route 
            exact
            path='/CadastroEmpresa'
            element={<CadastroEmpresa />}
          />
          {}
          <Route 
            exact
            path='/Login'
            element={<Login />}
          />
          {}
          <Route 
            exact
            path='/Recuperacao'
            element={<Recuperacao />}
          />
          {}
          <Route 
            exact
            path='*'
            element={<Navigate to='/' />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
