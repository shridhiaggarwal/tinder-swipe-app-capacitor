import { useState } from "react";
import ProductCard from "../../Components/ProductCard";
import productsData from "../../Utils/products.json";
import { DIRECTIONS } from "../../Utils/constants";
import Swiper from "../../Components/Swiper";

export interface IProductData {
  id: string | number;
  imageUrl: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
}

const ProductCardStack = () => {
  const [products, setProducts] = useState<IProductData[]>(productsData);
  const originalProducts = [...productsData]; // Keep a copy of the original productsData

  const handleSwipe = (direction: DIRECTIONS, product: IProductData) => {
    if (direction === DIRECTIONS.UP) {
      handleAddCartClick(product);
    } else if (direction === DIRECTIONS.LEFT) {
      handleDislikeClick(product);
    } else if (direction === DIRECTIONS.RIGHT) {
      handleLikeClick(product);
    }

    // Remove the swiped card
    const remainingCards = products.slice(1);

    if (remainingCards.length === 0) {
      // If no products left, reset to the original list
      setProducts(originalProducts);
    } else {
      setProducts(remainingCards);
    }
  };

  const handleLikeClick = (product: IProductData) => {
    console.log(`Liked Product ID: ${product.id}`);
  };

  const handleDislikeClick = (product: IProductData) => {
    console.log(`Disliked Product ID: ${product.id}`);
  };

  const handleAddCartClick = (product: IProductData) => {
    console.log(`Add to Card Product ID: ${product.id}`);
  };

  const handleProductInfoClick = (product: IProductData) => {
    console.log(`Provide more info Product ID: ${product.id}`);
  };

  const getStackStyle = (index: number) => {
    return {
      transform: `translate(${index * 10}px, ${index * 10}px)`,
      zIndex: products.length - index,
    };
  };

  if (products.length === 0) {
    return <div className="text-xl text-gray-600">No products</div>;
  }

  return (
    <div className="relative h-[31.25rem] w-[18.75rem]">
      {products.slice(0, 3).map((product, index) => {
        const isTopCard = index === 0;
        const productContent = (
          <ProductCard
            productData={product}
            handleLikeClick={handleLikeClick}
            handleDislikeClick={handleDislikeClick}
            handleAddCartClick={handleAddCartClick}
            handleProductInfoClick={handleProductInfoClick}
          />
        );

        return (
          <div
            key={product.id}
            className="absolute top-0 left-0"
            style={getStackStyle(index + 1)}
          >
            {isTopCard ? (
              <Swiper onSwipe={(dir) => handleSwipe(dir, product)}>
                {productContent}
              </Swiper>
            ) : (
              productContent
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductCardStack;
