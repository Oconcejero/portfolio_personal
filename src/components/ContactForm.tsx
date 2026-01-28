"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("Error enviando email:", err);
      setError(true);
    }
  };

  return (
    <section className="px-6 sm:px-8 md:px-12 lg:px-20 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl text-black font-bold mb-6">CONTACTA CONMIGO</h2>
        <p className="text-gray-700 mb-10">
          Si quieres contactar conmigo estaré encantado y te responderé lo antes
          posible.
        </p>

        {success && (
          <p className="text-green-600 font-semibold mb-6">
            ¡Mensaje enviado correctamente!
          </p>
        )}

        {error && (
          <p className="text-red-600 font-semibold mb-6">
            Hubo un error al enviar el mensaje.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campos */}
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
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 text-black"
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
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 text-black"
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
              value={formData.subject}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 text-black"
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
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 text-black"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#747474] text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
          >
            ENVIAR MENSAJE
          </button>
        </form>
      </div>
    </section>
  );
}
