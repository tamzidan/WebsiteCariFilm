import React from 'react';

const AboutPage = () => {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8">Tentang Kami</h1>
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Selamat datang di WebFilm</h2>
            <p className="text-gray-300 mb-4">
              WebFilm adalah platform yang didedikasikan untuk para pencinta film. Kami menyediakan
              informasi lengkap tentang berbagai film dari seluruh dunia.
            </p>
          </div>

        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Misi Kami</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Menyediakan informasi film yang akurat dan terkini</li>
            <li>Membangun komunitas pecinta film yang aktif dan inklusif</li>
            <li>Mendukung industri perfilman dengan ulasan yang objektif</li>
            <li>Memberikan pengalaman pengguna terbaik dalam mencari informasi film</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Tim Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold mb-2">Tamzidan D. Frontend</h3>
              <p className="text-gray-400">Frontend Developer</p>
            </div>
            <div className="text-center">
            <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                    src="/tamzidan.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                />
            </div>
              <h3 className="font-semibold mb-2">Tamzidan Mahdiyin</h3>
              <p className="text-gray-400">Web Developer</p>
            </div>
            <div className="text-center">
            <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold mb-2">Tamzidan D. Backend</h3>
              <p className="text-gray-400">Backend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
