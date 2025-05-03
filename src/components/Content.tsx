import { useState } from "react";
import { useCart } from "./AppContext";
import img1 from "../assets/images/image-product-1-thumbnail.jpg";
import img2 from "../assets/images/image-product-2-thumbnail.jpg";
import img3 from "../assets/images/image-product-3-thumbnail.jpg";
import img4 from "../assets/images/image-product-4-thumbnail.jpg";
import mainImg1 from "../assets/images/image-product-1.jpg";
import mainImg2 from "../assets/images/image-product-2.jpg";
import mainImg3 from "../assets/images/image-product-3.jpg";
import mainImg4 from "../assets/images/image-product-4.jpg";
import minus from "../assets/images/icon-minus.svg";
import plus from "../assets/images/icon-plus.svg";
import cart from "../assets/images/icon-cart.svg";
import cancel from "../assets/images/icon-close.svg";
import prev from "../assets/images/icon-previous.svg";
import next from "../assets/images/icon-next.svg";

const images = [img1, img2, img3, img4];
const mainImages = [mainImg1, mainImg2, mainImg3, mainImg4];

const product = {
  id: 1,
  name: "Sneaker Company",
  title: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: 125.0,
  image: img1,
};

const Content = () => {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(mainImages[0]);
  const [count, setCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(images[0]);
  const [galleryView, setGalleryView] = useState(false);

  const handleGalleryView = () => {
    setGalleryView(!galleryView);
  };

  const handleImageClick = (index: number) => {
    setSelectedImage(mainImages[index]);
    setActiveIndex(images[index]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;

    const currentIndex = mainImages.indexOf(selectedImage);
    const prevImage =
      mainImages[currentIndex === 0 ? mainImages.length - 1 : currentIndex - 1];
    setSelectedImage(prevImage);
    setActiveIndex(images[mainImages.indexOf(prevImage)]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;

    const currentIndex = mainImages.indexOf(selectedImage);
    const nextImage =
      mainImages[currentIndex === mainImages.length - 1 ? 0 : currentIndex + 1];
    setSelectedImage(nextImage);
    setActiveIndex(images[mainImages.indexOf(nextImage)]);
  };

  const handleAddToCart = () => {
    if (count > 0) {
      addToCart({ ...product, quantity: count });
    }
  };

  const minusClick = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  return (
    <>
      {galleryView && (
        <div className="sm:flex fixed inset-0 bg-black bg-opacity-70  z-50 sm:flex-col hidden justify-center items-center bg w-[100%] h-[100%] ">
          <div className="w-[450px] flex justify-end items-center ">
            <img
              src={cancel}
              alt="close"
              onClick={handleGalleryView}
              className=" p-2 w-[30px] bg-white rounded-lg cursor-pointer"
            />
          </div>
          <div className="flex flex-col">
            {selectedImage && (
              <div className="flex justify-center items-center ">
                <div
                  className="p-4 px-5 bg-white rounded-full cursor-pointer mr-[-30px] z-10"
                  onClick={handlePrev}
                >
                  {" "}
                  <img src={prev} alt="prev" />
                </div>{" "}
                <img
                  src={selectedImage}
                  alt=""
                  className="w-[450px] mb-2 rounded-2xl cursor-pointer"
                />
                <div
                  className="p-4 px-5 bg-white rounded-full cursor-pointer ml-[-30px] z-10"
                  onClick={handleNext}
                >
                  <img src={next} alt="next" />
                </div>
              </div>
            )}
            <div className="flex flex-row justify-center items-center gap-5 mt-4">
              {images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className={` ${
                      activeIndex === images[index]
                        ? "  border-[3px] border-Orange"
                        : "border-none"
                    } flex justify-center rounded-lg`}
                    onClick={() => handleImageClick(index)}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-[83px] h-[83px] rounded-md cursor-pointer hover:opacity-50 "
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/*Mobile config*/}
      <div className="flex sm:flex-row flex-col sm:max-w-[1000px] w-full justify-between sm:gap-[150px] gap-8 items-center sm:mt-[70px] mt-0">
        <div className="sm:flex sm:flex-col">
          {selectedImage && (
            <div className="flex justify-center items-center relative">
              <div
                className="p-4 px-5 bg-white sm:hidden  rounded-full cursor-pointer mr-[-70px] z-10"
                onClick={handlePrev}
              >
                {" "}
                <img src={prev} alt="prev" />
              </div>{" "}
              <img
                src={selectedImage}
                alt=""
                className="sm:w-[400px] w-full mb-2 sm:rounded-2xl rounded-none cursor-pointer"
                onClick={handleGalleryView}
              />
              <div
                className="p-4 px-5 bg-white sm:hidden rounded-full cursor-pointer ml-[-70px] z-10"
                onClick={handleNext}
              >
                <img src={next} alt="next" />
              </div>
            </div>
          )}
          <div className="sm:flex sm:flex-row hidden justify-center items-center gap-5 mt-4">
            {images.map((image, index) => {
              return (
                <div
                  key={index}
                  className={` ${
                    activeIndex === images[index]
                      ? "  border-[3px] border-Orange"
                      : "border-none"
                  } flex justify-center rounded-lg`}
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-[83px] h-[83px] rounded-md cursor-pointer hover:opacity-50 "
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col sm:w-[450px] w-[90%] gap-4 ">
          <p className="text-Dark_grayish_blue font-bold uppercase text-[14px]">
            {product.name}
          </p>
          <h1 className="font-bold leading-[45px] text-Very_dark_blue text-[40px]">
            {product.title}
          </h1>
          <p className="text-Dark_grayish_blue text-[16px] mt-3">
            {product.description}
          </p>
          <div className="sm:flex sm:flex-col sm:items-start flex flex-row justify-between items-center">
            <div className="flex flex-row justify-between items-center w-[170px]">
              <p className="font-bold text-[28px]"> ${product.price}.00</p>
              <p className="bg-Black text-white p-0.5 text-[16px] rounded-lg px-3">
                {" "}
                50%
              </p>
            </div>
            <p className="sm:mt-[12px] text-Dark_grayish_blue font-bold line-through">
              $250.00
            </p>
          </div>
          <div className="flex sm:flex-row flex-col justify-between items-center mt-4 sm:w-[450px] w-full p-1">
            <div className="flex flex-row justify-between items-center sm:w-[150px] w-full p-1 bg-Light_grayish_blue font-semibold rounded-md">
              <button onClick={minusClick} className="p-3 hover:opacity-70">
                <img src={minus} alt="minus-icon" />
              </button>
              {count}
              <button
                onClick={() => setCount(count + 1)}
                className="p-3 hover:opacity-70"
              >
                <img src={plus} alt="plus-icon" />
              </button>
            </div>
            <button
              className="flex justify-center p-3 font-semibold mt-4 sm:mt-0 bg-Orange rounded-lg sm:w-[250px] w-full items-center gap-2 hover:opacity-70"
              onClick={handleAddToCart}
            >
              <img
                src={cart}
                alt="cart-icon"
                className="w-4 h-4 stroke-current text-black"
              />
              <p>Add to cart</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
