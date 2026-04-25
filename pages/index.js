import Image from "next/image";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenRuler,
  faBuilding,
  faCalculator,
  faHouse,
  faScrewdriverWrench,
  faCouch,
} from "@fortawesome/free-solid-svg-icons";

const message = "Halo Kita Renovin, saya tertarik untuk renovasi.";
const whatsappLink = `https://wa.me/6281563817446?text=${encodeURIComponent(message)}`;

const services = [
  {
    icon: faPenRuler,
    title: "Jasa Pembuatan Desain",
    desc: "Desain arsitektur sesuai kebutuhan dengan konsep estetis dan fungsional",
  },
  {
    icon: faBuilding,
    title: "Jasa Perencanaan Struktur",
    desc: "Perencanaan struktur bangunan yang kuat, aman, dan sesuai standar",
  },
  {
    icon: faCalculator,
    title: "Jasa Perhitungan RAB",
    desc: "Estimasi biaya pembangunan secara detail, transparan, dan terukur",
  },
  {
    icon: faHouse,
    title: "Jasa Pembangunan Rumah",
    desc: "Pembangunan rumah dari nol hingga siap huni dengan kualitas terbaik",
  },
  {
    icon: faScrewdriverWrench,
    title: "Jasa Pemeliharaan",
    desc: "Layanan perawatan rutin untuk menjaga kondisi bangunan tetap optimal",
  },
  {
    icon: faCouch,
    title: "Jasa Interior",
    desc: "Penataan interior modern yang nyaman dan sesuai gaya Anda",
  },
];

const gallery = [
  {
    img: "/images/img-1.webp",
    title: "Ruang Tamu Modern",
    desc: "Konsep minimalis dengan warna cerah dan elegan.",
  },
  {
    img: "/images/img-2.webp",
    title: "Kamar Tidur Nyaman",
    desc: "Pencahayaan alami dan desain yang bikin rileks.",
  },
  {
    img: "/images/img-3.webp",
    title: "Dapur Fungsional",
    desc: "Layout optimal dengan peralatan modern.",
  },
];

const packages = [
  {
    name: "Paket Basic",
    price: "Mulai dari 2 Juta",
    features: [
      "Konsultasi desain",
      "Pembuatan desain 2D",
      "Estimasi RAB sederhana",
    ],
  },
  {
    name: "Paket Standard",
    price: "Mulai dari 5 Juta",
    features: [
      "Desain 2D & 3D",
      "Perencanaan struktur",
      "RAB detail & transparan",
      "Pendampingan proyek",
    ],
    highlight: true,
  },
  {
    name: "Paket Premium",
    price: "Mulai dari 10 Juta",
    features: [
      "Desain lengkap + revisi",
      "Perencanaan struktur full",
      "RAB lengkap + timeline",
      "Pembangunan hingga finishing",
      "Quality control & maintenance",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Jasa Renovasi Rumah Terpercaya | Kita Renovin</title>
        <meta
          name="description"
          content="Jasa renovasi rumah profesional dengan harga transparan. Konsultasi gratis via WhatsApp sekarang."
        />
        <meta
          name="keywords"
          content="jasa renovasi rumah, renovasi rumah murah, kontraktor rumah, renovasi dapur, renovasi kamar"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Jasa Renovasi Rumah Terpercaya" />
        <meta
          property="og:description"
          content="Konsultasi gratis renovasi rumah sekarang."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/hero.webp" />

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Kita Renovin",
              telephone: "+6281563817446",
              description: "Jasa renovasi rumah terpercaya",
            }),
          }}
        />
      </Head>

      <div className="page-wrapper">
        {/* NAVBAR */}
        <nav className="navbar">
          <div className="navbar-container">
            <div className="logo">Kita Renovin</div>

            <ul className="nav-links">
              <li>
                <a href="#galeri">Galeri</a>
              </li>
              <li>
                <a href="#layanan">Layanan</a>
              </li>
              <li>
                <a href="#kenapa">Kenapa Kami</a>
              </li>
              <li>
                <a href="#testimoni">Testimoni</a>
              </li>
            </ul>

            <a
              className="nav-cta"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Konsultasi Gratis
            </a>
          </div>
        </nav>

        <main className="page-shell">
          {/* HERO */}
          <section className="hero-section">
            <div className="hero-content">
              <h1>Ubah Rumah Lama Jadi Hunian Impian</h1>
              <p>
                Solusi renovasi rumah lengkap dengan tim profesional, desain
                modern, dan hasil yang melampaui ekspektasi Anda.
              </p>

              <a
                className="button primary-cta"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Mulai Konsultasi Gratis
              </a>
            </div>

            <div className="hero-image">
              <Image
                src="/images/hero.webp"
                alt="Rumah modern hasil renovasi"
                fill
                className="hero-img"
                priority
              />
            </div>
          </section>

          <section className="section-divider" />

          {/* GALERI */}
          <section className="gallery-section" id="galeri">
            <h2>Galeri Proyek</h2>
            <p className="section-subtitle">Hasil renovasi terbaik kami</p>

            <div className="gallery-grid">
              {gallery.map((item, index) => (
                <div className="gallery-card" key={index}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={500}
                    height={300}
                  />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA kecil */}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <a
                className="button primary-cta"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Konsultasi Gratis Sekarang
              </a>
            </div>
          </section>

          {/* SEO SECTION */}
          <section className="seo-section" id="layanan">
            <div className="seo-header">
              <h2>Jasa Renovasi Rumah Profesional & Terpercaya</h2>
              <p>
                Kita Renovin menyediakan jasa renovasi rumah mulai dari
                perbaikan kecil hingga renovasi total dengan tim berpengalaman
                dan hasil berkualitas.
              </p>
            </div>

            <div className="services-container">
              <h3>Layanan Kami</h3>
              <div className="services-grid">
                {services.map((item, index) => (
                  <div className="service-card" key={index}>
                    <div className="service-icon">
                      <FontAwesomeIcon icon={item.icon} />
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <section className="pricing-section">
              <h2>Paket Harga Renovasi</h2>
              <p className="section-subtitle">
                Pilih paket sesuai kebutuhan dan budget Anda
              </p>

              <div className="pricing-grid">
                {packages.map((item, index) => (
                  <div
                    className={`pricing-card ${item.highlight ? "highlight" : ""}`}
                    key={index}
                  >
                    <h3>{item.name}</h3>
                    <p className="price">{item.price}</p>

                    <ul>
                      {item.features.map((feature, i) => (
                        <li key={i}>✔ {feature}</li>
                      ))}
                    </ul>

                    <a
                      className="button secondary-cta"
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pilih Paket
                    </a>
                  </div>
                ))}
              </div>
            </section>

            <div className="benefits-container" id="kenapa">
              <h3>Kenapa Pilih Kami?</h3>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-number">1</div>
                  <h4>Harga Transparan</h4>
                  <p>Tidak ada biaya tersembunyi, semua jelas dari awal</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-number">2</div>
                  <h4>Konsultasi GRATIS</h4>
                  <p>Konsultasi desain dan estimasi biaya tanpa kewajiban</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-number">3</div>
                  <h4>Tim Profesional</h4>
                  <p>Arsitek dan tukang berpengalaman puluhan tahun</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-number">4</div>
                  <h4>Hasil Berkualitas</h4>
                  <p>Finishing rapi dengan material pilihan terbaik</p>
                </div>
              </div>
            </div>
          </section>

          {/* TESTIMONI */}
          <section className="testimonials-section" id="testimoni">
            <h2>Apa Kata Klien Kami</h2>

            <div className="testimonials-grid">
              {[
                {
                  name: "Rina Kusuma",
                  city: "Jakarta Selatan",
                  text: (
                    <>
                      Saya pakai jasa renovasi rumah di Jakarta dari{" "}
                      <strong>Kita Renovin</strong> untuk renovasi ruang tamu.
                      Hasilnya cepat, rapi, dan sesuai desain. Timnya
                      profesional dan komunikatif, benar-benar recommended untuk
                      renovasi rumah di Jakarta.
                    </>
                  ),
                },
                {
                  name: "Budi Santoso",
                  city: "Jakarta Barat",
                  text: (
                    <>
                      Awalnya cari kontraktor renovasi rumah murah di Jakarta,
                      akhirnya pilih <strong>Kita Renovin</strong>. Harga
                      transparan, pengerjaan cepat, dan hasilnya sangat
                      memuaskan. Cocok buat yang mau renovasi tanpa ribet.
                    </>
                  ),
                },
                {
                  name: "Siti Nurhaliza",
                  city: "Jakarta Timur",
                  text: (
                    <>
                      Renovasi kamar anak di rumah kami di Jakarta hasilnya
                      bagus banget. Desainnya modern dan pengerjaannya rapi.{" "}
                      <strong>Kita Renovin</strong> benar-benar jasa renovasi
                      rumah Jakarta yang bisa dipercaya.
                    </>
                  ),
                },
              ].map((item, index) => (
                <article className="testimonial-card" key={index}>
                  <p className="testimonial-text">"{item.text}"</p>
                  <div className="testimonial-author">
                    <strong>{item.name}</strong>
                    <span>{item.city}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* GOOGLE MAPS */}
          <section className="maps-section">
            <h2>Lokasi Kantor Kami</h2>
            <p>Kunjungi kantor kami atau lihat lokasi di peta</p>

            <div className="maps-container">
              <iframe
                src="https://www.google.com/maps?q=-6.4100290074511515,107.0493920270998&z=15&output=embed"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "16px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>

          {/* CTA */}
          <section className="cta-section">
            <h2>Siap Renovasi Rumah Impian Anda?</h2>
            <p>Dapatkan estimasi harga terbaik sekarang.</p>

            <a
              className="button primary-cta"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat via WhatsApp
            </a>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <h3>Kita Renovin</h3>
              <p>Solusi renovasi rumah terpercaya.</p>
            </div>

            <div className="footer-section">
              <h4>Kontak</h4>
              <ul>
                <li>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp: +62 815-6381-7446
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Navigasi</h4>
              <ul>
                <li>
                  <a href="#galeri">Galeri</a>
                </li>
                <li>
                  <a href="#testimoni">Testimoni</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Kita Renovin</p>
          </div>
        </footer>
      </div>
    </>
  );
}
