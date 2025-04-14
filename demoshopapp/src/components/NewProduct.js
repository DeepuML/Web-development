import "./NewProduct.css";
import ProductForm from "./ProductForm";

function NewProduct({ onAddProduct }) {
  function saveProduct(product) {
    console.log("Inside NewProduct:");
    console.log(product);

    // Calling parent function
    onAddProduct(product);
  }

  return (
    <div className="new-product">
      <ProductForm onSaveProduct={saveProduct} />
    </div>
  );
}

export default NewProduct;
