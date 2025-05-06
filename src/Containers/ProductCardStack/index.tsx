import { useState } from "react";
import ProductCard from "../../Components/ProductCard";
import products from "../../Utils/products.json";
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
  const [cards, setCards] = useState<IProductData[]>(products);
  const originalProducts = [...products]; // Keep a copy of the original products

  const handleSwipe = (direction: DIRECTIONS, product: IProductData) => {
    console.log(`Swiped ${direction} Product ID: ${product.id}`);
    if (direction === DIRECTIONS.UP) {
      handleAddCartClick(product);
    } else if (direction === DIRECTIONS.LEFT) {
      handleDislikeClick(product);
    } else if (direction === DIRECTIONS.RIGHT) {
      handleLikeClick(product);
    }

    // Remove the swiped card
    const remainingCards = cards.slice(1);

    if (remainingCards.length === 0) {
      // If no cards left, reset to the original list
      setCards(originalProducts);
    } else {
      setCards(remainingCards);
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

  return (
    <>
      {/* {cards.length > 0 ? (
        cards.slice(0, 3).reverse().map((card, index) => {
          const isTopCard = index === 0;
          const zIndex = index + 1;
          return (
            <div
              key={card.id}
              className="absolute top-0 left-0 w-full h-full"
              style={{
                zIndex,
                transform: `scale(${
                  1 - (cards.length - 1 - index) * 0.05
                }) translateY(${(cards.length - 1 - index) * 10}px)`,
                transition: "transform 0.3s ease",
              }}
            >
              {isTopCard ? (
                <Swiper onSwipe={(dir) => handleSwipe(dir, card)}>
                  <ProductCard
                    productData={card}
                    handleLikeClick={handleLikeClick}
                    handleDislikeClick={handleDislikeClick}
                    handleAddCartClick={handleAddCartClick}
                    handleProductInfoClick={handleProductInfoClick}
                  />
                </Swiper>
              ) : (
                <ProductCard
                  productData={card}
                  handleLikeClick={handleLikeClick}
                  handleDislikeClick={handleDislikeClick}
                  handleAddCartClick={handleAddCartClick}
                  handleProductInfoClick={handleProductInfoClick}
                />
              )}
            </div>
          );
        })
      ) : (
        <div className="text-xl text-gray-600">No products</div>
      )} */}
      {cards.length > 0 ? (
        <Swiper key={cards[0].id} onSwipe={(dir) => handleSwipe(dir, cards[0])}>
          <ProductCard
            key={cards[0].id}
            productData={cards[0]}
            handleLikeClick={handleLikeClick}
            handleDislikeClick={handleDislikeClick}
            handleAddCartClick={handleAddCartClick}
            handleProductInfoClick={handleProductInfoClick}
          />
        </Swiper>
      ) : (
        <div className="text-xl text-gray-600">No products</div>
      )}
    </>
  );
};

export default ProductCardStack;
