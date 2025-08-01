import React from "react";

type ProductCardProps = {
    title: string;
    price: number;
    imageUrl: string;
    description?: string;
};

export const ProductCardTailwind: React.FC<ProductCardProps> = ({
                                                                    title,
                                                                    price,
                                                                    imageUrl,
                                                                    description,
                                                                }) => {
    return (
        <div className="bg-white shadow rounded-lg p-4 w-64">
            <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-md" />
            <h2 className="mt-2 text-lg font-semibold">{title}</h2>
            <p className="text-gray-600 mt-1">{description}</p>
            <div className="mt-2 text-xl font-bold text-blue-600">{price} ₪</div>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                В корзину
            </button>
        </div>
    );
};