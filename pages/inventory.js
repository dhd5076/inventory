import { useState } from 'react';

export default function Inventory() {
    // Example inventory data
    const [inventoryItems, setInventoryItems] = useState([
        { id: 1, location: 'Kitchen', category: 'Vegetables', name: 'Tomatoes', count: 10, countUnit: 'kg', unitPrice: 2.5 },
        { id: 2, location: 'Pantry', category: 'Vegetables', name: 'Onions', count: 5, countUnit: 'kg', unitPrice: 1.5 },
        { id: 3, location: 'Freezer', category: 'Vegetables', name: 'Potatoes', count: 15, countUnit: 'kg', unitPrice: 3.0 },
        // Add more inventory items as needed
    ]);

    const handleEditItem = (id) => {
        // Handle edit item logic here
        console.log(`Edit item ${id}`);
    };

    const handleCreateItem = () => {
        // Handle create new item logic here
        console.log('Create new item');
    };

    // Calculate total values
    const totalItems = inventoryItems.length;
    const totalCount = inventoryItems.reduce((total, item) => total + item.count, 0);
    const totalCost = inventoryItems.reduce((total, item) => total + item.count * item.unitPrice, 0).toFixed(2);

    return (
        <div className="container mx-auto bg-white">
            <h1 className="text-3xl font-bold text-center p-4">Inventory</h1>
            <div className="flex justify-end mb-4">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleCreateItem}
                >
                    New Item
                </button>
            </div>
            <table className="w-full border-collapse border border-2">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-left">ID</th>
                        <th className="px-4 py-2 text-left">Location</th>
                        <th className="px-4 py-2 text-left">Category</th>
                        <th className="px-4 py-2 text-left">Name</th>
                        <th className="px-4 py-2 text-right">Count</th>
                        <th className="px-4 py-2 text-left">Count Unit</th>
                        <th className="px-4 py-2 text-right">Unit Price ($)</th>
                        <th className="px-4 py-2 text-right">Total Cost ($)</th>
                        <th className="px-4 py-2 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {inventoryItems.map(item => (
                        <tr key={item.id}>
                            <td className="border border-2 px-4 py-2">{item.id}</td>
                            <td className="border border-2 px-4 py-2">{item.location}</td>
                            <td className="border border-2 px-4 py-2">{item.category}</td>
                            <td className="border border-2 px-4 py-2">{item.name}</td>
                            <td className="border border-2 px-4 py-2 text-right">{item.count}</td>
                            <td className="border border-2 px-4 py-2">{item.countUnit}</td>
                            <td className="border border-2 px-4 py-2 text-right">{item.unitPrice}</td>
                            <td className="border border-2 px-4 py-2 text-right">{(item.count * item.unitPrice).toFixed(2)}</td>
                            <td className="border border-2 px-4 py-2">
                                <button
                                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                                    onClick={() => handleEditItem(item.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                    onClick={() => handleEditItem(item.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td className="border border-2 px-4 py-2 font-bold" colSpan="7">Total</td>
                        <td className="border border-2 px-4 py-2 font-bold text-right">{totalCost}</td>
                        <td className="border border-2 px-4 py-2">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
