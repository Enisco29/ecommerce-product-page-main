const Cart = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col absolute sm:w-[300px] sm:rounded-none rounded-lg m-2 w-[95%] sm:min-h-[200px] min-h-[300px] z-50 right-0 sm:mt-[90px] mt-[120px] bg-white shadow-lg">
        <p className="p-4 font-bold">Cart</p>
        <div className="flex items-center h-[1px] w-full  bg-Grayish_blue"></div>
        <div className="flex justify-center items-center min-h-[170px] ">
          {" "}
          <p className="font-semibold text-Dark_grayish_blue">
            Your cart is empty
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
