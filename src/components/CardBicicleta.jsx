import './CardBicicleta.css'

function CardBicicleta({ modelo, preco, imagemSrc, temTextoAdicional }) {

    function comprarBike() {
        console.log('comprando a bicicleta')
    }

    return (
        <>
            <div className="card-bicicleta">         

                <img src={imagemSrc} alt="Imagem da bike" />
                <h4 className='modelo'>{modelo}</h4>
                <h6 className='preco'>R$ {preco}</h6>

                {/* <input type='text' placeholder='Digite aqui' onChange={(e) => teclaPressionada(e)}></input> */}

                <button onClick={() => comprarBike()}>Comprar</button>
            </div>
        </>
    )
}

export default CardBicicleta