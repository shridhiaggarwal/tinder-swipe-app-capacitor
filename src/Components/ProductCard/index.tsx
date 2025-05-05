export interface IProductCard {
  id: string | number;
  imageUrl: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
}

const ProductCard = (props: IProductCard) => {
  const { imageUrl, name, brand, price, originalPrice, discountPercentage } =
    props;

  return (
    <div className="border-2 border-[#ff444f] border-dashed	rounded-2xl w-[300px]">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-[350px] object-cover rounded-t-2xl"
      />
      <div className="w-full pt-2 px-4 pb-4">
        <p className="text-lg font-medium text-[#1e1e1d] capitalize">{name}</p>
        <p className="text-base font-normal text-[#6b7280] pt-0.5 capitalize">
          {brand}
        </p>
        <div className="flex items-center pt-0.5">
          <p className="text-lg font-bold text-[#1e1e1d]">₹{price}</p>
          {originalPrice && (
            <p className="text-base font-normal line-through text-[#6b7280] pl-2">
              ₹{originalPrice}
            </p>
          )}
          {discountPercentage && (
            <p className="text-base font-bold text-[#ff444f] pl-2">
              {discountPercentage}% off
            </p>
          )}
        </div>
        <div className="flex items-center justify-evenly pt-2">
          <i className="fa-solid fa-heart border-2 solid border-[#6b7280] rounded-full	text-[#6b7280] p-2" />
          <i className="fa-solid fa-heart-crack border-2 solid border-[#6b7280] rounded-full	text-[#6b7280] p-2" />
          <i className="fa-solid fa-cart-plus border-2 solid border-[#6b7280] rounded-full	text-[#6b7280] p-2"></i>
          <i className="fa-solid fa-circle-info border-2 solid border-[#6b7280] rounded-full	text-[#6b7280] p-2"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
