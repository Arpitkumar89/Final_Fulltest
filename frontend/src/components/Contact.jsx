import React, { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, msg: null, error: false });

  const validateClient = (f) => {
    if (!f.name || f.name.trim().length < 2) return 'Name must be at least 2 characters.';
    if (!f.email || !/^\S+@\S+\.\S+$/.test(f.email)) return 'Enter a valid email address.';
    if (!f.message || f.message.trim().length < 5) return 'Message must be at least 5 characters.';
    return null;
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, msg: null, error: false });

    const clientError = validateClient(form);
    if (clientError) {
      return setStatus({ loading: false, msg: clientError, error: true });
    }

    try {
      const res = await axios.post('http://localhost:5000/api/contacts', form);
      setStatus({ loading: false, msg: res.data.message || 'Sent!', error: false });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to send message.';
      setStatus({ loading: false, msg: message, error: true });
    }
  };

  return (
    <section id="contact" className="mt-10 bg-gradient-to-r from-white to-slate-50 p-6 rounded-lg shadow">
      <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows={5} className="w-full border rounded px-3 py-2" required />
        </div>
        <div className="flex items-center gap-4">
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded" disabled={status.loading}>
            {status.loading ? 'Sending...' : 'Send Message'}
          </button>
          {status.msg && (
            <div className={`${status.error ? 'text-red-600' : 'text-green-600'}`}>
              {status.msg}
            </div>
          )}
        </div>
      </form>
    </section>
  );
}
