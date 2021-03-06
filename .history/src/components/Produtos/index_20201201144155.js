import React, {useEffect, useState} from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductPrice,
  ProductDesc,
  ProductButton,
  Produtolistar,

} from './ProductsElements';
import './style.css';
import { IoMdAddCircle } from "react-icons/io";


const Produto = ({getQuantidade, addComanda, it,idx}) => {
  const [quantidade, setQuantidade] = useState(getQuantidade());
  // console.log(data)
  useEffect(()=>{
    addComanda(it._id, quantidade);
  },[quantidade])
  const incProdQtd = () => {setQuantidade(quantidade + 1)}
  const decProdQtd = () => {
    if(quantidade > 0)
      setQuantidade(quantidade - 1)}
  return (
    <div key={idx} className="product_container">
      <div className="product_thumbnail">
        <img src={it.thumb} alt=''/>
      </div>
      <div className="product_desc_cont">
        <h1 className="product_name">{it.produto}</h1>
        <p className="product_desc">{it.desc}</p>
        <div className="product_cart">
          <spam className="product_price">R$ {it.valor}</spam>
          <div><button className="product_add" onClick={() => decProdQtd()}> -</button>
          <spam className="product_add_qtd">{() => getQuantidade()}</spam>
          <button className="product_add" onClick={() => incProdQtd()}>+</button>
        </div>
        </div>
      </div>
    </div>
    

  );
}

const Produtos = ({ getQuantidade, addComanda, data }) => {
  return (
      <Produtolistar href="/listar/pedidos">
        {data.map((it, index) => {
         return ( <Produto getQuantidade={getQuantidade} addComanda={addComanda} it={it} idx={index}/>)
        })}
      </Produtolistar>
  );
};

export default Produtos;
