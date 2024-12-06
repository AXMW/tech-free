import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import '../styles/Home.css';
import introImg from '../img/javascript-not-optmized.svg';
import ComoFunciona1 from '../img/ComoFunciona1.jpg';
import ComoFunciona2 from '../img/ComoFunciona2.png';
import ComoFunciona3 from '../img/ComoFunciona3.jpg';
import pfp1 from '../img/pfp1.png';
import pfp2 from '../img/pfp2.png';
import pfp3 from '../img/pfp3.png';
import pfp4 from '../img/pfp4.png';


const Home = () => {
    return(
        <div>
            <Header />

            <section class="main-bg section">
                <div class="main-content intro-content-h div-section-zoom-h">
                    <div class="intro-img-h reduce-space"><img src={introImg} /></div>
                    <div class="intro-text-content-h reduce-space">
                        <h2>Quem somos nós?</h2>
                        <p>A TechFree é plataforma que presta o serviço de conectar desenvolvedores âutonomos e as empresas que buscam essa mão de obra.
                            Toda essa gestão é feita dentro do nosso ambiente virtual, utilizando uma interface simples e prática que colabora para o engajamento das
                            partes e facilita toda aquela burocracia que se teria utilizando meios inconvêncionais.
                        </p>
                    </div>
                    
                </div>
            </section>

            <section id="intro" class="white-bg-two section">
                <div class="main-content top3-content div-section-zoom">
                        <h2 class="align-my-text">Como funciona?</h2>
                        <div class="grid-modified">

                            <div class="gallery-img-two align-my-text fill-in">
                                <img src={ComoFunciona1} />
                            </div>
                            <p class="descricao-img-two fill-in">Empresas ou contratantes dão o primeiro passo descrevendo detalhadamente o que precisam. É possível informar o tipo de serviço, os requisitos específicos, o prazo para entrega e o orçamento disponível. Quanto mais clara for a descrição, mais fácil será atrair freelancers com as habilidades certas para atender à demanda. Uma interface simples e intuitiva facilita essa etapa, conectando o projeto aos profissionais mais qualificados da plataforma, prontos para transformar ideias em realidade.</p>

            
            
                        </div>

                        <div class="grid-modified">
                            <div class="gallery-img-two align-my-text fill-in">
                                <img src={ComoFunciona2} />
                            </div>
                            <p class="descricao-img-two fill-in">Após a publicação do projeto, os freelancers da plataforma são notificados e podem analisar os detalhes do trabalho. Cada freelancer interessado envia uma proposta personalizada, destacando como pode atender às expectativas do contratante. Nessas propostas, você encontrará informações importantes, como o valor do serviço, o prazo estimado de entrega e uma explicação sobre a abordagem para executar o projeto. Esse processo permite comparar opções e escolher o profissional mais alinhado ao objetivo do trabalho, garantindo eficiência e qualidade.</p>
                        </div>

                        <div class="grid-modified">
                            <div class="gallery-img-two align-my-text fill-in">
                                <img src={ComoFunciona3} />
                            </div>
                            <p class="descricao-img-two fill-in">Com o freelancer escolhido, o trabalho é realizado conforme os termos acordados. Durante todo o processo, a plataforma oferece suporte para manter a comunicação e o acompanhamento do progresso do projeto. Quando o trabalho é finalizado e aprovado, o pagamento é processado de forma segura através do sistema integrado. Isso garante que o freelancer receba corretamente e que o contratante tenha a segurança de pagar apenas pelo que foi concluído, tornando a experiência confiável e transparente para ambas as partes.</p>
                        </div>

                </div>
            </section>

            <section id="top3" class="main-bg section">
                <div class="main-content grid-one-content div-section-zoom">
                    <h2 class="grid-main-heading">Por que utilizar a TechFree?</h2>
                    <p class="grid-description">As 3 virtudes</p>
                    <div class="grid">

                        <article>
                            <h3>Flexibilidade e Autonomia</h3>
                            <p>Com uma plataforma de freelancers, você tem o controle de sua rotina e projetos. Escolha quando, onde e com quem trabalhar, adaptando-se às suas necessidades e preferências, sem estar preso a horários rígidos ou contratos longos.</p>
                        </article>
                        
                        <article>
                            <h3>Diversidade de oportunidades</h3>
                            <p>Empresas encontram profissionais com habilidades específicas para cada projeto, enquanto freelancers acessam uma ampla gama de ofertas em diferentes áreas. Essa diversidade amplia as chances de sucesso para ambos os lados.</p>
                        </article>

                        <article>
                            <h3>Praticidade e Segurança</h3>
                            <p>A plataforma facilita todo o processo, desde a publicação de projetos até o pagamento seguro. Com avaliações e perfis detalhados, é mais fácil encontrar o parceiro ideal, reduzindo riscos e aumentando a confiança na contratação ou prestação de serviços.</p>
                        </article>
                    </div>
                </div>
            </section>

            <section id="gallery" class="white-bg-two section">
                <div class="main-content grid-one-content div-section-zoom">
                    <h2 class="grid-main-heading">Depoimentos</h2>
                    <p class="grid-description">A opinião daqueles que abraçaram nossa solução!</p>
                    <div class="grid">

                        <div class="gallery-img">
                            <img src={pfp1} />
                            <p class="descricao-img">"A experiência com a TechFree mudou minha vida!"<br/> - Pedro Lucas</p>
                        </div>
                        
                        <div class="gallery-img">
                            <img src={pfp2} />
                            <p class="descricao-img">"Meu portifólio foi rapidamente enriquecido!"<br/>- Max William</p>
                        </div>

                        <div class="gallery-img">
                            <img src={pfp3} />
                            <p class="descricao-img">"Graças a TechFree todos os meus feitos são atestados!"<br/>- Mikhael Kenji</p>
                        </div>

                        <div class="gallery-img">
                            <img src={pfp4} />
                            <p class="descricao-img">"A TechFree abriu as portas para o meu primero estágio!"<br/>- Kaique Machado</p>
                        </div>

                        <div class="gallery-img">
                            <img src={pfp2} />
                            <p class="descricao-img">"Meu portifólio foi rapidamente enriquecido!"<br/>- Max William</p>
                        </div>

                        <div class="gallery-img">
                            <img src={pfp3} />
                            <p class="descricao-img">"Graças a TechFree todos os meus feitos são atestados!"<br/>- Mikhael Kenji</p>
                        </div>

                    </div>
                </div>
            </section>


            <Contact />
            <Footer />
        </div>
    );
}
export default Home;