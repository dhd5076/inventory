import { useState } from 'react';

export default function PrepList() {
    // Example prep list data
    const [prepListItems, setPrepListItems] = useState([
        { id: 1, ingredient: 'Tomatoes', unit: 'kg', onHand: 3, par: 10 },
        { id: 2, ingredient: 'Onions', unit: 'kg', onHand: 2, par: 8 },
        { id: 3, ingredient: 'Potatoes', unit: 'kg', onHand: 4, par: 6 },
        // Add more prep list items as needed
    ]);

    // Calculate "To Prep" value
    const calculateToPrep = (onHand, par) => {
        return Math.max(par - onHand, 0);
    };

    return (
        <div className="container mx-auto bg-white">
            <h1 className="text-3xl font-bold text-center p-4">Prep List</h1>
            <table className="w-full border-collapse border border-2">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-left">ID</th>
                        <th className="px-4 py-2 text-left">Ingredient</th>
                        <th className="px-4 py-2 text-right">Unit</th>
                        <th className="px-4 py-2 text-right">Par</th>
                        <th className="px-4 py-2 text-right">On Hand</th>
                        <th className="px-4 py-2 text-right">To Prep</th>
                    </tr>
                </thead>
                <tbody>
                    {prepListItems.map(item => (
                        <tr key={item.id}>
                            <td className="border border-2 px-4 py-2">{item.id}</td>
                            <td className="border border-2 px-4 py-2">{item.ingredient}</td>
                            <td className="border border-2 px-4 py-2 text-right">{item.unit}</td>
                            <td className="border border-2 px-4 py-2 text-right">{item.par}</td>
                            <td className="border border-2 px-4 py-2 text-right">{item.onHand}</td>
                            <td className="border border-2 px-4 py-2 text-right">{calculateToPrep(item.onHand, item.par)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
