import MarvelAPI from './components/MarvelAPI';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-red-600 mb-8">Bienvenido a la aplicación Marvel</h1>
        <MarvelAPI />
      </div>
    </div>
  );
}
