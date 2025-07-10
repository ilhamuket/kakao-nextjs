export const TruestedCompanies: { imgSrc: string }[] = [
  {
    imgSrc: "/images/companies/airbnb.svg"
  },
  {
    imgSrc: "/images/companies/fedex.svg"
  },
  {
    imgSrc: "/images/companies/google.svg"
  },
  {
    imgSrc: "/images/companies/hubspot.svg"
  },
  {
    imgSrc: "/images/companies/microsoft.svg"
  },
  {
    imgSrc: "/images/companies/walmart.svg"
  },
  {
    imgSrc: "/images/companies/airbnb.svg"
  },
  {
    imgSrc: "/images/companies/fedex.svg"
  }
]

// ganti TruestedCompanies jadi ini:
export const CocoaPartners: { imgSrc: string }[] = [
  { imgSrc: "/images/partners/barry.svg" },
  { imgSrc: "/images/partners/nestle.svg" },
  { imgSrc: "/images/partners/mars.svg" },
  { imgSrc: "/images/partners/mondelez.svg" },
  { imgSrc: "/images/partners/olam.svg" },
  { imgSrc: "/images/partners/guittard.svg" },
];

export const cocoaProductData = [
  {
    title: "Fermented Cocoa Beans",
    imgSrc: "/images/cocoa/kakao1.jpeg",
    description: "High-quality fermented beans with 7-day box fermentation. Perfect for premium chocolate production.",
    packaging: "Jute Bag 62.5 kg",
    weight: "62.5 kg",
    featured: true,
  },
  {
    title: "Natural Cocoa Powder",
    imgSrc: "/images/cocoa/kakao2.jpeg",
    description: "Low-fat cocoa powder with rich aroma and flavor. No additives.",
    packaging: "Paper Sack",
    weight: "25 kg",
    featured: false,
  },
  {
    title: "Cocoa Butter",
    imgSrc: "/images/cocoa/kokoa3.png",
    description: "Pure deodorized cocoa butter for chocolate and cosmetic use.",
    packaging: "Carton Box",
    weight: "20 kg",
    featured: true,
  },
  {
    title: "Cocoa Liquor",
    imgSrc: "/images/cocoa/kakao4.png",
    description: "Smooth texture, 100% pure cocoa liquor from premium beans.",
    packaging: "Block Form",
    weight: "25 kg",
    featured: false,
  },
];



export const courseData: {
  heading: string;
  imgSrc: string;
  name: string;
  students: number;
  classes: number;
  price: number;
  rating: number;
}[] = [
    {
      heading: 'Full stack modern javascript',
      name: "Colt stelle",
      imgSrc: '/images/courses/courseone.png',
      students: 150,
      classes: 12,
      price: 20,
      rating: 4.4,
    },
    {
      heading: 'Design system with React programme',
      name: "Colt stelle",
      imgSrc: '/images/courses/coursetwo.png',
      students: 130,
      classes: 12,
      price: 20,
      rating: 4.5,
    },
    {
      heading: 'Design banner with Figma',
      name: "Colt stelle",
      imgSrc: '/images/courses/coursethree.png',
      students: 120,
      classes: 12,
      price: 20,
      rating: 5,
    },
    {
      heading: 'We Launch Delia Webflow this Week!',
      name: "Colt stelle",
      imgSrc: '/images/courses/courseone.png',
      students: 150,
      classes: 12,
      price: 20,
      rating: 5,
    },
    {
      heading: 'We Launch Delia Webflow this Week!',
      name: "Colt stelle",
      imgSrc: '/images/courses/coursetwo.png',
      students: 150,
      classes: 12,
      price: 20,
      rating: 5,
    },
    {
      heading: 'We Launch Delia Webflow this Week!',
      name: "Colt stelle",
      imgSrc: '/images/courses/coursethree.png',
      students: 150,
      classes: 12,
      price: 20,
      rating: 4.2,
    },
  ]

export const MentorData: { profession: string; name: string; imgSrc: string }[] = [
  {
    profession: 'Senior UX Designer',
    name: 'Shoo Thar Mien',
    imgSrc: '/images/mentor/user3.png',
  },
  {
    profession: 'Senior UX Designer',
    name: 'Shoo Thar Mien',
    imgSrc: '/images/mentor/user2.png',
  },
  {
    profession: 'Senior UX Designer',
    name: 'Shoo Thar Mien',
    imgSrc: '/images/mentor/user1.png',
  },
  {
    profession: 'Senior UX Designer',
    name: 'Shoo Thar Mien',
    imgSrc: '/images/mentor/user3.png',
  },
  {
    profession: 'Senior UX Designer',
    name: 'Shoo Thar Mien',
    imgSrc: '/images/mentor/user2.png',
  },
  {
    profession: 'Senior UX Designer',
    name: 'Shoo Thar Mien',
    imgSrc: '/images/mentor/user1.png',
  },
]

export const TestimonialData: { profession: string; comment: string; imgSrc: string; name: string; rating: number; }[] = [
  {
    name: "Anna Müller",
    profession: 'Cocoa Importer, Germany',
    comment: 'The cocoa quality is excellent and shipments are always on time. We are very satisfied working with this team.',
    imgSrc: '/images/testimonial/user.svg',
    rating: 5
  },
  {
    name: "Jean Dupont",
    profession: 'Cocoa Importer, France',
    comment: 'The cocoa beans we receive are always fresh and meet specifications. Customer service is also very responsive.',
    imgSrc: '/images/mentor/user2.png',
    rating: 5
  },
  {
    name: "Maria Rossi",
    profession: 'Cocoa Importer, Italy',
    comment: 'We have partnered for several years and always receive high-quality products.',
    imgSrc: '/images/mentor/user3.png',
    rating: 5
  },
  {
    name: "David Smith",
    profession: 'Cocoa Importer, United Kingdom',
    comment: 'The ordering process is easy and delivery is fast. Highly recommended for cocoa needs.',
    imgSrc: '/images/mentor/user1.png',
    rating: 5
  },
  {
    name: "Satoshi Tanaka",
    profession: 'Cocoa Importer, Japan',
    comment: 'The cocoa we receive is perfect for our premium chocolate production.',
    imgSrc: '/images/mentor/user2.png',
    rating: 5
  },
  {
    name: "Carlos Silva",
    profession: 'Cocoa Importer, Brazil',
    comment: 'Professional service and consistently high product quality. We are very happy to partner.',
    imgSrc: '/images/mentor/user3.png',
    rating: 5
  },
]