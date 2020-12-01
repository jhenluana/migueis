import styled from 'styled-components';


export const ProductsContainer = styled.div`
position: center;  
width: 345px;
height: 102px;
margin: 10px;


box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
border-radius: 20px;
  background: #ffffff;
  color: #fff;
  
`;

export const Produtolistar = styled.div`
color: #fff;
`;
export const ProductWrapper = styled.div`
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: center;
  // margin: 0 auto;
`;

export const ProductCard = styled.div`
position:center;  
line-height: 2;
  width: 340px;

`;

export const ProductImg = styled.img`
height: 85px;
min-width: 85px;
padding: 1rem 1rem;
`;

export const ProductTitle = styled.h1`
  // margin: ;
  // position: absolute;
  width: 215px;

  color: #000000;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 40px;
/* identical to box height */

text-align: center;
`;

export const ProductInfo = styled.div`
  display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // padding: 2rem;
  text-align: fixed;
  text-color: #fff;
`;

export const ProductDesc = styled.h1`
position: absolute;
width: 280px;
left: 95px;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 125px;
text-align: center;

color: #000000;
`;

export const ProductPrice = styled.p`
position: absolute;
width: 62px;
height: 23px;
left: 277px;


font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 180px;
/* identical to box height */

text-align: center;

color: #FA4A0C;


`;


export const ProductButton = styled.p`
justify-content:right;
position: absolute;
width: 45px;
height: 45px;
`;

// export const ProductButton = styled.p`
// position: absolute;
// width: 45px;
// height: 45px;
// left: 340px;
// line-height: 188px;
// `;
