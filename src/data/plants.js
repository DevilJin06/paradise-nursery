// sample plant data, two sections: Aromatic & Medicinal
// replace thumbnail with real images / urls if you like
import { v4 as uuid } from 'uuid';

const plants = [
  {
    id: uuid(),
    name: "Lavender",
    section: "Aromatic Plants",
    description: "Fragrant flowering plant. Great for indoors and calming scent.",
    price: 12.50,
    thumbnail: "https://images4.alphacoders.com/747/747894.jpg"
  },
  {
    id: uuid(),
    name: "Rosemary",
    section: "Aromatic Plants",
    description: "Aromatic evergreen with needle-like leaves.",
    price: 9.00,
    thumbnail: "https://www.treehugger.com/thmb/ybK465NfbOutqqv9uEQFz2jap_s=/4632x3744/filters:no_upscale():max_bytes(150000):strip_icc()/blossoming-rosemary-plant-480708916-0a23ac6de5364254aee1d32542d4a6df.jpg"
  },
  {
    id: uuid(),
    name: "Aloe Vera",
    section: "Medicinal Plants",
    description: "Succulent used to soothe skin and minor burns.",
    price: 15.00,
    thumbnail: "https://wallpaperaccess.com/full/1463934.jpg"
  },
  {
    id: uuid(),
    name: "Tulsi (Holy Basil)",
    section: "Medicinal Plants",
    description: "Common herbal plant used in many home remedies.",
    price: 8.75,
    thumbnail: "https://manthanhub.com/wp-content/uploads/2022/05/image-1.png"
  }
];

export default plants;
