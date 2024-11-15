'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import md5 from 'md5';

export default function MarvelAPI() {
  const [comics, setComics] = useState([]);
  const [error, setError] = useState(null);
  const [characters, setCharacters] = useState({});
  const [favorites, setFavorites] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchMarvelData = async () => {
      const ts = new Date().getTime();
      const publicKey = 'f9899416eeb0ee2409c67b175524148c';
      const privateKey = 'f9b6ff6d0dc8821e48f2a9768c6aa46405d362ab';
      const hash = md5(ts + privateKey + publicKey);

      try {
        const response = await fetch(
          `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=90`
        );
        if (!response.ok) {
          throw new Error('Error al obtener datos');
        }
        const data = await response.json();
        const filteredComics = data.data.results.filter(comic => {
          const { path, extension } = comic.thumbnail;
          const imageUrl = `${path}.${extension}`;
          return imageUrl !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
        });
        setComics(filteredComics);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMarvelData();
  }, []);

  const handleComicClick = (comicId) => {
    router.push(`/comics/${comicId}`);
  };

  const handleFavoriteClick = (comicId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(comicId)) {
        return prevFavorites.filter((id) => id !== comicId);
      }
      return [...prevFavorites, comicId];
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-red-600">Últimos Cómics de Marvel</h2>
      {error && <p className="text-center text-red-400">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4">
        {comics.length > 0 ? (
          comics.map((comic) => {
            const { path, extension } = comic.thumbnail;
            const imageUrl = `${path}.${extension}`;
            const isFavorite = favorites.includes(comic.id);

            return (
              <div
                key={comic.id}
                className="bg-gray-800 rounded-lg shadow-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                onClick={() => handleComicClick(comic.id)}
              >
                <img
                  src={imageUrl}
                  alt={comic.title}
                  className="w-full h-64 object-cover transition-opacity hover:opacity-80"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white">{comic.title}</h3>
                  <button
                    className={`mt-4 w-full px-4 py-2 text-white rounded ${isFavorite ? 'bg-red-600' : 'bg-gray-700'} hover:bg-red-700 transition-colors`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFavoriteClick(comic.id);
                    }}
                  >
                    {isFavorite ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-400">Cargando los últimos ejemplares..</p>
        )}
      </div>
    </div>
  );
}
