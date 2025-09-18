import React from 'react';

const services = [
  { title: 'Web Development', desc: 'React, Node.js, Express, REST APIs and MongoDB.' },
  { title: 'UI Design', desc: 'Responsive UI with Tailwind and accessibility best practices.' },
  { title: 'Deployment', desc: 'Deploy backend and frontend to cloud platforms (Heroku, Vercel, Railway).' },
];

export default function Services() {
  return (
    <section id="services" className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((s) => (
        <div key={s.title} className="bg-slate-50 rounded-lg p-6 shadow hover:shadow-lg transition">
          <h4 className="text-xl font-medium mb-2">{s.title}</h4>
          <p className="text-gray-600">{s.desc}</p>
        </div>
      ))}
    </section>
  );
}
