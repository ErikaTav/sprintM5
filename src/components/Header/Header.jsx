import React from 'react'
import Button from '../Button/Button';
import Titulo from '../Titulo/Titulo'
import S from "./Header.module.css"

const Header = () => {
  const Titulos = [
    {
      text: "uma seleção de produtos",
      style: S.TituloPequeno
    },
    {
      text: "especial para você",
      style: S.TituloGrande
    },
    {
      text: "qualquer coisa",
      style: S.Paragrafo
    }
  ];
  const Botao = [
    {
      text: "Conheça a Linx",
      style: S.button,
    },
    {
      text: "Ajude o algorítimo",
      style: S.button,
    },
    {
      text: "Seus produtos",
      style: S.button,
    },
    {
      text: "Compartilhe",
      style: S.button
    }
  ];


  return (
    <header className={S.textos}>
      <div >
        {Titulos.map(Titulos => <Titulo style={Titulos.style} text={Titulos.text} />)}

      </div>
      <div className={S.botoes}>
        {Botao.map((btn)=> (<Button style={btn.style} text={btn.text} /> ))}
        
      </div>

    </header>
  )
}

export default Header