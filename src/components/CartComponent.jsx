import React from "react";

const CartComponent = ({ products, cartProducts, setCartProducts }) => {
  const [total, setTotal] = React.useState(0);
  const handleUpdateQuantity = ({ product, action = "inc" }) => {
    setCartProducts((preVal) => {
      let newProduct;
      const isProductExist = products.find(
        (pr) => pr.product_id === product.product_id
      );

      if (isProductExist) {
        const currentQuantity =
          action === "inc"
            ? product.quantity + 1
            : product.quantity - 1 > 1
            ? product.quantity - 1
            : 0;

        newProduct = {
          ...isProductExist,
          quantity: currentQuantity,
        };
        const updatedProduct = preVal.map((item) => {
          if (item.product_id === newProduct.product_id) return newProduct;
          return item;
        });
        return updatedProduct;
      } else {
        newProduct = {
          ...product,
          quantity: 1,
        };
        return [...preVal, newProduct];
      }
    });
    setTotal(calcTotal());
  };

  const calcTotal = () => {
    return cartProducts.reduce((total, current) => {
      const allTotal = total + current.price * current.quantity;
      setTotal(allTotal)
      return allTotal;
    }, 1);
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
            console.log(product);
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
                      onClick={() =>
                        handleUpdateQuantity({ product, action: "dec" })
                      }
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
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
                        required
                      />
                    </div>
                    <button
                      className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                      onClick={() =>
                        handleUpdateQuantity({ product, action: "inc" })
                      }
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900">
                  {product.price !== 0
                    ? product.price * product.quantity
                    : product.price}
                </td>
                <td className="px-6 py-4">
                  <button className="font-medium rose-blue-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h1>{total}</h1>
    </div>
  );
};

export default CartComponent;
