import React, { useState } from "react";
import CourseForm from "./CourseForm";
import CourseTable from "./CourseTable";

const Home = () => {
  const [catalogItems, setCatalogItems] = useState([]);
  const [activeEditItem, setActiveEditItem] = useState(null);
  //create course 
  const appendCatalogItem = (incomingItem) => {
    setCatalogItems([...catalogItems, { ...incomingItem, id: Date.now() }]);
  };
  //delete course 
  const removeCatalogItem = (itemId) => {
    setCatalogItems(catalogItems.filter((catalogItem) => catalogItem.id !== itemId));
  };

  const patchCatalogItem = (editedItem) => {
    setCatalogItems(
      catalogItems.map((catalogItem) =>
        catalogItem.id === editedItem.id ? editedItem : catalogItem,
      ),
    );
    setActiveEditItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-20 font-sans">
      <div className="max-w-6xl mx-auto">
      
        <CourseForm
          onCreateItem={appendCatalogItem}
          itemInEditMode={activeEditItem}
          onSaveEditedItem={patchCatalogItem}
        />

        <CourseTable
          catalogItems={catalogItems}
          onRemoveItem={removeCatalogItem}
          onStartEditItem={(selectedItem) => setActiveEditItem(selectedItem)}
        />
      </div>
    </div>
  );
};

export default Home;
