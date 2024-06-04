import React from "react";

const ProductListComponent = ({ products, setCartProducts }) => {
  // handle add to cart
  const addProductToCart = (product) => {
    setCartProducts((cartItems) => {
      const item = cartItems.find(
        (item) => item.product_id === product.product_id
      );
      if (item) {
        const newItem = {
          ...item,
          quantity: item.quantity + 1,
          totalPrice: (item.quantity + 1) * item.price,
        };
        const updatedProducts = cartItems.map((val) =>
          val.product_id === newItem.product_id ? newItem : val
        );
        return updatedProducts;
      } else {
        const newProduct = {
          ...product,
          totalPrice: product.price,
          quantity: 1,
        };
        return [...cartItems].concat(newProduct);
      }
    });
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-6">
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
              Description
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
          {products.map((product) => {
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
                <td className="px-6 py-4 font-semibold text-gray-900">
                  {product.description}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900">
                  {product.price}
                </td>
                <td className="px-6 py-4">
                  <button
                    className="font-medium text-blue-500 hover:underline"
                    onClick={() => {
                      addProductToCart(product);
                    }}
                  >
                    Add to cart
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListComponent;
