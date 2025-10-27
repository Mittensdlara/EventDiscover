export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  attendees: number;
  description: string;
  organizer: string;
  price: string;
}

export const mockEvents: Event[] = [
  {
    id: 1,
    title: "Summer Music Festival",
    date: "Nov 5, 2025",
    time: "6:00 PM",
    location: "Central Park Amphitheater",
    category: "Music",
    image: "https://images.unsplash.com/photo-1743791022256-40413c5f019b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwbXVzaWMlMjBldmVudHxlbnwxfHx8fDE3NjE0ODUzNzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    attendees: 245,
    description: "Join us for an unforgettable evening of live music featuring local and international artists. Experience the best indie, rock, and electronic performances under the stars.",
    organizer: "City Events Co.",
    price: "$35"
  },
  {
    id: 2,
    title: "Contemporary Art Exhibition",
    date: "Nov 8, 2025",
    time: "10:00 AM",
    location: "Downtown Art Gallery",
    category: "Art",
    image: "https://images.unsplash.com/photo-1713779490284-a81ff6a8ffae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbnxlbnwxfHx8fDE3NjE1NjY0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    attendees: 128,
    description: "Explore cutting-edge contemporary art from emerging and established artists. This exhibition showcases diverse perspectives on modern life through painting, sculpture, and digital media.",
    organizer: "Modern Arts Foundation",
    price: "Free"
  },
  {
    id: 3,
    title: "Street Food Festival",
    date: "Nov 10, 2025",
    time: "12:00 PM",
    location: "Waterfront Plaza",
    category: "Food",
    image: "https://images.unsplash.com/photo-1608595530460-42c448e7e789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZmVzdGl2YWwlMjByZXN0YXVyYW50fGVufDF8fHx8MTc2MTQ3NDIxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    attendees: 512,
    description: "Taste your way around the world! Sample delicious street food from over 50 vendors featuring cuisines from every continent. Live cooking demos and music all day.",
    organizer: "Foodie Collective",
    price: "$15"
  },
  {
    id: 4,
    title: "Tech Innovation Summit",
    date: "Nov 12, 2025",
    time: "9:00 AM",
    location: "Convention Center",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1560523159-94c9d18bcf27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHdvcmtzaG9wfGVufDF8fHx8MTc2MTU1NzY2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    attendees: 890,
    description: "Connect with industry leaders and discover the latest in AI, blockchain, and emerging technologies. Network with innovators and attend hands-on workshops.",
    organizer: "Tech Forward",
    price: "$120"
  },
  {
    id: 5,
    title: "City Marathon 2025",
    date: "Nov 15, 2025",
    time: "7:00 AM",
    location: "City Stadium",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1686947079063-f1e7a7dfc6a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBldmVudCUyMHN0YWRpdW18ZW58MXx8fHwxNzYxNDk2MjA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    attendees: 3200,
    description: "Join thousands of runners in the annual city marathon. Choose from full marathon, half marathon, or 5K fun run. All fitness levels welcome!",
    organizer: "City Sports Association",
    price: "$45"
  },
  {
    id: 6,
    title: "Broadway Night: The Musical",
    date: "Nov 18, 2025",
    time: "7:30 PM",
    location: "Grand Theater",
    category: "Theater",
    image: "https://images.unsplash.com/photo-1539964604210-db87088e0c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwcGVyZm9ybWFuY2UlMjBzdGFnZXxlbnwxfHx8fDE3NjE0ODc0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    attendees: 450,
    description: "Experience the magic of Broadway with this spectacular musical performance. Award-winning cast brings classic songs to life in this unforgettable show.",
    organizer: "Theatre Productions Inc.",
    price: "$75"
  },
  {
    id: 7,
    title: "Rooftop Jazz Night",
    date: "Nov 20, 2025",
    time: "8:00 PM",
    location: "Skyline Hotel Rooftop",
    category: "Music",
    image: "https://images.unsplash.com/photo-1760454477189-9af9947786ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbmlnaHRsaWZlJTIwZXZlbnR8ZW58MXx8fHwxNzYxNTcxMTIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    attendees: 180,
    description: "Enjoy smooth jazz under the stars with stunning city views. Premium cocktails and small plates available. Dress code: smart casual.",
    organizer: "Skyline Events",
    price: "$50"
  },
  {
    id: 8,
    title: "Wellness & Yoga Retreat",
    date: "Nov 22, 2025",
    time: "8:00 AM",
    location: "Serenity Wellness Center",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1758599879065-46fd59235166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwd2VsbG5lc3MlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjE1NzExMjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    attendees: 95,
    description: "Reset your mind and body with a full day of yoga, meditation, and wellness workshops. Includes healthy lunch and refreshments. All levels welcome.",
    organizer: "Zen Life Wellness",
    price: "$85"
  }
];

export const categories = [
  { name: 'Music', icon: '🎵', color: '#FF6B6B' },
  { name: 'Art', icon: '🎨', color: '#4ECDC4' },
  { name: 'Food', icon: '🍔', color: '#FFE66D' },
  { name: 'Tech', icon: '💻', color: '#A8E6CF' },
  { name: 'Sports', icon: '⚽', color: '#FFB347' },
  { name: 'Theater', icon: '🎭', color: '#DDA0DD' },
  { name: 'Wellness', icon: '🧘', color: '#98D8C8' },
];
