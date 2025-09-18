import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} ArpitAcademy — Demo Project</p>
      </div>
    </footer>
  );
}
