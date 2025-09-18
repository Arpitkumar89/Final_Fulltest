import React, { useState } from 'react';

const faqs = [
  { q: 'How do messages get saved?', a: 'The contact form posts data to the backend API which performs validation and stores it in MongoDB.' },
  { q: 'Can I use this for production?', a: 'For production use, configure a transactional email service (SendGrid) and secure environment variables via hosting provider.' },
  { q: 'What is client & server validation?', a: 'Client validation prevents obvious mistakes in UI; server validation ensures data integrity and security before DB write.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="mt-10 bg-white p-6 rounded-lg shadow">
      <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
      <div className="space-y-2">
        {faqs.map((f, idx) => (
          <div key={idx} className="border rounded">
            <button
              onClick={() => setOpen(open === idx ? null : idx)}
              className="w-full text-left px-4 py-3 flex justify-between items-center"
            >
              <span className="font-medium">{f.q}</span>
              <span>{open === idx ? '-' : '+'}</span>
            </button>
            {open === idx && (
              <div className="px-4 pb-3 text-gray-700">
                {f.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
