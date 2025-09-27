export type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  review: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Carter",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "The construction team was fantastic. They finished our office building ahead of schedule and with excellent quality.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "I’m very happy with my new home. The attention to detail and quality of work was impressive.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Smith",
    role: "Architect",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    review:
      "Great collaboration from start to finish. The team handled complex requirements professionally.",
    rating: 4,
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Interior Designer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Working with them was smooth. They really listened to my design input and made sure everything matched the vision.",
    rating: 5,
  },
  {
    id: 5,
    name: "Robert Wilson",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    review:
      "They built our new warehouse with precision and care. The process was transparent and stress-free.",
    rating: 5,
  },
  {
    id: 6,
    name: "Olivia Martinez",
    role: "Property Investor",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    review:
      "I’ve worked with several contractors, but this team stood out for their professionalism and timely delivery.",
    rating: 4,
  },
  {
    id: 7,
    name: "James Thompson",
    role: "Civil Engineer",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    review:
      "They used top-quality materials and had excellent project management. I would definitely collaborate again.",
    rating: 5,
  },
  {
    id: 8,
    name: "Sophia Anderson",
    role: "Restaurant Owner",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    review:
      "Our new restaurant space turned out amazing! Customers love the design and finishing.",
    rating: 5,
  },
  {
    id: 9,
    name: "Daniel Lee",
    role: "Real Estate Developer",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    review:
      "The construction quality exceeded expectations. Deadlines were respected and communication was clear.",
    rating: 5,
  },
  {
    id: 10,
    name: "Grace Brown",
    role: "Home Renovation Client",
    image: "https://randomuser.me/api/portraits/women/27.jpg",
    review:
      "They renovated my kitchen and living area beautifully. I loved their modern design ideas.",
    rating: 4,
  },
  {
    id: 11,
    name: "William Harris",
    role: "Factory Owner",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    review:
      "Our factory expansion was completed with high safety standards and excellent attention to detail.",
    rating: 5,
  },
  {
    id: 12,
    name: "Isabella Clark",
    role: "Hotel Manager",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    review:
      "They built our hotel lobby with a premium finish. Guests often compliment the look and feel.",
    rating: 5,
  },
];
