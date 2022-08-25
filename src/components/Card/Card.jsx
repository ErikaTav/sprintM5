import React from 'react'
import Button from '../Button/Button'
import S from './Card.module.css'

const Card = ({foto, nome, descricao, preco, novoPreco, parc, quantidade}) => {
  return (
    <div className={S.card}> 
    <picture>
        <img src={foto}/>
    </picture>
    <h3 >{nome}</h3>
    <small >{descricao}</small>
    <h4>De: R${preco}</h4>
    <h3 className={S.novoPreco}>Por: R${novoPreco}</h3>
    <h5>ou {parc}x de R${quantidade}</h5>
    <Button style={S.botao} text="Comprar"/>
</div>
)
}

export default Card