import {ScrollShadow} from "@nextui-org/react";
import React from 'react';
 
export default function AboutUs() {
  return (
    <ScrollShadow className="  h-screen">

    <main className='my-20'>
      <div className="container mx-auto px-4 py-16 ">
      <h1 className="text-center font-bold text-4xl mb-8">Tentang Kami</h1>

      <p className="text-lg text-center mb-8">
        Selamat datang di <strong>[Nama Perusahaan]</strong>, penyedia solusi website profesional yang berkomitmen membantu bisnis Anda tumbuh dan sukses di era digital. Kami memahami bahwa di dunia yang semakin terhubung secara online, memiliki kehadiran digital yang kuat sangat penting. Itulah sebabnya kami hadir untuk menciptakan website yang tidak hanya menarik, tetapi juga fungsional dan dioptimalkan untuk pertumbuhan bisnis Anda.
      </p>

      <h2 className="font-bold text-2xl mb-4">Mengapa Memilih Kami?</h2>
      <ul className="list-disc list-inside mb-8">
        <li><strong>Kustomisasi Penuh:</strong> Setiap bisnis unik, begitu pula dengan website Anda. Kami menawarkan layanan yang disesuaikan untuk memenuhi kebutuhan spesifik Anda.</li>
        <li><strong>Desain Menarik & Modern:</strong> Kami menggabungkan kreativitas dengan fungsionalitas, menghadirkan desain yang fresh, estetis, dan mudah diakses oleh pengguna.</li>
        <li><strong>SEO & Kecepatan:</strong> Website yang kami buat tidak hanya terlihat bagus, tetapi juga dioptimalkan untuk mesin pencari dan performa kecepatan yang optimal, membantu Anda mendapatkan lebih banyak pelanggan potensial.</li>
        <li><strong>Pengalaman Luas:</strong> Tim kami terdiri dari profesional yang berpengalaman dalam pembuatan website dengan berbagai teknologi terbaru, seperti React.js, Node.js, dan CMS populer.</li>
        <li><strong>Dukungan Pelanggan Terbaik:</strong> Kami hadir untuk memberikan panduan dan support, mulai dari perencanaan hingga setelah website diluncurkan, memastikan Anda selalu mendapatkan hasil maksimal dari investasi Anda.</li>
      </ul>

      <h2 className="font-bold text-2xl mb-4">Layanan Kami</h2>
      <p className="text-lg mb-8">
        Kami menawarkan berbagai layanan yang dapat membantu meningkatkan visibilitas dan efektivitas bisnis Anda secara online, termasuk:
      </p>
      <ul className="list-disc list-inside mb-8">
        <li>Pembuatan Website Kustom</li>
        <li>Pengembangan E-commerce</li>
        <li>Desain UI/UX yang Responsif</li>
        <li>Optimasi SEO & Kecepatan</li>
        <li>Maintenance & Support Berkala</li>
      </ul>

      <p className="text-lg">
        Di <strong>[Nama Perusahaan]</strong>, kami tidak hanya membuat website, kami membantu menciptakan solusi digital yang berdampak bagi bisnis Anda. Mulailah perjalanan digital Anda bersama kami dan jadikan kehadiran online Anda lebih kuat dari sebelumnya!
      </p>
    </div>
    </main>
    </ScrollShadow>

  );
}
