import React, {useEffect} from 'react';
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

import api from './../../services/api';
import { IoMdAddCircle } from "react-icons/io";



const Produtos = ({ data }) => {


  return (
      <Produtolistar href="/listar/pedidos">
        {data.map((it, index) => {
          return (
            <div className="product_container">
              <div classname="product_thumb"></div>
              <div className="product_desc">
                <h1 className="product_name"></h1>
                <p className="product_desc"></p>
                <div className="product_cart">
                  <spam className="product_price"></spam>
                  <button className="product_add"></button>
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
