import {
  IcHaji,
  IcJasaBadal,
  IcPerjalanan,
  IcSearch,
  IcTabungan,
  IcTambahPaket,
  IcTambahStarting,
  IcTanggal,
  IcUmrah,
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

const services = [
  { icon: IcUmrah, title: 'Umroh', desc: 'Tersedia 20 paket' },
  { icon: IcHaji, title: 'Haji', desc: 'Tersedia 20 paket' },
  { icon: IcPerjalanan, title: 'Tour', desc: 'Tersedia 20 paket' },
  { icon: IcTabungan, title: 'Tabungan', desc: 'Tersedia 20 paket' },
  { icon: IcJasaBadal, title: 'Jasa Badal', desc: 'Tersedia 20 paket' },
];

function LandingPage() {
  return (
    <main className=" md:px-12 py-8">
      <Header />
      <section className="relative w-full rounded-3xl">
        <img src={PMecca} alt="mecca" className="w-full h-690 absolute -z-10" />
        <div className="text-white p-16 my-7">
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
      <section className="bg-white rounded-3xl p-8 shadow-sm">
        <h1 className="text-24 font-semibold mb-8">
          Katalog Paket <br /> Haji, Umrah, Tabungan, Jasa Badal
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {services.map(({ icon, title, desc }, idx) => (
            <div
              className="shadow bg-white flex gap-4 py-4 px-6 w-full border hover:border-green-400 rounded-2xl"
              key={`services${idx}`}
            >
              <img src={icon} alt={title} className="object-cover w-10 h-10" />
              <div>
                <h4 className="text-14 font-semibold">{title}</h4>
                <p className="text-12 text-grayblack">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
