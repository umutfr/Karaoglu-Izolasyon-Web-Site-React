import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form,
      'YOUR_PUBLIC_KEY'
    ).then(() => {
      alert('Mesaj gönderildi!');
      setForm({ name: '', email: '', message: '' });
    }).catch(() => alert('Bir hata oluştu!'));
  };

  return (
    <form className="w-full flex flex-col gap-3 md:gap-4 items" onSubmit={handleSubmit}>
      <h3 className="text-white text-sm md:text-base">Bize Ulaşın</h3>
      <label className="text-xs md:text-sm text-white/70">Sorularınız veya talepleriniz için aşağıdaki formu doldurabilirsiniz.</label>
       <label className="text-white text-sm md:text-base">Adınız</label>
      <input
        type="text"
        name="name"
        placeholder="Adınız"
        value={form.name}
        onChange={handleChange}
        className="p-3 md:p-4 rounded-lg md:rounded-xl border-2 border-white/20 bg-black/50 text-white text-sm md:text-base placeholder-white/70 focus:border-red-900 outline-none transition-all duration-300"
        required
      />
      <label className="text-white text-sm md:text-base">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="p-3 md:p-4 rounded-lg md:rounded-xl border-2 border-white/20 bg-black/50 text-white text-sm md:text-base placeholder-white/70 focus:border-red-900 outline-none transition-all duration-300"
        required
      />
      <label className="text-white text-sm md:text-base">Mesajınız</label> 
      <textarea
        name="message"
        placeholder="Mesajınız"
        value={form.message}
        onChange={handleChange}
        className="p-3 md:p-4 rounded-lg md:rounded-xl border-2 border-white/20 bg-black/50 text-white text-sm md:text-base placeholder-white/70 focus:border-red-900 outline-none transition-all duration-300 h-32 md:h-40 resize-none"
        required
      />
      <button
        type="submit"
        className="bg-red-900 hover:bg-red-800 text-white font-bold py-3 md:py-4 rounded-lg md:rounded-xl transition-all duration-300 text-sm md:text-base"
      >
        Gönder
      </button>
    </form>
  );
};

export default ContactForm;