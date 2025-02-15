import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const HelpPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Bagaimana cara mencari film?",
      answer: "Anda dapat mencari film dengan mengetikkan judul film di kotak pencarian yang tersedia di halaman utama. Anda juga bisa menggunakan filter kategori untuk menemukan film berdasarkan genre."
    },
    {
      question: "Apakah informasi film selalu diperbarui?",
      answer: "Ya, kami selalu memperbarui informasi film secara berkala menggunakan data dari OMDB API untuk memastikan informasi yang kami sajikan akurat dan terkini."
    },
    {
      question: "Mengapa beberapa film tidak memiliki poster?",
      answer: "Beberapa film mungkin tidak memiliki poster karena keterbatasan data dari sumber kami. Dalam kasus ini, kami menampilkan gambar placeholder sebagai gantinya."
    },
    {
      question: "Bagaimana cara menonton film?",
      answer: "WebFilm adalah platform informasi film dan tidak menyediakan layanan streaming. Untuk menonton film, Anda akan diarahkan ke platform streaming resmi atau IMDb melalui tombol yang tersedia di detail film."
    },
    {
      question: "Apakah WebFilm gratis?",
      answer: "Ya, WebFilm sepenuhnya gratis untuk digunakan. Anda dapat mencari dan melihat informasi film tanpa biaya apapun."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 gradient-text">Pusat Bantuan</h1>

        {/* Quick Help Section */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Bantuan Cepat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
              <h3 className="font-semibold mb-2">Pencarian Film</h3>
              <p className="text-sm text-gray-300">Pelajari cara mencari film dengan mudah</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
              <h3 className="font-semibold mb-2">Informasi Film</h3>
              <p className="text-sm text-gray-300">Pahami detail informasi yang tersedia</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
              <h3 className="font-semibold mb-2">Kategori Film</h3>
              <p className="text-sm text-gray-300">Temukan film berdasarkan kategori</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Pertanyaan Umum</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-700 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-700">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            Tidak menemukan jawaban yang Anda cari?
          </p>
          <button
            onClick={() => window.location.href = "/contact"}
            className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
          >
            Hubungi Kami
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;