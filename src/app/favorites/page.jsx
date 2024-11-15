'use client';
import { useState, useEffect } from 'react';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-8">Mis Favoritos</h1>
      {favorites.length === 0 ? (
        <p className="text-center text-white">No tienes cómics favoritos aún.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {favorites.map((comic) => (
            <div key={comic.id} className="bg-black text-white p-4 rounded-lg shadow-md">
              <img
                src={comic.thumbnail ? `${comic.thumbnail.path}.${comic.thumbnail.extension}` : 'https://via.placeholder.com/150'}
                alt={comic.title}
                className="w-full h-64 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-bold">{comic.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
