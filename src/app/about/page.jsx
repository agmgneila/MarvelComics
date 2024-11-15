export default function AboutPage() {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <h1 className="text-5xl font-extrabold text-center text-red-600 mb-6">
          Acerca de
        </h1>
  
        <p className="text-center text-white text-lg mb-8">
          Bienvenido a nuestra aplicación Marvel. Aquí puedes explorar y descubrir todo sobre los cómics de Marvel, sus personajes y más.
        </p>
  
        <section className="bg-gray-900 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-center text-red-600 mb-4">
            ¿Qué es esta aplicación?
          </h2>
          <p className="text-lg text-white text-center">
            Esta aplicación te permite explorar el universo de Marvel Comics de forma sencilla e intuitiva. Con ella, puedes descubrir cómics, personajes y más, todo en un solo lugar.
          </p>
        </section>
  
        <section className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-red-600 mb-4">
            Contacto
          </h2>
          <p className="text-lg text-white text-center">
            Si tienes preguntas o comentarios, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte.
          </p>
          <div className="flex justify-center mt-4">
            <a href="mailto:soporte@marvelapp.com" className="text-red-600 font-semibold">
              soporte@marvelapp.com
            </a>
          </div>
        </section>
      </div>
    );
  }
  