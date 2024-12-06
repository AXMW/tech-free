import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../styles/Vaga.css';

const Vaga = () => {
    return(
        <div>
            <Header />
            <section class="main-bg">
            <div class="main-content  div-section-zoom vaga-main-content">
                <div class="vaga-content">
                    <h3 class="titulo-vaga">Projeto de desenvolvimento Web backend</h3>
                    <p>Empresa: TechSolutions</p>
                    <p><i class="fa fa-briefcase"></i> Cargo: Pleno</p>
                    <p>Valor: a combinar</p>
                    <p>Tempo estimado do projeto: 3 meses</p>
                    <p><i class="fa fa-code"></i> Tecnologias: Ruby, Ruby on rails</p>
                </div>
                <button class="inscrever">Inscrever-se</button>
            </div>
            </section>

            <section id="intro" class="white-bg-two  descricao-vaga">
                    <div class="main-content  div-section-zoom vaga-desc">
                            <h2>Descrição:</h2>
                            <div class="grid-modified">
                                <p class="descricao-img-two fill-in vaga-desc">
                                    Estamos em busca de um desenvolvedor pleno, com pelo menos 2 anos de experiência, para se juntar à nossa equipe! Se você tem experiência backend com ruby on rails seu lugar é aqui!
                                    <br/><br/> Atividades: <br/>
                                    -Desenvolver e manter o ecossistema de busca e descoberta de conteúdo, além de outras soluções do time de Data Solutions, como ferramentas de moderação e gestão de domínios de dados relevantes para o negócio.
                                    <br/>-Colaborar com squads de diferentes áreas para integrar soluções de dados em toda a empresa.
                                    <br/>-Criar softwares, ferramentas e automatizar processos para otimizar o fluxo de trabalho da equipe.
                                    <br/>-Manipular, estruturar e tornar acessíveis grandes volumes de dados, apoiando a exploração de dados e o desenvolvimento de modelos de Machine Learning.
                                    <br/>-Projetar e construir pipelines de dados robustos, gerenciando fluxos completos de dados, desde a extração até a documentação e publicação em produção nos produtos da TechSolutions.

                                </p>
                            </div>

                            <h2>Requisitos Técnicos:</h2>
                            <div class="grid-modified">
                                <p class="descricao-img-two fill-in vaga-desc">
                                    -Experiência em Ruby on Rails: Mínimo de 2-4 anos desenvolvendo aplicações com o framework.
                                    <br/>-Banco de Dados: Conhecimento em PostgreSQL ou MySQL, incluindo modelagem e otimização de consultas.
                                    <br/>-APIs RESTful: Experiência em design e desenvolvimento de APIs.
                                    <br/>-Controle de Versão: Familiaridade com Git e práticas de versionamento como Git Flow.
                                    <br/>-Testes Automatizados: Conhecimento em frameworks como RSpec ou Minitest para garantir a qualidade do código.
                                    <br/>-Desempenho e Escalabilidade: Experiência em otimização de aplicações para lidar com alto tráfego.
                                    <br/>-Containerização e Deploy: Experiência com Docker e plataformas como AWS, Heroku ou Kubernetes.
                                    <br/>-Conhecimento em Frontend (Desejável): Noções básicas de HTML, CSS e JavaScript para integração.
                                </p>
                            </div>

                            <h2>Requisitos Gerais:</h2>
                            <div class="grid-modified">
                                <p class="descricao-img-two fill-in vaga-desc">
                                    -Formação Acadêmica: Graduação em Ciência da Computação, Engenharia de Software ou áreas relacionadas (ou experiência equivalente).
                                    <br/>-Habilidades Analíticas: Capacidade de solucionar problemas complexos com soluções simples e eficientes.
                                    <br/>-Trabalho em Equipe: Experiência em metodologias ágeis como Scrum ou Kanban.
                                    <br/>-Comunicação: Habilidade para documentar e apresentar soluções de maneira clara.
                                    <br/>-Inglês: Leitura e escrita para lidar com documentação técnica; fluência conversacional é um diferencial.
                                </p>
                            </div>

                            <h2>Diferenciais:</h2>
                            <div class="grid-modified">
                                <p class="descricao-img-two fill-in vaga-desc">
                                    -Experiência com GraphQL.
                                    <br/>-Conhecimento em microsserviços e arquitetura orientada a eventos.
                                    <br/>-Familiaridade com ferramentas de monitoramento como New Relic ou Sentry.
                                    <br/>-Experiência com autenticação e autorização (OAuth, Devise, etc.).
                                    <br/>-Contribuições para projetos open-source ou participação em comunidades Ruby on Rails.
                                </p>
                            </div>

                            <h2>Empresa:</h2>
                            <div class="grid-modified">
                                <p class="descricao-img-two fill-in vaga-desc">
                                    A TechSolutions é uma empresa inovadora especializada em tecnologia da informação, oferecendo soluções personalizadas para empresas de diversos setores. Com foco em desenvolvimento de software, consultoria tecnológica e infraestrutura digital, a TechSolutions se destaca pelo compromisso com a excelência, inovação e suporte técnico de alta qualidade.
                                </p>
                            </div>

                    </div>

                    <fieldset class="form-grid-v recomendacao-vagas">
                        <p>Vagas similares:</p>
                        <div class="job-group">
                            <h4>Desenvolvedor Full Stack</h4>
                            <p><strong>Empresa:</strong> Workana</p>
                            <p><strong><i class="fa fa-code"></i> Tecnologias:</strong> Angular</p>
                            <p><strong>Valor:</strong> R$ 4.000,00 - R$ 5.000,00</p>
                            <div class="form-group recomenda">
                                <button type="submit">Ver mais</button>
                            </div>  
                        </div>
                        <div class="job-group">
                            <h4>Desenvolvedor Mobile</h4>
                            <p><strong>Empresa:</strong> BairesDev</p>
                            <p><strong><i class="fa fa-code"></i> Tecnologias:</strong> Swift</p>
                            <p><strong>Valor:</strong> R$ 3.000,00 - R$ 4.000,00</p>
                            <div class="form-group recomenda">
                                <button type="submit">Ver mais</button>
                            </div>  
                        </div>
                        <div class="job-group">
                            <h4>Desenvolvedor Java</h4>
                            <p><strong>Empresa:</strong> Codgo.x</p>
                            <p><strong><i class="fa fa-code"></i> Tecnologias:</strong> Java, Spring</p>
                            <p><strong>Valor:</strong> R$ 5.000,00 - R$ 6.500,00</p>
                            <div class="form-group recomenda">
                                <button type="submit">Ver mais</button>
                            </div>  
                        </div>
                        <div class="job-group">
                            <h4>Desenvolvedor Embarcados</h4>
                            <p><strong>Empresa:</strong> Brastemp</p>
                            <p><strong><i class="fa fa-code"></i> Tecnologias:</strong> C, C++</p>
                            <p><strong>Valor:</strong> R$ 4.000,00 - R$ 5.000,00</p>
                            <div class="form-group recomenda">
                                <button type="submit">Ver mais</button>
                            </div>  
                        </div>
                        <div class="job-group">
                            <h4>Desenvolvedor Python</h4>
                            <p><strong>Empresa:</strong> Hurb</p>
                            <p><strong><i class="fa fa-code"></i> Tecnologias:</strong> Python, Django</p>
                            <p><strong>Valor:</strong> R$ 5.000,00 - R$ 6.000,00</p>
                            <div class="form-group recomenda">
                                <button type="submit">Ver mais</button>
                            </div>  
                        </div>
                        
                    </fieldset>
                    
            </section>
            <Footer />
        </div>
    );
}

export default Vaga;