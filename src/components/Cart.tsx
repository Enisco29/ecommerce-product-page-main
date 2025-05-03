import { useCart } from "./AppContext";
import deleteIcon from "../assets/images/icon-delete.svg";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemove = () => {
    removeFromCart();
  };

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col absolute sm:w-[300px] sm:rounded-none rounded-lg m-2 w-[95%] sm:min-h-[200px] min-h-[300px] z-50 right-0 sm:mt-[90px] mt-[120px] bg-white shadow-lg">
        <p className="p-4 font-bold">Cart</p>
        <div className="flex items-center h-[1px] w-full  bg-Grayish_blue"></div>
        <div className="flex justify-center items-center min-h-[170px] ">
          {" "}
          {cart.length === 0 ? (
            <p className="font-semibold text-Dark_grayish_blue">
              Your cart is empty
            </p>
          ) : (
            <div className="w-full">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-2"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-sm"
                  />
                  <div>
                    <h3 className="text-[15px] font-semibold text-Dark_grayish_blue">
                      {item.title}
                    </h3>
                    <p className="text-[15px] text-Dark_grayish_blue">
                      ${item.price}.00 x {item.quantity} {"  "}{" "}
                      <span className="font-semibold text-Black">
                        ${item.price * item.quantity}.00
                      </span>
                    </p>
                  </div>
                  <div onClick={handleRemove}>
                    <img src={deleteIcon} alt="delete" />
                  </div>
                </div>
              ))}
              <button className="w-[90%] rounded-md text-black bg-Orange m-4 font-semibold p-2 mt-4">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
