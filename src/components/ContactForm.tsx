export default function ContactForm() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl text-black font-bold mb-6">CONTACTA CONMIGO</h2>
        <p className="text-gray-700 mb-10">
          Soy diseñador gráfico desde hace años que emprendió el viaje a la
          creatividad. Después de pasar por varios trabajos, la empresa en la
          que estaba como creativo y diseñador de producto, cerró
          inesperadamente dejándome en la búsqueda de qué hacer con mi futuro
          profesional.
          <br />
          El mundo de la programación siempre me pareció algo curioso y
          atractivo, he intentado indagar más de una vez sobre esta área cuando
          estudiaba mis primeros años de diseñador gráfico.
          <br />
          Ahora, buscando aprendizaje en desarrollo personal y laboral, me veo
          inmerso en este amplio mundo de la programación.
        </p>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              TU NOMBRE
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              TU EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              ASUNTO
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              MENSAJE
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
          >
            ENVIAR MENSAJE
          </button>
        </form>
      </div>
    </section>
  );
}
