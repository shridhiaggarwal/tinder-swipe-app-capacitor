# 🛒 Product Swiping Feature

A Tinder-style product swiping mobile web app built using **React.js**, **TypeScript**, and **Capacitor.js**.

## 📦 Features

* Swipe products **left**, **right**, or **up**:

  * **Right**: Like a product 💖
  * **Left**: Dislike a product 💔
  * **Up**: Add to cart 🛒
* Reset the product stack automatically when all products are swiped
* Elegant card stack layout with smooth swipe animations
* Reusable `Swiper` component that supports both touch and mouse events

## 🧱 Tech Stack

* React.js
* TypeScript
* Tailwind CSS
* Capacitor.js

## 🧩 Components

* **ProductCardStack**: Manages and renders the product card stack
* **Swiper**: Handles swipe gestures and animations
* **ProductCard**: Displays individual product details with action buttons

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 📁 Folder Structure

```
Components/
  └── ProductCard.tsx
  └── Swiper.tsx
Containers/
  └── ProductCardStack.tsx
Utils/
  └── products.json
  └── constants.ts
```


## 📝 Available Scripts

In the project directory, you can run:

```bash
npm start
```

- Runs the app in the development mode.\
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


```bash
npm build
```

- Builds the app for production to the `build` folder.\
- It correctly bundles React in production mode and optimizes the build for the best performance.

```bash
npx cap copy
```

- To copy latest build without full sync:

```bash
npx cap open android
```

- To open the project in android studio