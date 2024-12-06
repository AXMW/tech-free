import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../styles/LoginECadastro.css';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const RecuperacaoDeSenha = () => {

    const [NovaSenha1, setNovaSenha1] = useState('');
    const [NovaSenha2, setNovaSenha2] = useState('');
    const navigate = useNavigate();
    const trocarDeSenha = (e) => {
        e.preventDefault();
        if(NovaSenha1 == NovaSenha2 && NovaSenha1 != "" && NovaSenha2 != ""){
            alert('Senha alterada com sucesso');
            navigate('/Login');
        } else {
            alert('As senhas devem ser iguais');
            alert(NovaSenha1 + " " + NovaSenha2);
        }
        
    }


    return(
        <div>
            <Header />
            <section id="contact" class="main-bg section">
                <div class="main-content intro-content">
                    <div class="intro-text-content">
                        <div class="contact-form">
                            <form onSubmit={trocarDeSenha}>
                                <fieldset class="form-grid">
                                    <h2>Recuperação de senha</h2>
                                    <legend></legend>
                                    <div class="form-group-l">
                                        <label for="senha1">Insira a nova senha</label>
                                        <input type="password" onChange={(e) => setNovaSenha1(e.target.value)} name="senha1" id="senha1" placeholder="Insira a nova senha" required/>
                                    </div>
                                    <div class="form-group-l">
                                        <label for="senha2">Repita a nova senha</label>
                                        <input onChange={(e) => setNovaSenha2(e.target.value)} type="password" name="senha2" id="senha2" placeholder="Insira a nova senha" required/>
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

export default RecuperacaoDeSenha;