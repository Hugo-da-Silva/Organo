import './Rodape.css'

function Rodape () {
    return (
        <footer className="rodape_container">
                <ul className='rodape__social'>
                    <li><img src='/imagens/fb.png' alt='Icone do Facebook' className='rodape__midia'/>
                    </li>
                    <li>
                        <img src='/imagens/tw.png' alt='Icone do Twiter' className='rodape__midia' />
                    </li>
                    <li>
                        <img src='/imagens/ig.png' alt='Icone do Instagram' className='rodape__midia' />
                    </li>
                </ul>
                <img src='/imagens/logo.png' alt='Icone logo Organo' className='rodape__logo'/>
                <h3>Desevolvido por Alura</h3>
        </footer>
    )
}

export default Rodape