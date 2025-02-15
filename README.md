# 🎬 Movie Finder Web App

🚀 Website pencari film menggunakan **React.js, JavaScript, Tailwind CSS, dan OMDB API**. Aplikasi ini memungkinkan pengguna mencari informasi film secara real-time dan menampilkan detail lengkap seperti poster, tahun rilis, rating, dan sinopsis.

🔗 **Demo:** [Movie Finder Web App](https://cari-film-8ehcbbmii-tamzidans-projects.vercel.app/)

## 🛠 Teknologi yang Digunakan
- **Frontend:** React.js, JavaScript
- **Styling:** Tailwind CSS
- **API:** OMDB API
- **State Management:** React Hooks (useState, useEffect)

## ✨ Fitur Utama
- 🔍 **Pencarian Film Real-Time** – Menampilkan hasil pencarian langsung saat pengguna mengetik.
- 🎞️ **Detail Film** – Menampilkan informasi lengkap termasuk rating IMDb dan deskripsi film.
- ⏳ **Loading Indicator** – Feedback saat data sedang dimuat dari API.
- 📱 **Desain Responsif** – Menggunakan Tailwind CSS agar tampil optimal di berbagai perangkat.

## 📦 Cara Menjalankan Project
1. **Clone Repository:**  
   ```bash
   git clone https://github.com/username/movie-finder.git
   cd WebsiteCariFilm
   ```
2. **Instal Dependencies:**  
   ```bash
   npm install  # atau pnpm install / yarn install
   ```
3. **Jalankan Project:**  
   ```bash
   npm run dev  # atau pnpm run dev / yarn dev
   ```
4. **Buka di Browser:**  
   Akses `http://localhost:5173` untuk melihat aplikasi.

## 🔧 Konfigurasi API Key
1. Daftar di [OMDB API](https://www.omdbapi.com/) untuk mendapatkan API Key.
2. Buka file `MovieLanding.jsx` di src/components dan ganti:
   ```key
   const API_KEY = 'ganti_omdb_api_key_ini'; 
   ```
3. Restart server untuk menerapkan perubahan.

## 📷 Screenshot
![Movie Finder Screenshot](https://i.postimg.cc/hvQfD6gn/Screenshot-2025-02-16-042855.png)
![Movie Finder Screenshot](https://i.postimg.cc/BbN4GCP3/Screenshot-2025-02-16-043601.png)
![Movie Finder Screenshot](https://i.postimg.cc/VvtnGdJX/Screenshot-2025-02-16-042918.png)

## 🤝 Kontribusi
Pull request selalu diterima! Pastikan untuk mendiskusikan perubahan besar sebelum mengajukan PR.

## 📜 Lisensi
Project ini menggunakan lisensi **MIT**.

---
💡 **Dibuat oleh:** [Tamzidan](https://github.com/tamzidan)
