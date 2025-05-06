import { useState } from "react";
import ProductCard, { IProductCard } from "../../Components/ProductCard";
import products from "../../Utils/products.json";
import { DIRECTIONS } from "../../Utils/constants";
import Swiper from "../../Components/Swiper";

const ProductCardStack = () => {
  const [cards, setCards] = useState<IProductCard[]>(products);
  const originalProducts = [...products]; // Keep a copy of the original products

  const handleSwipe = (direction: DIRECTIONS, product: IProductCard) => {
    console.log(`Swiped ${direction} Product ID: ${product.id}`);
    if (direction === DIRECTIONS.UP) {
      console.log(`Add to cart Product ID: ${product.id}`);
      // Update component state if needed
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

  return (
    <>
      {cards.length > 0 ? (
        <Swiper key={cards[0].id} onSwipe={(dir) => handleSwipe(dir, cards[0])}>
          <ProductCard
            key={cards[0].id}
            imageUrl={cards[0].imageUrl}
            id={cards[0].id}
            name={cards[0].name}
            brand={cards[0].brand}
            price={cards[0].price}
            originalPrice={cards[0].originalPrice}
            discountPercentage={cards[0].discountPercentage}
          />
        </Swiper>
      ) : (
        <div className="text-xl text-gray-600">No more products</div>
      )}
    </>
  );
};

export default ProductCardStack;
