import React, { useState } from "react";

export const SimpleModalTailwind: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 border border-gray-500 rounded hover:bg-gray-100"
      >
        Открыть модалку
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h2 className="text-xl font-semibold mb-4">Это модальное окно</h2>
            <p className="mb-4">Здесь можно разместить любую информацию.</p>
            <button
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </>
  );
};
