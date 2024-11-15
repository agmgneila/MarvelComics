import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-extrabold text-red-600">
          <Link href="/">Marvel Comics</Link>
        </h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-red-600">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/favorites" className="text-white hover:text-red-600">
              Favoritos
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-red-600">
              Acerca de
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
