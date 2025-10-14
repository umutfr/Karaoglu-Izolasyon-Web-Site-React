import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [form, setForm] = useState({ user_name: '', user_email: '', message: '' });
  const formRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
    ).then(() => {
      alert('Mesaj gönderildi!');
      setForm({ user_name: '', user_email: '', message: '' });
    }).catch(() => alert('Bir hata oluştu!'));
  };

  return (
    <form ref={formRef} className="w-full flex flex-col gap-3 md:gap-4" onSubmit={handleSubmit}>
      <h3 className="text-white text-sm md:text-xl text-center">Bize Ulaşın</h3>
      <label className="text-xs md:text-sm text-white/70 md:text-center" for="soru">Sorularınız veya talepleriniz için aşağıdaki formu doldurabilirsiniz.</label>
      
      <label className="text-white text-sm md:text-base" for="ad">Adınız</label>
      <input
        type="text"
        name="user_name"
        placeholder="Adınız"
        value={form.user_name}
        onChange={handleChange}
        className="p-3 md:p-4 rounded-lg md:rounded-xl border-2 border-white/20 bg-black text-white text-sm md:text-base placeholder-white/70 focus:border-red-700 outline-none transition-all duration-300"
        required
      />

      <label className="text-white text-sm md:text-base" for="email">Email</label>
      <input
        type="email"
        name="user_email"
        placeholder="Email"
        value={form.user_email}
        onChange={handleChange}
        className="p-3 md:p-4 rounded-lg md:rounded-xl border-2 border-white/20 bg-black text-white text-sm md:text-base placeholder-white/70 focus:border-red-700 outline-none transition-all duration-300"
        required
      />

      <label className="text-white text-sm md:text-base" for="mesaj">Mesajınız</label> 
      <textarea
        name="message"
        placeholder="Mesajınız"
        value={form.message}
        onChange={handleChange}
        className="p-3 md:p-4 rounded-lg md:rounded-xl border-2 border-white/20 bg-black text-white text-sm md:text-base placeholder-white/70 focus:border-red-700 outline-none transition-all duration-300 h-32 md:h-40 resize-none"
        required
      />
      <input
      type="hidden"
      name="time"
      value={new Date().toLocaleString()}
      />
      <button
        type="submit"
        className="bg-red-700 hover:bg-white hover:text-red-700 text-white font-bold py-3 md:py-4 rounded-lg md:rounded-xl transition-all duration-300 text-sm md:text-base cursor-pointer"
      >
        Gönder
      </button>
    </form>
  );
};

export default ContactForm;
