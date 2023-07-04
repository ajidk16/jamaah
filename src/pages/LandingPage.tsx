import {
  IcHaji,
  IcHotelAkomodasi,
  IcJam,
  IcJasaBadal,
  IcKategori,
  IcMaskapai,
  IcPerjalanan,
  IcSearch,
  IcSeatTersisa,
  IcSudahBerangkat,
  IcTabungan,
  IcTambahPaket,
  IcTambahStarting,
  IcTanggal,
  IcTotalSeat,
  IcUmrah,
  Icdatecard,
} from '../assets/icons';
import { PImage8, PMecca } from '../assets/png';
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

interface shortFlexState {
  icon: string;
  title: string;
}

const ShortFlex = ({ icon, title }: shortFlexState) => (
  <div className="flex items-center gap-x-2">
    <img src={icon} alt="date" className="w-4 h4 object-cover" />
    <h6 className="text-12">{title}</h6>
  </div>
);

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
        <div className="grid grid-cols-4 gap-6 mt-12">
          {Array(8)
            .fill('oka')
            .map((item, idx) => (
              <div
                key={`catalog-${idx}`}
                className="shadow-sm bg-white relative"
              >
                <div className="relative">
                  <img
                    src={
                      'https://images.unsplash.com/photo-1668701649406-83c46add1b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'
                    }
                    alt="title"
                    className="h-250 w-full rounded-3xl object-cover relative"
                  />
                </div>
                <div className="rounded-2xl bg-white p-4 mb-4 shadow-md mx-4 relative -mt-10">
                  <h2 className="font-semibold">
                    Umrah Bersama Ustadz Muhammad Abduh Tuasikal
                  </h2>
                  <div className="flex justify-between items-center mt-3">
                    <ShortFlex icon={IcTotalSeat} title="45 Total Seat" />
                    <ShortFlex icon={IcSeatTersisa} title="Seat Hampir Habis" />
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center gap-2 mx-4">
                  <ShortFlex icon={Icdatecard} title="12 September 2025" />
                  <ShortFlex icon={IcJam} title="12 Hari" />
                  <ShortFlex icon={IcMaskapai} title="12 September 2025" />
                  <ShortFlex icon={IcSudahBerangkat} title="Madinah" />
                  <ShortFlex
                    icon={IcHotelAkomodasi}
                    title="12 September 2025"
                  />
                  <ShortFlex icon={IcKategori} title="Paket VIP" />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-x-2">
                    <h4 className="text-20 text-green-600 font-semibold bg-clip-text">
                      Rp 35.000.000
                    </h4>
                    / Pax
                  </div>
                  <div className="text-white">
                    <Button title="Lihat Paket" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
