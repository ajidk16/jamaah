import React from 'react';
import { IcSearch } from '../../assets/icons';

const Header = () => {
  return (
    <main className="flex items-center justify-between border-b pb-7">
      <section className="flex items-center gap-x-16">
        <div className="flex gap-x-2">
          <div className="w-10 h-10 bg-gray-300 rounded-md" />
          <div>
            <div className="w-20 h-5 mb-1 bg-gray-300 rounded-md" />
            <div className="w-20 h-4 bg-gray-300 rounded-md" />
          </div>
        </div>
        <ul className="flex gap-x-8 items-center">
          <li className="cursor-pointer">Artikel</li>
          <li className="cursor-pointer">Galleri</li>
          <li className="cursor-pointer">Legalitas</li>
          <li className="cursor-pointer">Tentang Kami</li>
        </ul>
      </section>
      <section className="flex items-center gap-x-6">
        <div className="bg-gray-1 rounded-2xl px-4 py-2 flex gap-x-3 mr-4 items-center">
          <img src={IcSearch} alt="search" className="cursor-pointer" />
          <input
            type="text"
            placeholder="Cari Paket"
            className="text-sm text-gray-black bg-transparent outline-none"
          />
        </div>
        <span className="text-sm font-medium">Masuk / Daftar</span>
        <button className="gradient-red px-6 py-2 rounded-md text-white font-semibold">
          Booking
        </button>
      </section>
    </main>
  );
};

export default Header;
