import { ProductContainer, SpinerContainerStyle } from "./ProductList.styled";
import Product from "./Product";
import { Spinner } from "react-bootstrap";

const ProductList = ({ products }) => {
  return (
    <ProductContainer>
      {products.length < 1 ? (
        <SpinerContainerStyle>
          <Spinner
            animation="border"
            role="status"
            style={{ width: "80px", height: "80px" }}
          ></Spinner>
        </SpinerContainerStyle>
      ) : (
        products.map((item) => <Product key={item.id} data={item} />)
      )}
    </ProductContainer>
  );
};

export default ProductList;
