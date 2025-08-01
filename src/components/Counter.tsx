import React, {useState} from "react";

export const Counter: React.FC=()=>{
    const[count, setCount] = useState(0);

    return(
        <div className="bg-white rounded shadow p-6 w-64 text-center">
            <h2 className="text-xl font-bold mb-4">Счётчик</h2>
            <div className="text-3xl mb-4">{count}</div>
            <div className="flex justify-between">
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => setCount(count - 1)}
                >
                    −
                </button>
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    onClick={() => setCount(count + 1)}
                >
                    +
                </button>
            </div>
        </div>
    );
};
