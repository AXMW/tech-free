import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../styles/LoginECadastro.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const FuncLogin = (e) => {
        e.preventDefault();
        if(email == "nome@email.com" && senha == "12345678"){
            e.preventDefault();
            navigate('/Principal');
            alert('bem vindo');
        } else {
            alert('Senha e/ou usuário incorreto');
        }
        
    };

    return(
        <div>
            <Header />
            <section id="contact" class="main-bg section">
                <div class="main-content intro-content">
                    <div class="intro-text-content">
                        <div class="contact-form">
                            <form onSubmit={FuncLogin}>
                                <fieldset class="form-grid">
                                    <h2>Entrar</h2>
                                    <legend></legend>
                                    <div class="form-group-l">
                                        <label for="first-name">Email</label>
                                        <input onChange={(e) => setEmail(e.target.value)} type="email" name="first-name" id="first-name" placeholder="Insira seu Email" required/>
                                    </div>
                                    <div class="form-group-l">
                                        <label for="last-name">Senha</label>
                                        <input onChange={(e) => setSenha(e.target.value)} type="password" name="last-name" id="last-name" placeholder="Insira sua senha" required/>
                                    </div>

                                    <div class="form-group-l space-from-top-label">
                                        <p>Esqueceu a senha? <Link to='/Recuperacao'>Recuperar senha</Link></p>
                                        <p class="reduce-space-little">Ainda não possui uma conta? <Link to='/CadastroEmpresa'>Empresa</Link> 
                                            | <Link to='/CadastroFreelancer'>Pessoa</Link></p>                            
                                    </div>
                                    
                                    <div class="form-group-l">
                                        <button type="submit">Entrar</button>
                                    </div>
                                </fieldset>
                            </form>
                            
                        </div>
                    
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};
export default Login;