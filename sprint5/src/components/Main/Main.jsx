import React, { useState, useEffect } from "react";
import Section from '../Section/Section';
import Card from '../Card/Card';
import Botao from '../Button/Button';
import S from './Main.module.css';

const Main = () => {
    const [informacoes, setInformacoes] = useState([]);
    const [page, setPage] = useState(
      "frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1"
    );
    const [nextPage, setNextPage] = useState("");
  
    async function handleRequisicao() {
      const response = await fetch(`https://${page}`);
      const json = await response.json();
      setInformacoes([...json.products]);
      setNextPage(json.nextPage);
    }
  
    const proxP = () => {
      setPage(nextPage);
    };
  
    useEffect(() => {
      handleRequisicao();
    }, [page]);
  return (
    <main>
      <section>
        <Section/>
      </section>
      <section>
        <div className={S.principal}>
          <div className={S.cards}>
            {informacoes.length > 0 &&
              informacoes.map((item, index) => {
                return (
                  <Card
                    key={index}
                    foto={item.image}
                    nome={item.name}
                    descricao={item.description}
                    preco={item.oldPrice}
                    novoPreco={item.price}
                    parc={item.installments.count}
                    quantidade={item.installments.value}
                  />
                );
              })}
          </div>
        </div>
        <div className={S.botoes}>
          <Botao
            funcao={proxP}
            style={S.button}
            text="Adquira mais produtos aqui"
          />
        </div>
      </section>
    </main>
  );
};
    


export default Main