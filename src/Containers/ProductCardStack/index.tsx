import { useState } from "react";
import ProductCard, { IProductCard } from "../../Components/ProductCard";
import products from "../../Utils/products.json";
import { DIRECTIONS } from "../../Utils/constants";

const ProductCardStack = () => {
  const [cards, setCards] = useState<IProductCard[]>(products);
  const originalProducts = [...products]; // Keep a copy of the original products

  const handleSwipe = (direction: DIRECTIONS, product: IProductCard) => {
    console.log(`Swiped ${direction} Product ID: ${product.id}`);
    if (direction === "up") {
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
    <div>
      {cards.length > 0 ? (
        <ProductCard
          key={cards[0].id}
          imageUrl={cards[0].imageUrl}
          id={cards[0].id}
          name={cards[0].name}
          brand={cards[0].brand}
          price={cards[0].price}
          originalPrice={cards[0].originalPrice}
          discountPercentage={cards[0].discountPercentage}
          // onSwipe={handleSwipe}
        />
      ) : (
        <div className="text-xl text-gray-600">No more products</div>
      )}
    </div>
  );
};

export default ProductCardStack;
