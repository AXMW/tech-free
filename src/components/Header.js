import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header() {
    function openNotify() {
        if(document.getElementById("notify-form-container").style.display == "block"){
            document.getElementById("notify-form-container").style.display = "none";
        } else {
            document.getElementById("notify-form-container").style.display = "block";
        }
        
    }

    return(
        <div>
            <input id="close-menu" class="close-menu" type="checkbox" aria-label="Close menu" role="button" />
            <label class="close-menu-label" for="close-menu" title="close menu"></label>
            <aside class="menu white-bg">
                <div class="main-content menu-content">
                    <h1 onclick="getElementById('close-menu').checked = false;"><Link to='/Home'>TECHFREE</Link></h1>
                    <div class="search-bar">
                        <div class="search">
                            <input id="1" type="text" placeholder="Busque por cargos ou empresas..." />
                        </div>
                    
                        <div class="search">
                            <input id="2" type="text" placeholder="Busque por cidade ou estado..." />
                        </div>
                        <div>
                            <Link to='/Busca'><button class="icon"><b>Pesquisar</b></button></Link>
                        </div>
                    
                    </div>
                    <nav>
                        <ul onclick="getElementById('close-menu').checked = false;">
                            <li><Link class="links-header" to='/Principal'>Início</Link></li>
                            <li><Link class="links-header" to='/FAQ'>FAQ</Link></li>
                            <li><Link class="links-header" to='/Login'><i class="fa fa-user"></i></Link></li>
                            <li><button class="notificacao-icon" onClick={openNotify}><i class="fa fa-bell notificacao-icon"></i></button></li>
                        </ul>
                    </nav>
                </div>

                <div class="notify-popup" id="notify-form-container">
                    <form action="#" class="notify-container">
                        <div class="notificacao-container">
                            <div class="notificacao">
                                <a href="#"><p>Nova vaga publicada pela empresa BairesDev</p></a>
                            </div>
                            <div class="notificacao">
                                <a href="#"><p>Nova vaga publicada pela empresa Turing</p></a>
                            </div>
                            <div class="notificacao">
                                <a href="#"><p>Nova vaga publicada pela empresa Workana</p></a>
                            </div>
                            <div class="notificacao">
                                <a href="#"><p>Nova vaga publicada pela empresa Talent Group</p></a>
                            </div>
                            <div class="notificacao">
                                <a href="#"><p>Nova vaga publicada pela empresa TecSoft Solutions</p></a>
                            </div>
                        </div>
                    </form>
                </div>
            </aside>

            <div class="menu-spacing"></div>
        </div>
    );
}
export default Header;