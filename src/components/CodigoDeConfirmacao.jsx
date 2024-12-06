import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../styles/LoginECadastro.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CodigoDeConfirmacao = () => {

    const [codigo, setCodigo] = useState('');
    const navigate = useNavigate();
    const EnvioDeCodigo = (e) => {
        e.preventDefault();
        if(codigo == "123456") {
            alert('Cadastro realizado com sucesso');
            navigate('/Login');
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
                                    <h2>Confirmação de Email</h2>
                                    <legend></legend>
                                    <div class="form-group">
                                        <label for="codigo-recuperacao">Codigo de Confirmação</label>
                                        <input onChange = {(e) => setCodigo(e.target.value)} value = {codigo} type="text" name="codigo-recuperacao" id="codigo-recuperacao" placeholder="Insira o código de confirmação" required/>
                                    </div>
                                    <div class="form-group">
                                        <p class="reduce-space-little">
                                            Para concluir o cadastro você deve inserir o código de confirmação enviado para seu email
                                        </p>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit">Avançar</button>
                                    </div>
                                    <div class="form-group">
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
export default CodigoDeConfirmacao;