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



const Produtos = ({ data }) => {
  const [quantidade, setQuantidade] = useState(0);
  console.log(data)

  return (
      <Produtolistar href="/listar/pedidos">
        {data.map((it, index) => {
          return (
            <div key={index} className="product_container">
              <div className="product_thumbnail">
                <img src={it.thumb} alt=''/>
              </div>
              <div className="product_desc_cont">
                <h1 className="product_name">{it.produto}</h1>
                <p className="product_desc">{it.desc}</p>
                <div className="product_cart">
                  <spam className="product_price">R$ {it.valor}</spam>
                  <button className="product_add"> -</button>
                  <spam className="product_add_qtd">3</spam>
                  <button className="product_add">+</button>
                </div>
              </div>
            </div>
            // <ProductsContainer>
            //   <ProductWrapper>
            //     <div>
            // <ProductCard key={index}>
            //   <ProductInfo>
            //   <ProductImg src={it.thumb}/>
            //   <ProductTitle>{it.produto}</ProductTitle>
            //     <div>
            // <ProductDesc>{it.desc}</ProductDesc>
            // </div>
            //     <ProductPrice>  R${it.valor},00 </ProductPrice>
            //     <ProductButton><IoMdAddCircle size={32} color="#FA4A0C"/></ProductButton>
            //   </ProductInfo>
            // </ProductCard>
            // </div>
            // </ProductWrapper>
            // </ProductsContainer>

          );
        })}
      </Produtolistar>


  );
};

export default Produtos;
