import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const modalClasses = isOpen
    ? "fixed inset-0 flex items-center justify-center"
    : "hidden";

  return (
    <div className={modalClasses}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-4 rounded-lg z-10">
        <button className="absolute top-0 right-0 m-4" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
