const generateWaLink = (title: string) => {
  const message = `Halo Admin Explora tour & travel,

Saya tertarik untuk memesan *${title}*.
Boleh minta info lengkapnya?

Terima kasih
`;

  return `https://wa.me/${6281210272198}?text=${encodeURIComponent(message)}`;
};

export const popularTickets = [
  {
    image: "/popular/pesawat3.png",
    title: "Tiket Pesawat",
    rating: 5,
    buyers: 1240,
    description:
      "Pilihan maskapai terbaik dengan jadwal fleksibel dan harga kompetitif untuk perjalanan anda.",
    bookUrl: generateWaLink("Tiket Pesawat"),
  },
  {
    image: "/popular/bus3.png",
    title: "Tiket Bus Antar Kota",
    rating: 4.9,
    buyers: 760,
    description:
      "Bus nyaman dengan fasilitas lengkap untuk perjalanan darat yang hemat dan praktis.",
    bookUrl: generateWaLink("Tiket Bus Antar Kota"),
  },
  {
    image: "/popular/kereta3.png",
    title: "Tiket Kereta Api",
    rating: 4.9,
    buyers: 1680,
    description:
      "Nikmati perjalanan tepat waktu dan nyaman dengan berbagai pilihan kelas kereta.",
    bookUrl: generateWaLink("Tiket Kereta Api"),
  },
  {
    image: "/popular/wisata3.png",
    title: "Paket Wisata Populer",
    rating: 4.9,
    buyers: 890,
    description:
      "Paket wisata lengkap dengan itinerary menarik, guide profesional, dan pengalaman tak terlupakan.",
    bookUrl: generateWaLink("Paket Wisata Populer"),
  },
  {
    image: "/popular/kapal3.png",
    title: "Tiket Kapal Laut",
    rating: 4.8,
    buyers: 540,
    description:
      "Perjalanan laut yang aman dan nyaman dengan jadwal rutin ke berbagai pulau di Indonesia.",
    bookUrl: generateWaLink("Tiket Kapal Laut"),
  },
  {
    image: "/popular/hotel3.png",
    title: "Hotel Favorit Traveler",
    rating: 4.7,
    buyers: 980,
    description:
      "Beragam pilihan hotel dari budget hingga premium di destinasi favorit wisatawan.",
    bookUrl: generateWaLink("Hotel Favorit Traveler"),
  },
];