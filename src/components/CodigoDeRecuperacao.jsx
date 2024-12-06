import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../styles/LoginECadastro.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CodigoDeRecuperacao = () => {

    const [codigo, setCodigo] = useState('');
    const navigate = useNavigate();
    const EnvioDeCodigo = (e) => {
        e.preventDefault();
        if(codigo == "123456") {
            navigate('/RecuperacaoDeSenha');
        } else {
            alert('O código informado está incorreto');
        }
    }

    return(
        <div>
            <Header />
            <section id="contact" class="main-bg section">
                <div class="main-content intro-content">
                    <div class="intro-text-content">
                        <div class="contact-form">
                            <form onSubmit={EnvioDeCodigo}>
                                <fieldset class="form-grid">
                                    <h2>Recuperação de senha</h2>
                                    <legend></legend>
                                    <div class="form-group-l">
                                        <label for="codigo-recuperacao">Codigo de Recuperação</label>
                                        <input onChange = {(e) => setCodigo(e.target.value)} value = {codigo} type="text" name="codigo-recuperacao" id="codigo-recuperacao" placeholder="Insira o código de recuperação" required/>
                                    </div>
                                    <div class="form-group-l">
                                        <p class="reduce-space-little">
                                            Insira o código de recuperação enviado ao seu email.
                                        </p>
                                    </div>
                                    <div class="form-group-l">
                                        <button type="submit">Avançar</button>
                                    </div>
                                    <div class="form-group-l">
                                        <Link to='/Recuperacao' class='btn-voltar'>Voltar</Link>
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
export default CodigoDeRecuperacao;