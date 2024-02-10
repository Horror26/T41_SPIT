import React from "react";
import useAuthModal from "../hooks/useAuthModal";

const Temp = () => {
  const authModal = useAuthModal();
  return (
    <div>
      {authModal.isOpen ? (
        <div className=" bg-pink-700">lkjkl</div>
      ) : (
        <div className=" bg-pink-700">ljkkkkkkkjkl</div>
      )}
    </div>
  );
};

export default Temp;
