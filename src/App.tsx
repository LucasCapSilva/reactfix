import React from 'react';
import './App.css';//
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './componentes/estaticos/navBar/NavBar';
import Footer from './componentes/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './componentes/temas/listaTema/ListaTema';
import ListaPostagem from './componentes/postagens/listaPostagem/ListaPostagem'
import CadastroTema from './componentes/temas/cadastroTema/CadastroTema';
import DeletoTema from './componentes/temas/deletaTema/DeletoTema';
import CadastroPostagem from './componentes/postagens/cadastroPostagem/CadastroPostagem'
import DeletoPostagem from './componentes/postagens/deletaPostagem/DeletoPostagem'
import { Provider } from 'react-redux'
import store from './store/Store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './paginas/home/home';


function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <NavBar />

        <div style={{ minHeight: '100vh' }}>

          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/login" element={<Login />} />

           

            <Route path="/cadastro" element={<CadastroUsuario />} />

            <Route path="/temas" element={<ListaTema />} />

            <Route path="/posts" element={<ListaPostagem />} />

            <Route path="/formularioPostagem" element={<CadastroPostagem />} />

            <Route path="/formularioPostagem/:id" element={<CadastroPostagem />} />

            <Route path="/formularioTema" element={<CadastroTema />} />

            <Route path="/formularioTema/:id" element={<CadastroTema />} />

            <Route path="/deletarPostagem/:id" element={<DeletoPostagem />} />

            <Route path="/deletarTema/:id" element={<DeletoTema />} />

          </Routes>

        </div>

        <Footer />
      </Router>
    </Provider>
  )
}

export default App;