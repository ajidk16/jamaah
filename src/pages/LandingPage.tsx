import {
  IcSearch,
  IcTambahPaket,
  IcTambahStarting,
  IcTanggal,
} from '../assets/icons';
import { PMecca } from '../assets/png';
import { Button, Header } from '../components';

const searchPacket = [
  {
    icon: IcTanggal,
    title: 'keberangkatan',
    desc: 'Tentukan bulan keberangkatan',
  },
  {
    icon: IcTambahPaket,
    title: 'Paket',
    desc: 'Tentukan paket yang Anda inginkan',
  },
  {
    icon: IcTambahStarting,
    title: 'Tipe Kamar',
    desc: 'Tentukan tipe kamar dan lokasi starting',
  },
];

function LandingPage() {
  return (
    <main className="px-12 py-8">
      <Header />
      <section className="relative w-full rounded-2xl mt-7">
        <img src={PMecca} alt="mecca" className="w-full h-690 absolute -z-10" />
        <div className="text-white p-16">
          <h1 className="text-40 font-semibold mt-10 mb-5">
            Haji, Umrah, Tabungan, Jasa Badal
          </h1>
          <p className="text-24 mb-10 md:w-[660px]">
            “ Umrah ke umrah merupakan kafarah (dosa) di antara keduanya.
            Sedangkan haji mabrur tiada balasan baginya kecuali surga ” HR
            Malik, Bukhari
          </p>
          <Button title="Booking Paket" />
          <div className="px-10 py-8 flex items-center bg-white gap-8 rounded-2xl mt-24">
            <div className="flex-1 flex items-center justify-between">
              {searchPacket.map(({ icon, title, desc }, idx) => (
                <div key={`paket-${idx}`} className="flex gap-2">
                  <div>
                    <img src={icon} alt="" />
                  </div>
                  <div>
                    <h3 className="text-black capitalize">{title}</h3>
                    <p className="text-icongray">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Button icon={IcSearch} title="Cari Paket" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
