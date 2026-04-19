import React, { useState, useRef, useEffect } from "react";

const CourseForm = ({ onCreateItem, itemInEditMode, onSaveEditedItem }) => {
  // Controlled
  const [courseNameInput, setCourseNameInput] = useState("");
  const [coursePriceInput, setCoursePriceInput] = useState("");
  const [isAccessingFree, setIsAccessingFree] = useState(false);

  // Uncontrolled
  const quantityInputRef = useRef();
  const categoryInputRef = useRef();

  useEffect(() => {
    if (itemInEditMode && quantityInputRef.current && categoryInputRef.current) {
      setCourseNameInput(itemInEditMode.name);
      setCoursePriceInput(itemInEditMode.price);
      setIsAccessingFree(itemInEditMode.freeAccess);

      quantityInputRef.current.value = itemInEditMode.quantity;
      categoryInputRef.current.value = itemInEditMode.category;
    }
  }, [itemInEditMode]);

  const handleFormSubmit = (submitEvent) => {
    submitEvent.preventDefault(); //when submit stop reload 

    const preparedItemPayload = {
      name: courseNameInput,
      price: coursePriceInput,
      freeAccess: isAccessingFree,
      quantity: quantityInputRef.current.value,
      category: categoryInputRef.current.value,
    };

    if (itemInEditMode) {
      onSaveEditedItem({ ...preparedItemPayload, id: itemInEditMode.id });
    } else {
      onCreateItem(preparedItemPayload);
    }
    //controlled inputs 
    setCourseNameInput("");
    setCoursePriceInput("");
    setIsAccessingFree(false);
    //uncontrolled inputs 
    quantityInputRef.current.value = "";
    categoryInputRef.current.value = "";
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 mb-10">
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-700 ml-1">Course Name</label>
        <input
          type="text"
          placeholder="Enter Course Name"
          className="w-full p-2 rounded-md border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-gray-400 outline-none shadow-sm"
          value={courseNameInput}
          onChange={(event) => setCourseNameInput(event.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-700 ml-1">Course Price</label>
        <input
          type="number"
          placeholder="Enter Course Price"
          className="w-full p-2 rounded-md border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-gray-400 outline-none shadow-sm"
          value={coursePriceInput}
          onChange={(event) => setCoursePriceInput(event.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-700 ml-1">Course Quantity</label>
        <input
          type="number"
          placeholder="Quantity"
          className="w-full p-2 rounded-md border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-gray-400 outline-none shadow-sm"
          ref={quantityInputRef}
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-700 ml-1">Course Category</label>
        <input
          type="text"
          placeholder="Category"
          className="w-full p-2 rounded-md border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-gray-400 outline-none shadow-sm"
          ref={categoryInputRef}
          required
        />
      </div>

      <div className="flex items-center gap-2 ml-1">
        <input
          type="checkbox"
          className="w-4 h-4 rounded text-gray-700 focus:ring-gray-400"
          checked={isAccessingFree}
          onChange={(event) => setIsAccessingFree(event.target.checked)}
        />
        <label className="text-sm text-gray-700">Free Access</label>
      </div>

      <button
        type="submit"
        className="bg-gray-800 text-white px-6 py-2 rounded-md w-fit mt-2 hover:bg-gray-700 transition-colors shadow font-semibold"
      >
        {itemInEditMode ? "Update Course" : "Add New Course"}
      </button>
    </form>
  );
};

export default CourseForm;
