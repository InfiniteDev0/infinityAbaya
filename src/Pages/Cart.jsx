import React, { useState } from "react";

const NAVBAR_HEIGHT = "8vh"; // Should match your Navbar

const Cart = () => {
  const [cart, setCart] = useState(false);
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center"
      style={{
        minHeight: `calc(100vh - ${NAVBAR_HEIGHT})`,
        marginTop: NAVBAR_HEIGHT,
      }}
    >
      <h1 className="Poiret text-3xl mb-8">Your Cart:</h1>
      <div className="w-full flex flex-col items-center justify-center">
        {cart === false ? (
          <div className="w-full h-[50vh] flex flex-col gap-4 items-center justify-center">
            <p className="text-2xl">YOUR CART IS EMPTY</p>
            <button className="!py-[0.5rem] !px-[15vh] bg-black text-white cursor-pointer rounded-full">
              Shop Now
            </button>
          </div>
        ) : (
          <div>{/* Cart items go here */}</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
