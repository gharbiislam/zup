function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../assets/img/project", false, /\.(png|jpe?g|svg|webp)$/)
);

export const project = [
  {
    title: 'X-ASVII',
    slug: 'x-asvii',
    text: 'This project highlights our approach to strategy, design, and execution—carefully tailored to meet unique goals and deliver meaningful, measurable results.',
    category: ['3D', 'Motion'],
    link: 'https://www.framer.com/@nick404/?via=jfjl68q&dub_id=2st0agffftJHFjej',
    img: [
      images['img1_1.png'],
      images['img1_2.png'],
      images['img1_3.png'],
      images['img1_4.png'],
    ],
  },
  {
    title: 'Viuso Lui',
    slug: 'viuso-lui',
    text: 'This project highlights our approach to strategy, design, and execution—carefully tailored to meet unique goals and deliver meaningful, measurable results.',
    category: ['Branding'],
    link: 'https://www.framer.com/@nick404/?via=jfjl68q&dub_id=2st0agffftJHFjej',
    img: [
      images['img2_1.png'],
      images['img2_2.png'],
      images['img2_3.png'],
    ],
  },
  {
    title: 'Glasso',
    slug: 'glasso',
    text: 'This project highlights our approach to strategy, design, and execution—carefully tailored to meet unique goals and deliver meaningful, measurable results.',
    category: ['3D', 'Motion'],
    link: 'https://www.framer.com/@nick404/?via=jfjl68q&dub_id=2st0agffftJHFjej',
    img: [
      images['img3_1.png'],
      images['img3_2.png'],
      images['img3_3.png'],
      images['img3_4.png'],
    ],
  },
  {
    title: 'Caligraphyst',
    slug: 'caligraphyst',
    text: 'This project highlights our approach to strategy, design, and execution—carefully tailored to meet unique goals and deliver meaningful, measurable results.',
    category: ['Type', 'Branding'],
    link: 'https://www.framer.com/@nick404/?via=jfjl68q&dub_id=2st0agffftJHFjej',
    img: [
      images['img4_1.png'],
      images['img4_2.png'],
      images['img4_3.png'],
    ],
  },
  {
    title: 'Int Rio',
    slug: 'int-rio',
    text: 'This project highlights our approach to strategy, design, and execution—carefully tailored to meet unique goals and deliver meaningful, measurable results.',
    category: ['Interior'],
    link: 'https://www.framer.com/@nick404/?via=jfjl68q&dub_id=2st0agffftJHFjej',
    img: [
      images['img5_1.png'],
      images['img5_2.png'],
      images['img5_3.png'],
      images['img5_4.png'],
      images['img5_5.png'],
    ],
  },
  {
    title: 'Ilustro',
    slug: 'ilustro',
    text: 'This project highlights our approach to strategy, design, and execution—carefully tailored to meet unique goals and deliver meaningful, measurable results.',
    category: ['Illustration', 'Branding'],
    link: 'https://www.framer.com/@nick404/?via=jfjl68q&dub_id=2st0agffftJHFjej',
    img: [
      images['img6_1.png'],
      images['img6_2.png'],
      images['img6_3.png'],
      images['img6_4.png'],
      images['img6_5.png'],
    ],
  },
];
