import React from "react";

const CartComponent = ({ allTotal, cartProducts, setCartProducts }) => {
  // handle quantity updates
  const handleUpdateQuantity = ({ product, action = "inc" }) => {
    setCartProducts((cartItems) => {
      // Find cart item
      const item = cartItems.find(
        (item) => item.product_id === product.product_id
      );

      // if quantity <= 0 then remove product from cart
      if (action === "dec") {
        const currentQuantity = item.quantity - 1;
        if (currentQuantity <= 0) {
          removeProductFormCart(product);
        }
      }

      // create newItem
      const newItem = {
        ...item,
        quantity: action === "inc" ? item.quantity + 1 : item.quantity - 1,
        totalPrice:
          action === "inc"
            ? (item.quantity + 1) * item.price
            : item.quantity - 1 >= 0
            ? (item.quantity - 1) * item.price
            : 0,
      };
      const updatedProducts = cartItems.map((val) =>
        val.product_id === newItem.product_id ? newItem : val
      );
      return updatedProducts;
    });
  };

  //Remove product form cart
  const removeProductFormCart = (product) => {
    setCartProducts((cartItems) => {
      const updatedItems = cartItems.filter(
        (pr) => pr.product_id !== product.product_id
      );
      return updatedItems;
    });
  };

  return (
    <div>
      <table className="w-full h-full text-sm text-left text-gray-900">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-16 py-3">
              Image
              {/* <span className="sr-only">Image</span> */}
            </th>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Qty
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((product) => {
            return (
              <tr
                key={product.product_id}
                className="bg-white border-b  hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="p-4">
                  <img
                    src={product.image}
                    className="w-16 md:w-32 max-w-full max-h-full"
                    alt="Apple Watch"
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900">
                  {product.product_name}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <button
                      className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                      onClick={() => {
                        handleUpdateQuantity({ product, action: "dec" });
                      }}
                    >
                      <span className="sr-only">Quantity button</span>
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <div>
                      <input
                        type="number"
                        id="first_product"
                        className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="1"
                        value={product.quantity}
                        readOnly
                        required
                      />
                    </div>
                    <button
                      className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                      onClick={() => {
                        handleUpdateQuantity({ product, action: "inc" });
                      }}
                    >
                      <span className="sr-only">Quantity button</span>
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900">
                  {product.totalPrice}
                </td>
                <td className="px-6 py-4">
                  <button
                    className="font-medium text-rose-500 hover:underline"
                    onClick={() => removeProductFormCart(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h1 className="p-5 text-3xl text-lime-500">{allTotal}</h1>
    </div>
  );
};

export default CartComponent;
