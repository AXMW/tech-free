import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../styles/Busca.css';
import { Link } from 'react-router-dom';


const Busca = () => {

    return(
        <div>
            <Header />
            <section id="contact" class="main-bg section">
            <div class="main-content intro-content div-section-zoom">
                <div class="intro-text-content">
                    <div class="contact-form">
                        <h2 class="space-from-top-h2">Busque Vagas</h2>
                        <fieldset class="form-grid-c">
                            <div class="job-group">
                                <h4>Desenvolvedor Full Stack - Remoto</h4>
                                <p><strong>Empresa:</strong> Workana</p>
                                <p><strong><i class="fa fa-code"></i> Tecnologias:</strong> MySQL, APIs, React.js, Node.js</p>
                                
                                <p><strong>Salário:</strong> R$ 4.000,00 - R$ 5.000,00</p>
                                
                                <div class="form-group">
                                    <Link to='/Vaga'><button type="submit">Ver mais</button></Link>
                                </div>  
                            </div>

                            <div class="job-group">
                                <h4>Desenvolvedor Front-end - Turing</h4>
                                <p><strong>Empresa:</strong> Turing (EUA)</p>
                                <p><strong><i class="fa fa-code"></i> Tecnologias:</strong> React.js, Vue.js, Angular</p>
                                
                                <p><strong>Salário:</strong> USD $3.000 - $10.000</p>
                                
                                <div class="form-group">
                                    <Link to='/Vaga'><button type="submit">Ver mais</button></Link>
                                </div>  
                            </div>

                            <div class="job-group">
                                <h4>Desenvolvedor Jr. – Programa Devs do Agi</h4>
                                <p><strong>Empresa:</strong> Agibank</p>
                                <p><strong><i class="fa fa-code"></i> Tecnologias:</strong> Java, Python</p>
                                
                                <p><strong>Salário:</strong> R$ 3.500 - R$ 4.500</p>
                                
                                <div class="form-group">
                                    <Link to='/Vaga'><button type="submit">Ver mais</button></Link>
                                </div>  
                            </div>

                            <div class="job-group">
                                    <h4>Desenvolvedor Front-End Pleno</h4>
                                    <p><strong>Empresa:</strong> Talent Group</p>
                                    <p><strong><i class="fa fa-code"></i> Tecnologias:</strong> Angular, HTML, CSS e JavaScript</p>
                                    
                                    
                                    <p><strong>Salário:</strong> R$ 6.500 - R$ 8.000</p>
                                    
                                    <div class="form-group">
                                        <Link to='/Vaga'><button type="submit">Ver mais</button></Link>
                                    </div>  
                                </div>
                                
                                <div class="job-group">
                                    <h4>Desenvolvedor Linux Pleno</h4>
                                    <p><strong>Empresa:</strong> DataBot Software Intelligence</p>
                                    <p><strong><i class="fa fa-code"></i> Tecnologias:</strong> Linux</p>
                                    
                                    
                                    <p><strong>Salário:</strong> R$ 7.000 - R$ 9.000</p>
                                    
                                    <div class="form-group">
                                        <Link to='/Vaga'><button type="submit">Ver mais</button></Link>
                                    </div> 
                                </div>
                                <div class="job-group">
                                    <h4>Desenvolvedor Mobile – Flutter</h4>
                                    <p><strong>Empresa:</strong> TecSoft Solutions</p>
                                    <p><strong><i class="fa fa-code"></i> Tecnologias:</strong> Flutter</p>
                                    <p><strong>Salário:</strong> $ 22.500 - R$ 30.000</p>
                                    
                                    <div class="form-group">
                                    <Link to='/Vaga'><button type="submit">Ver mais</button></Link>
                                    </div> 
                                </div>
                        </fieldset>
                        </div>
                        <div class="form-group">
                            <button type="submit">Carregar mais vagas</button>
                        </div>  
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Busca;