import React from "react";
import imagem from '../img/javascript-not-optmized.svg';
//import '../styles/Home.css';

const Contact = () => {
    return(
        <section id="contact" class="main-bg section">
            <div class="main-content intro-content-h div-section-zoom">
                <div class="intro-text-content-h">
                    <h2>Trabalhe conosco</h2>
                    <p>Venha fazer parte do nosso time! Valorizamos talentos que compartilhem nossa paixão por inovação e compromisso com a excelência. Aqui, você encontrará um ambiente colaborativo, cheio de oportunidades para crescer e contribuir com projetos que fazem a diferença. Se você busca desafios e deseja construir o futuro conosco, envie seu currículo e mostre como pode agregar ao nosso time!</p>
                </div>
                <div class="intro-img-h super-space"><img src={imagem}/></div>
                <div class="contact-form-h div-section-zoom-less">
                    <fieldset class="form-grid-h">
                        <legend>Contate-nos</legend>
                        <div class="form-group-h">
                            <label for="first-name">Nome</label>
                            <input type="text" name="first-name" id="first-name" placeholder="Your first name"/>
                        </div>
                        <div class="form-group-h">
                            <label for="last-name">Sobrenome</label>
                            <input type="text" name="last-name" id="last-name" placeholder="Your last Name"/>
                        </div>
                        <div class="form-group-h">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Your e-mail"/>
                        </div>
                        <div class="form-group-h full-width">
                            <label for="message">Message</label>
                            <textarea name="message" id="message" rows="10" placeholder="Your message"></textarea>
                        </div>
                        <div class="form-group-h align-my-text">
                            <button type="submit">Send message</button>
                        </div>
                    </fieldset>
                </div>
                
            </div>
        </section>
    );
}
export default Contact;