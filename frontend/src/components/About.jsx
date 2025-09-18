import React from 'react';

export default function About() {
  return (
    <section id="about" className="mt-12 bg-white rounded-lg shadow p-8">
      <h3 className="text-2xl font-semibold mb-4">About This Project</h3>
      <p className="text-gray-700 leading-relaxed">
        This demo full-stack application demonstrates a clean contact workflow. The backend uses Node.js, Express and MongoDB to persist messages securely.
        The frontend is built with React and Tailwind for fast styling. Students will learn frontend UI sections (About, Services, FAQs) plus server-side validation and database integration.
      </p>
      <ul className="mt-4 list-disc ml-6 text-gray-700">
        <li>Clear API design</li>
        <li>Form validation (client & server)</li>
        <li>Database integration (MongoDB)</li>
      </ul>
    </section>
  );
}
