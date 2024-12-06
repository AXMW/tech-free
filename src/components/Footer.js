import '../styles/Footer.css';

function Footer() {

    function openSupport() {
        if(document.getElementById("chat-form-container").style.display == "block"){
            document.getElementById("chat-form-container").style.display = "none";
        } else {
            document.getElementById("chat-form-container").style.display = "block";
        }
        
    }
    
    function closeSupport() {
        document.getElementById("chat-form-container").style.display = "none";
    }



    return(
        <div>
            <footer id="footer" class="white-bg footer">
                <p><a rel="nofollow" target="_blank" href="https://www.google.com/">Feito com <span class="heart">♥</span> por TechFree</a></p>
                <p>&copy;Copyright 2024 TechFree</p>
            </footer>
            <a class="back-to-top" href="#">⮞</a>

            <button class="open-btn" onClick={openSupport}><i class="fa fa-comment"></i></button>

            <div class="chat-popup" id="chat-form-container">
                <form action="#" class="form-container">
                    <div class="chat-window-head">
                        <h4><i class="fa fa-comment"></i> Suporte</h4>
                        <span class="close-btn" onClick={closeSupport}><i class="fa fa-times"></i></span>

                    </div>

                    <div class="msg-container">
                        <div class="msg">
                            <p>Olá, como posso te ajudar?</p>
                            <span>9:30</span>
                        </div>
                    </div>
                    <div class="chat-box-container">
                        <div class="chat-box">
                            <input type="text" placeholder="Escreva sua mensagem" name="msg" required />
                            <button type="submit" class="btn"><i class="fa fa-chevron-circle-right send-btn"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        
    );
}
export default Footer;