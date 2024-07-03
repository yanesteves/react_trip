import './CardBicicleta.css'

function CardBicicleta() {

    function comprarBike() {
        console.log('comprando a bicicleta')
    }

    // function teclaPressionada(e) {

    // }

    return (
        <>
            <div className="card-bicicleta">
                <img src="https://www.origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg" alt="Imagem da bike" />
                <h4 className='modelo'>Magic Might</h4>
                <h6 className='preco'>R$ 2499</h6>

                {/* <input type='text' placeholder='Digite aqui' onChange={(e) => teclaPressionada(e)}></input> */}

                <button onClick={() => comprarBike()}>Comprar</button>
            </div>
        </>
    )
}

export default CardBicicleta