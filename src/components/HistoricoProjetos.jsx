import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../styles/HistoricoProjetos.css';
import avaliacao from '../img/avaliacao.png';
import tempoInicio from '../img/tempo-inicio.png';
import mensagem from '../img/mensagem.png'
import tempoIcon from '../img/tempo-icon.png';


const HistoricoProjetos = () => {
    return(
        <div>
            <Header />
            <section id="contact" class="main-bg section">
                <div class="main-content intro-content-h div-section-zoom">
                    <div class="contact-form-h">
                        <h2 class="left-align-my-text fill-in">Histórico de Projetos</h2>
                        <div class="historico-text-content left-align-my-text blue-bg">
                            <div class="padding-space">
                                <h6>Auxiliar de Logística- Cajamar / SP</h6>
                                <div class="space-from-top-div">
                                    <div>ExilorLogistica</div>
                                    <div>Auxiliar</div>
                                    <div>São Paulo - SP</div>
                                </div>
                            

                                <div class="form-group-two left-align-my-text">
                                    <button type="submit">Visualizar detalhes do projeto</button>
                                </div>
                            </div>
                            

                            <div class="area-infos">
                                <div class="area-infos-items">
                                    <div class="gallery-img-three">

                                        <div class="gallery-horizontal-space"><img src={avaliacao}/>
                                            <b class="descricao-img-three">5/5</b>
                                        </div>

                                        <div class="gallery-horizontal-space"><img src={tempoInicio}/>
                                            <b class="descricao-img-three">Publicado em 01/01/2025</b>
                                        </div>

                                        <div class="gallery-horizontal-space">
                                            <img src={tempoIcon}/>
                                            <b class="descricao-img-three">Expirou em 28/02/2025</b>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                            <div class="padding-space">
                                <div class="gallery-img-four">
                                    <div class="gallery-horizontal-space-two"><img src={mensagem}/>
                                        <b class="descricao-img-four">Últimos históricos</b>
                                    </div>
                                </div>
                                
                                <p class="descricao-img-five">Mensagem do recrutador:<br/><br/>

                                    Olá Kaique Machado Castro! 
                                
                                Sua candidatura no processo seletivo para a Estagiário de TI está confirmada! Buscamos trazer transparência e clareza sobre o andamento dos nossos processos seletivos, por isso em breve enviaremos uma resposta sobre a sua candidatura, seja ela positiva ou negativa. 
                                
                                Combinado?  
                                
                                Um abraço e boa sorte!  <br/><br/></p>

                            </div>

                        </div>
                        <div class="historico-text-content left-align-my-text blue-bg">
                            <div class="padding-space">
                                <h6>Auxiliar de Logística- Cajamar / SP</h6>
                                <div class="space-from-top-div">
                                    <div>ExilorLogistica</div>
                                    <div>Auxiliar</div>
                                    <div>São Paulo - SP</div>
                                </div>
                            

                                <div class="form-group-two left-align-my-text">
                                    <button type="submit">Visualizar detalhes do projeto</button>
                                </div>
                            </div>
                            

                            <div class="area-infos">
                                <div class="area-infos-items">
                                    <div class="gallery-img-three">

                                        <div class="gallery-horizontal-space"><img src={avaliacao}/>
                                            <b class="descricao-img-three">5/5</b>
                                        </div>

                                        <div class="gallery-horizontal-space"><img src={tempoInicio}/>
                                            <b class="descricao-img-three">Publicado em 01/01/2025</b>
                                        </div>

                                        <div class="gallery-horizontal-space">
                                            <img src={tempoIcon}/>
                                            <b class="descricao-img-three">Expirou em 28/02/2025</b>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                            <div class="padding-space">
                                <div class="gallery-img-four">
                                    <div class="gallery-horizontal-space-two"><img src={mensagem}/>
                                        <b class="descricao-img-four">Últimos históricos</b>
                                    </div>
                                </div>
                                
                                <p class="descricao-img-five">Mensagem do recrutador:<br/><br/>

                                    Olá Kaique Machado Castro! 
                                
                                Sua candidatura no processo seletivo para a Estagiário de TI está confirmada! Buscamos trazer transparência e clareza sobre o andamento dos nossos processos seletivos, por isso em breve enviaremos uma resposta sobre a sua candidatura, seja ela positiva ou negativa. 
                                
                                Combinado?  
                                
                                Um abraço e boa sorte!  <br/><br/></p>

                            </div>

                        </div>
                    </div>
                    
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default HistoricoProjetos;