import "./ProductItem.scss";

const ProductItem = ({ title, desc, imgUrl, imgs, price }) => {
  console.log(imgUrl);
  return (
    <div className="product-item">
      <h2>{title}</h2>
      <p>{desc}</p>
      <img src={imgUrl} alt="" />
    </div>
  );
};

export default ProductItem;
