import React from "react";

const CourseTable = ({ catalogItems, onRemoveItem, onStartEditItem }) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-sm">
      <table className="w-full text-left border-collapse bg-white">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="p-3 font-semibold text-gray-700">id</th>
            <th className="p-3 font-semibold text-gray-700">Course Name</th>
            <th className="p-3 font-semibold text-gray-700">Price</th>
            <th className="p-3 font-semibold text-gray-700">Quantity</th>
            <th className="p-3 font-semibold text-gray-700">Category</th>
            <th className="p-3 font-semibold text-gray-700">Free Access</th>
            <th className="p-3 font-semibold text-gray-700 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {catalogItems.map((catalogItem, rowIndex) => (
            <tr
              key={catalogItem.id}
              className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <td className="p-3 text-gray-600 font-bold">{rowIndex + 1}</td>
              <td className="p-3 text-gray-800">{catalogItem.name}</td>
              <td className="p-3 text-gray-800">${catalogItem.price}</td>
              <td className="p-3 text-gray-800">{catalogItem.quantity}</td>
              <td className="p-3 text-gray-800">{catalogItem.category}</td>
              <td className="p-3 text-gray-800">
                {catalogItem.freeAccess ? "✅" : "❌"}
              </td>
              <td className="p-3 flex justify-center gap-4">
                <button
                  onClick={() => onStartEditItem(catalogItem)}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Edit
                </button>
                <button
                  onClick={() => onRemoveItem(catalogItem.id)}
                  className="text-red-600 hover:text-red-800 font-medium"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {catalogItems.length === 0 && (
            <tr>
              <td colSpan="7" className="p-10 text-center text-gray-400 italic">
                No courses added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
