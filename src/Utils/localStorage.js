import Swal from "sweetalert2";

// Load wishlist from localStorage
export const loadWishlist = () => {
  try {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

// Add or update wishlist
export const updateList = (productDetails) => {
  const wishlist = loadWishlist();
  try {
    const isDuplicate = wishlist.some((p) => p.id === productDetails.id);

    if (isDuplicate) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Already Existed!",
      });
      return;
    }

    const updatedList = [...wishlist, productDetails];

    localStorage.setItem("wishlist", JSON.stringify(updatedList));

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: "Product added to wishlist",
    });
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const removeFromWishlist = (id) => {
  const wishlist = loadWishlist();
  try {
    const updatedList = wishlist.filter((p) => p.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
  } catch (err) {
    console.log(err);
    return [];
  }
};
