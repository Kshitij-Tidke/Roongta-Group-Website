import express from "express";
import cors from "cors"

const app = express();
const PORT = 5000;

app.use(cors());

// Simulate Property Data
const properties = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/tidke/image/upload/v1727261266/d4v2ew98tbq5lsgq967r.webp',
    title: 'Roongta Grandezza',
    location: 'Govind Nagar',
    features: [
      { icon: "Move", label: '2 BHK' },
      { icon: "Move", label: '3 BHK' },
      { icon: "Move", label: 'Shops' },
    ],
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/tidke/image/upload/v1727261266/fbhcczxona9cag0kbvrw.webp',
    title: 'Roongta Shopping Centre',
    location: 'Makhmalabad',
    features: [
      { icon: "Move", label: 'Shops' },
      { icon: "Move", label: 'Offices' },
      { icon: "Move", label: 'Showrooms' },
    ],
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/tidke/image/upload/v1727261266/spxfklqyy2wqd4nmfasc.webp',
    title: 'Roongta Supremus',
    location: 'Chandak Circle',
    features: [
      { icon: "Move", label: 'Shops' },
      { icon: "Move", label: 'Offices' },
      { icon: "Move", label: 'Showrooms' },
    ],
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/tidke/image/upload/v1727261266/d4v2ew98tbq5lsgq967r.webp',
    title: 'Roongta Shopping Centre',
    location: 'RD Circle',
    features: [
      { icon: "Move", label: 'Shops' },
      { icon: "Move", label: 'Offices' },
      { icon: "Move", label: 'Showrooms' },
    ],
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/tidke/image/upload/v1727261266/nsycao8nqbsjqrzi0n7z.webp',
    title: 'Roongta Preciso',
    location: 'Serene Meadows',
    features: [
      { icon: "Move", label: '3 BHK' },
      { icon: "Move", label: 'Offices' },
      { icon: "Move", label: 'Showrooms' },
    ],
  },
];

// Create an endpoint to serve property data
app.get('/api/properties', (req, res) => {
  res.json(properties);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api/properties`);
});