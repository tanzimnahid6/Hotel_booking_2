import Image from 'next/image';
import React from 'react';

const places = [
    {
        id: 1,
        name: 'Eiffel Tower',
        location: 'Paris, France',
        description: 'The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France.',
        imageUrl: '/eifel.jpg',
    },
    {
        id: 2,
        name: 'Louvre Museum',
        location: 'Paris, France',
        description: 'The Louvre, or the Louvre Museum, is the world\'s largest art museum and a historic monument in Paris, France.',
        imageUrl: '/museum.jpg',
    },
    {
        id: 3,
        name: 'Mont Saint-Michel',
        location: 'Normandy, France',
        description: 'Mont Saint-Michel is an island and mainland commune in Normandy, France.',
        imageUrl: '/mont.jpg',
    },
    // Add more places as needed
];

const RecommendedPlaces = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center "
            style={{ backgroundImage: "url('/hero-bg.jpg')"}}
        >
            <div className=" bg-opacity-50 min-h-screen p-8 pt-36">
                <h1 className="text-4xl font-bold text-center  mb-8">Recommended Places</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {places.map((place) => (
                        <div key={place.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={place.imageUrl} alt={place.name} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2">{place.name}</h2>
                                <p className="text-gray-600 mb-4">{place.location}</p>
                                <p className="text-gray-700 mb-4">{place.description}</p>
                                <button
                                    className="bg-primary hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecommendedPlaces;
