import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../styles/LoginECadastro.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { cnpjMask } from './cnpjMask.js';

const CadastroEmpresa = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha1, setSenha1] = useState('');
    const [nome, setNome] = useState('');
    const [senha2, setSenha2] = useState('');
    const [CNPJ, setCNPJ] = useState('');
    const FuncCadastro = (e) => {
        e.preventDefault();
        if(senha1 != senha2) {
            alert('As senhas devem ser iguais');
        } else {
            navigate('/CodigoDeConfirmacao');
        }
    };

    function handleChangeMask(event) {
        
        const { value } = event.target
        setCNPJ(cnpjMask(value))
 
    }

    return(
        <div>
            <Header />
            <section id="contact" class="main-bg section">
                <div class="main-content intro-content div-section-zoom">
                    <div class="contact-form-cadastro">
                        <form onSubmit={FuncCadastro}>
                            <fieldset class="form-grid-cadastro">
                                <h2 class="align-my-text fill-in">Cadastre-se</h2>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Insira seu Email" required/>
                                </div>
                                <div class="form-group">
                                    <label for="senha">Senha</label>
                                    <input onChange={(e) => setSenha1(e.target.value)} type="password" name="senha" id="senha" placeholder="Insira sua senha" required/>
                                </div>
                                <div class="form-group">
                                    <label for="nome-fantasia">Nome-fantasia</label>
                                    <input onChange={(e) => setNome(e.target.value)} type="text" name="nome-fantasia" id="nome-fantasia" placeholder="Insira o nome Fantasia" required/>
                                </div>
                                <div class="form-group">
                                    <label for="senha2">Repita a Senha</label>
                                    <input onChange={(e) => setSenha2(e.target.value)} type="password" name="senha2" id="senha2" placeholder="Repita sua senha" required/>
                                </div>
                                <div class="form-group">
                                    <label for="cnpj">CNPJ</label>
                                    <input onChange={handleChangeMask} value={CNPJ} type="text" name="cnpj" id="cnpj" placeholder="Insira o CNPJ" required/>
                                </div>
                                <div class="form-group align-my-text fill-in">
                                    <button type="submit">Criar Conta</button>
                                </div>
                                <div class="form-group align-my-text fill-in">
                                    <p class="reduce-space-little">Já possui uma conta? <Link to='/Login'>Entrar</Link></p>
                                </div>
                            </fieldset>
                        </form>
                        
                    </div>
                </div>
            </section>
            <Footer />
        </div>
        
    );
};
export default CadastroEmpresa;