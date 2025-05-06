import { IProductData } from "../../Containers/ProductCardStack";

export interface IProductCard {
  productData: IProductData;
  handleLikeClick: (product: IProductData) => void;
  handleDislikeClick: (product: IProductData) => void;
  handleAddCartClick: (product: IProductData) => void;
  handleProductInfoClick: (product: IProductData) => void;
}

const ProductCard = (props: IProductCard) => {
  const { productData } = props;

  return (
    <div className="border-2 border-[#ff444f] border-dashed	rounded-2xl w-[300px] bg-white">
      <img
        src={productData.imageUrl}
        alt={productData.name}
        className="w-full h-[350px] object-cover rounded-t-2xl"
        draggable={false}
      />
      <div className="w-full pt-2 px-4 pb-4">
        <p className="text-lg font-medium text-[#1e1e1d] capitalize">
          {productData.name}
        </p>
        <p className="text-base font-normal text-[#6b7280] pt-0.5 capitalize">
          {productData.brand}
        </p>
        <div className="flex items-center pt-0.5">
          <p className="text-lg font-bold text-[#1e1e1d]">
            ₹{productData.price}
          </p>
          {productData.originalPrice && (
            <p className="text-base font-normal line-through text-[#6b7280] pl-2">
              ₹{productData.originalPrice}
            </p>
          )}
          {productData.discountPercentage && (
            <p className="text-base font-bold text-[#ff444f] pl-2">
              {productData.discountPercentage}% off
            </p>
          )}
        </div>
        <div className="flex items-center justify-evenly pt-2">
          <button onClick={() => props.handleLikeClick(productData)}>
            <i className="fa-solid fa-heart border-2 solid border-[#6b7280] rounded-full	text-[#6b7280] p-2 cursor-pointer" />
          </button>
          <button onClick={() => props.handleDislikeClick(productData)}>
            <i className="fa-solid fa-heart-crack border-2 solid border-[#6b7280] rounded-full	text-[#6b7280] p-2 cursor-pointer" />
          </button>
          <button onClick={() => props.handleAddCartClick(productData)}>
            <i className="fa-solid fa-cart-plus border-2 solid border-[#6b7280] rounded-full	text-[#6b7280] p-2 cursor-pointer"></i>
          </button>
          <button onClick={() => props.handleProductInfoClick(productData)}>
            <i className="fa-solid fa-circle-info border-2 solid border-[#6b7280] rounded-full	text-[#6b7280] p-2 cursor-pointer"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
