type Props = {
  product: any;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <h3 className="font-semibold">{product.title}</h3>

      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;
