// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { ProductCardTailwind } from "./components/ProductCardTailwind";
import { ProductCardMUI } from "./components/ProductCardMUI";
import { SimpleModalMUI } from "./components/SimpleModalMUI";
import { Counter } from "./components/Counter";

export default function App() {
  return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
        <ProductCardTailwind
            title="Беспроводные наушники"
            price={199}
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF8Bwz43xkn_Bl-Y7Vb6h6rV7AvOsWTK55sA&s"
            description="До 10 часов работы без подзарядки"
        />
        <ProductCardMUI
            title="Беспроводные наушники"
            price={250}
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMq4eXryfmZMFm_z6j8OZIg-l0v75WO1Texg&s"
            description="До 5 часов работы без подзарядки"
        />

        <div className="min-h-screen flex items-center justify-center p-10">
          <SimpleModalMUI />
        </div>

        <div className="min-h-screen flex items-center justify-center p-10 bg-gray-100">
        <Counter />
      </div>

      </div>

  );
}