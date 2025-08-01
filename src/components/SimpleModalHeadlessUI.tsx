import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

export const SimpleModalHeadlessUI: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="px-4 py-2 border border-gray-500 rounded hover:bg-gray-100"
            >
                Открыть модалку
            </button>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

                <div className="fixed inset-0 flex items-center justify-center">
                    <Dialog.Panel className="bg-white p-6 rounded shadow-lg w-96">
                        <Dialog.Title className="text-xl font-bold mb-4">
                            Это модальное окно
                        </Dialog.Title>
                        <p className="mb-4">Здесь можно разместить любую информацию.</p>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Закрыть
                        </button>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
};
