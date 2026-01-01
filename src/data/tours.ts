const generateWaLink = (title: string) => {
  const message = `Halo Admin Explora tour & travel,

Saya tertarik untuk memesan *${title}*.
Boleh minta info lengkapnya?

Terima kasih
`;

  return `https://wa.me/${6281210272198}?text=${encodeURIComponent(message)}`;
};

export const allTours = [
  {
    image: "/trending/museum-bogor.jpg",
    tag: "Edukasi",
    price: "Rp 393.000",
    title: "Paket 3 Museum di Bogor",
    days: "1 Hari Full Trip",
    location: "Bogor, Jawa Barat",
    bookUrl: generateWaLink("Paket 3 Museum di Bogor"),
  },
  {
    image: "/trending/pulau-seribu.jpg",
    tag: "Island Trip",
    price: "Rp 500.000",
    title: "Wisata Pulau Seribu 2D1N",
    days: "2 Hari 1 Malam",
    location: "Pulau Seribu, Jakarta",
    bookUrl: generateWaLink("Wisata Pulau Seribu 2D1N"),
  },
];