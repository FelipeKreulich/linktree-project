import './App.css';

import 'animate.css';

const Logo = require('./images/Logo.png');
const Brain = require('./images/brainIcon.png');
const Instagram = require('./images/instagramIcon.png');
const Clients = require('./images/clientsIcon.png');
const Whatsapp = require('./images/whatsappIcon.png');

const rocket = require('./images/rocket.png')
const paper = require('./images/paper.png')
const line = require('./images/line.png')

function App() {
  return (
    <div className="App">
      <div className='card animate__animated animate__backInDown'>
        <div className='card_body'>
          <div className='profile text-center'>
            <img src={Logo} alt='Network Solution' className='avatar' />
            <div className='bg_content rd_12 p_8'>
              <h1 className='bigText'>NETWORK</h1>
              <p className='redText'>CONECTANDO SEU SUCESSO</p>
              <h1 className='bigText'>SOLUTION</h1>
            </div>
          </div>
          <div className='mt-16'>
            <a className='btn_action bg_content' href='https://www.instagram.com/networksolution.cg/'>
              <img src={Instagram} alt='Instagram' className='icons' />
              <span>Acesse nossa página e confira as novidades!</span>
            </a>
          </div>
          <div className='mt-16'>
            <a className='btn_action bg_content' href='https://wa.me/5567991894853'>
              <img src={Whatsapp} alt='WhatsApp' className='icons' />
              <span>Para mais informações entre em contato!</span>
            </a>
          </div>
          <div className='mt-16'>
            <a className='btn_action bg_content' href='https://www.instagram.com/networksolution.cg/'>
              <img src={Clients} alt='Clientes' className='icons' />
              <span>Conheça nossos clientes e veja os resultados!</span>
            </a>
          </div>
          <div className='mt-16'>
            <a className='btn_action bg_content' href='https://www.instagram.com/networksolution.cg/'>
              <img src={Brain} alt='Network Solution' className='icons' />
              <span>Conheça a Network Solution e surpreenda-se!</span>
            </a>
          </div>
          <div className='containerInfo'>
            <div className='info'>
              <img src={line} alt="Line-Chart" className='infoIcons' />
              <span>Atraia Mais Clientes</span>
            </div>
            <div className='info'>
              <img src={rocket} alt="Rocket" className='infoIcons' />
              <span>Acelere os Resultados</span>
            </div>
            <div className='info'>
              <img src={paper} alt="Paper" className='infoIcons' />
              <span>Marketing de Conteúdo</span>
            </div>
          </div>
          <div className='footer bg_content'>
            <p>Designed by ❤️ Network Solution - 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;