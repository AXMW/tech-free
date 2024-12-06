import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../styles/LoginECadastro.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Recuperacao = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const envioDeEmail = (e) => {
        e.preventDefault();
        alert(`email enviado para: ${email}`);
        navigate('/CodigoDeRecuperacao');
    };


    return(
        <div>
            <Header />
            <section id="contact" class="main-bg section">
                <div class="main-content intro-content">
                    <div class="intro-text-content">
                        <div class="contact-form">
                            <form onSubmit={envioDeEmail}>
                                <fieldset class="form-grid">
                                    <h2>Recuperação de senha</h2>
                                    <legend></legend>
                                    <div class="form-group-l">
                                        <label for="email">Email</label>
                                        <input onChange = {(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Insira seu Email" required/>
                                    </div>
                                    <div class="form-group-l">
                                        <p class="reduce-space-little">
                                            Enviaremos um código de verificação a este e-mail se corresponder a uma conta da TechFree.
                                        </p>
                                    </div>
                                    <div class="form-group-l">
                                        <button type="submit">Avançar</button>
                                    </div>
                                    <div class="form-group-l">
                                        <Link to='/Login' class='btn-voltar'>Voltar</Link>
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
export default Recuperacao;