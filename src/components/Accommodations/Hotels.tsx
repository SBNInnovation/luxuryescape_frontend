import { Hotel } from '@/types/types';
import { 
  FaSpa, 
  FaSwimmingPool, 
  FaUtensils, 
  FaCar, 
  FaWifi, 
  FaCocktail, 
  FaDumbbell, 
  FaCoffee, 
  FaConciergeBell,
  FaHiking, 
  FaBinoculars, 
  FaMountain, 
} from 'react-icons/fa';
import {GrYoga} from 'react-icons/gr'

const hotels: Hotel[] = [
  {
    id: 1,
    name: "Dwarika's Hotel",
    location: "Kathmandu",
    rating: 5,
    pricePerNight: 450,
    description: "A living museum of Nepalese art and architecture, offering an authentic experience of Nepal's ancient cultural heritage.",
    longDescription: `Dwarika's Hotel is not just a hotel; it's a tribute to Nepal's rich cultural heritage. Each of its rooms is a masterpiece of Newari architecture, featuring hand-carved wooden details that took years to create. The hotel houses an extensive collection of artifacts that reflect Nepal's architectural and cultural heritage.

    The property seamlessly blends the ancient with the modern, offering guests an authentic experience of Nepal's ancient cultural heritage while providing contemporary luxuries. The hotel's architecture is the result of over 30 years of dedicated conservation work.`,
    mainImage: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/5371575/pexels-photo-5371575.jpeg",
      "https://images.pexels.com/photos/6186815/pexels-photo-6186815.jpeg",
      "https://images.pexels.com/photos/6186579/pexels-photo-6186579.jpeg"
    ],
    amenities: [
      { name: "Luxury Spa", icon: <FaSpa /> },
      { name: "Heritage Pool", icon: <FaSwimmingPool /> },
      { name: "Krishnarpan Restaurant", icon: <FaUtensils /> },
      { name: "Airport Transfer", icon: <FaCar /> }
    ],
    features: [
      "24/7 Room Service",
      "Heritage Walking Tours",
      "Cooking Classes",
      "Yoga Sessions",
      "Art Gallery",
      "Cultural Shows",
    ],
    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 7 days before check-in",
      children: "Welcome for ages 6 and above",
      pets: "Not allowed"
    },
    roomTypes: [
      {
        id: 1,
        name: "Heritage Deluxe",
        description: "Spacious room with traditional Newari architecture",
        size: "400 sq ft",
        capacity: 2,
        pricePerNight: 450,
        bedType: "King Size",
        mainImage: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
      },
      {
        id: 2,
        name: "Royal Suite",
        description: "Luxury suite with private courtyard",
        size: "800 sq ft",
        capacity: 4,
        pricePerNight: 850,
        bedType: "King Size + Sofa Bed",
        mainImage: "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg"
      }
    ],
    coordinates: {
      lat: 27.7172,
      lng: 85.3240
    }
  },
  {
    id: 2,
    name: "Taj Meghauli Serai",
    location: "Chitwan",
    rating: 5,
    pricePerNight: 800,
    description: "Luxury safari lodge offering unparalleled wildlife experiences and breathtaking views of Chitwan National Park.",
    longDescription: `Taj Meghauli Serai offers a luxurious gateway to the wilderness of Chitwan National Park. This exclusive safari lodge combines world-class luxury with authentic local experiences. Each room provides stunning views of the park and the Rapti River, where you can watch rhinoceros and elephants coming to drink.

    The lodge specializes in curated wildlife experiences, including jungle safaris, elephant interactions, and river adventures. The architecture reflects local Tharu culture while providing modern amenities.`,
    mainImage: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
    ],
    amenities: [
      { name: "Infinity Pool", icon: <FaSwimmingPool /> },
      { name: "Safari Tours", icon: <FaBinoculars /> },
      { name: "Gourmet Dining", icon: <FaUtensils /> },
      { name: "Spa Treatments", icon: <FaSpa /> }
    ],
    features: [
      "Private Balconies",
      "Wildlife Viewing Deck",
      "Local Cultural Programs",
      "River-facing Restaurant",
      "Nature Library",
      "Photography Tours"
    ],
    policies: {
      checkIn: "1:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation up to 14 days before check-in",
      children: "Welcome with special activities available",
      pets: "Not allowed"
    },
    roomTypes: [
      {
        id: 1,
        name: "Meghauli Villa",
        description: "Luxury villa with private plunge pool",
        size: "750 sq ft",
        capacity: 2,
        pricePerNight: 800,
        bedType: "King Size",
        mainImage: "https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg"
      },
      {
        id: 2,
        name: "Presidential Suite",
        description: "Ultimate luxury with private garden and pool",
        size: "1200 sq ft",
        capacity: 4,
        pricePerNight: 1500,
        bedType: "King Size + 2 Singles",
        mainImage: "https://images.pexels.com/photos/2029731/pexels-photo-2029731.jpeg"
      }
    ],
    coordinates: {
      lat: 27.5768,
      lng: 84.1651
    }
  },
  {
    id: 3,
    name: "Hyatt Regency Kathmandu",
    location: "Kathmandu",
    rating: 5,
    pricePerNight: 350,
    description: "Modern luxury hotel set against the backdrop of the ancient Boudhanath Stupa, offering a perfect blend of contemporary comfort and cultural proximity.",
    longDescription: `The Hyatt Regency Kathmandu is a 5-star luxury hotel and resort situated just 4 km from the Tribhuvan International Airport and within walking distance of the ancient Boudhanath Stupa. The hotel's design is inspired by Nepalese architecture and features elements of the local art and culture throughout its premises.

    Set on 37 acres of landscaped grounds, the hotel offers a sophisticated and peaceful environment with breathtaking mountain views and easy access to the city's key cultural attractions.`,
    mainImage: "https://images.pexels.com/photos/2417278/pexels-photo-2417278.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/2606523/pexels-photo-2606523.jpeg",
      "https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg",
      "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg"
    ],
    amenities: [
      { name: "Club Oasis Spa", icon: <FaSpa /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Multiple Restaurants", icon: <FaUtensils /> },
      { name: "Fitness Center", icon: <FaDumbbell /> }
    ],
    features: [
      "Tennis Courts",
      "Business Center",
      "Shopping Arcade",
      "Children's Play Area",
      "Jogging Track",
      "Currency Exchange"
    ],
    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 24 hours before check-in",
      children: "Welcome with babysitting services available",
      pets: "Service animals only"
    },
    roomTypes: [
      {
        id: 1,
        name: "Stupa View Room",
        description: "Elegant room with views of Boudhanath Stupa",
        size: "365 sq ft",
        capacity: 2,
        pricePerNight: 350,
        bedType: "King or Twin",
        mainImage: "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg"
      },
      {
        id: 2,
        name: "Regency Suite",
        description: "Luxurious suite with separate living area",
        size: "750 sq ft",
        capacity: 3,
        pricePerNight: 550,
        bedType: "King Size",
        mainImage: "https://images.pexels.com/photos/3659682/pexels-photo-3659682.jpeg"
      }
    ],
    coordinates: {
      lat: 27.7197,
      lng: 85.3624
    }
  },
  {
    id: 4,
    name: "Tiger Mountain Pokhara Lodge",
    location: "Pokhara",
    rating: 5,
    pricePerNight: 600,
    description: "Exclusive mountain retreat offering panoramic Himalayan views and sustainable luxury in harmony with nature.",
    longDescription: `Tiger Mountain Pokhara Lodge sets the standard for sustainable luxury in Nepal. Perched on a ridge a thousand feet above the Pokhara Valley, the lodge offers spectacular views of the Annapurna Range. The property consists of individual hand-cut stone bungalows, each positioned to maximize privacy and views.

    With its commitment to responsible tourism and local community development, the lodge provides an authentic Nepalese experience while maintaining international standards of comfort and service.`,
    mainImage: "https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg",
      "https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg",
      "https://images.pexels.com/photos/2440024/pexels-photo-2440024.jpeg"
    ],
    amenities: [
      { name: "Mountain Guides", icon: <FaHiking /> },
      { name: "Infinity Pool", icon: <FaSwimmingPool /> },
      { name: "Organic Dining", icon: <FaUtensils /> },
      { name: "Yoga Center", icon: <GrYoga /> }
    ],
    features: [
      "Bird Watching",
      "Mountain Biking",
      "Paragliding",
      "Organic Garden",
      "Library",
      "Sunset Terrace"
    ],
    policies: {
      checkIn: "1:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation up to 30 days before check-in",
      children: "Welcome for ages 8 and above",
      pets: "Not allowed"
    },
    roomTypes: [
      {
        id: 1,
        name: "Mountain View Cottage",
        description: "Private cottage with panoramic Himalayan views",
        size: "500 sq ft",
        capacity: 2,
        pricePerNight: 600,
        bedType: "King Size",
        mainImage: "https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg"
      },
      {
        id: 2,
        name: "Family Lodge",
        description: "Spacious lodge for families with private garden",
        size: "900 sq ft",
        capacity: 4,
        pricePerNight: 950,
        bedType: "King Size + Twin Beds",
        mainImage: "https://images.pexels.com/photos/2662819/pexels-photo-2662819.jpeg"
      }
    ],
    coordinates: {
      lat: 28.2096,
      lng: 83.9856
    }
  },
{
    id: 5,
    name: "Barahi Jungle Lodge",
    location: "Chitwan",
    rating: 4.8,
    pricePerNight: 550,
    description: "Luxury eco-lodge offering immersive jungle experiences and wildlife encounters in the heart of Chitwan National Park.",
    longDescription: `Barahi Jungle Lodge represents the perfect fusion of wilderness and luxury. Situated on the banks of the Rapti River, the lodge offers unparalleled access to Chitwan National Park's diverse wildlife. Each villa is designed to provide maximum comfort while maintaining harmony with the natural surroundings.

    The lodge specializes in responsible wildlife tourism, offering guided jungle walks, canoe rides, and jeep safaris led by experienced naturalists.`,
    mainImage: "https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/4916562/pexels-photo-4916562.jpeg",
      "https://images.pexels.com/photos/4916551/pexels-photo-4916551.jpeg",
      "https://images.pexels.com/photos/4916556/pexels-photo-4916556.jpeg"
    ],
    amenities: [
      { name: "Safari Experience", icon: <FaBinoculars /> },
      { name: "Riverside Dining", icon: <FaUtensils /> },
      { name: "Ayurvedic Spa", icon: <FaSpa /> },
      { name: "Nature Walks", icon: <FaHiking /> }
    ],
    features: [
      "Wildlife Photography",
      "Cultural Shows",
      "Bird Watching",
      "Canoe Rides",
      "Naturalist Guides",
      "Riverside BBQ"
    ],
    policies: {
      checkIn: "1:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation up to 21 days before check-in",
      children: "Welcome with supervised activities",
      pets: "Not allowed"
    },
    roomTypes: [
      {
        id: 1,
        name: "Jungle View Villa",
        description: "Deluxe villa with private balcony overlooking the jungle",
        size: "450 sq ft",
        capacity: 2,
        pricePerNight: 550,
        bedType: "King Size",
        mainImage: "https://images.pexels.com/photos/4916565/pexels-photo-4916565.jpeg"
      },
      {
        id: 2,
        name: "Riverside Suite",
        description: "Premium suite with river views and outdoor seating",
        size: "650 sq ft",
        capacity: 3,
        pricePerNight: 750,
        bedType: "King Size + Day Bed",
        mainImage: "https://images.pexels.com/photos/4916567/pexels-photo-4916567.jpeg"
      }
    ],
    coordinates: {
      lat: 27.5842,
      lng: 84.4875
    }
  },
  {
    id: 6,
    name: "Temple Tree Resort & Spa",
    location: "Pokhara",
    rating: 4.7,
    pricePerNight: 400,
    description: "Boutique resort combining Himalayan serenity with world-class amenities, nestled in the peaceful Fewa Lake area.",
    longDescription: `Temple Tree Resort & Spa is a tranquil haven in Pokhara, offering a perfect blend of Nepalese architecture and modern comfort. The resort's design draws inspiration from the region's temples, featuring local materials and traditional craftsmanship throughout.

    Surrounded by lush gardens with views of the Annapurna range, the resort provides a peaceful retreat while remaining close to Pokhara's vibrant lakeside area.`,
    mainImage: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
      "https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg",
      "https://images.pexels.com/photos/2417278/pexels-photo-2417278.jpeg"
    ],
    amenities: [
      { name: "Lakeside Spa", icon: <FaSpa /> },
      { name: "Infinity Pool", icon: <FaSwimmingPool /> },
      { name: "Mountain Bar", icon: <FaCocktail /> },
      { name: "Adventure Desk", icon: <FaMountain /> }
    ],
    features: [
      "Lake Views",
      "Meditation Garden",
      "Yoga Classes",
      "Restaurant",
      "Travel Desk",
      "Library"
    ],
    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 7 days before check-in",
      children: "Welcome with family activities",
      pets: "Small pets allowed"
    },
    roomTypes: [
      {
        id: 1,
        name: "Garden View Room",
        description: "Cozy room with private garden access",
        size: "350 sq ft",
        capacity: 2,
        pricePerNight: 400,
        bedType: "Queen Size",
        mainImage: "https://images.pexels.com/photos/2417278/pexels-photo-2417278.jpeg"
      },
      {
        id: 2,
        name: "Lake View Suite",
        description: "Spacious suite with panoramic lake views",
        size: "600 sq ft",
        capacity: 3,
        pricePerNight: 600,
        bedType: "King Size + Sofa Bed",
        mainImage: "https://images.pexels.com/photos/2606523/pexels-photo-2606523.jpeg"
      }
    ],
    coordinates: {
      lat: 28.2062,
      lng: 83.9595
    }
  },
  {
    id: 7,
    name: "Kathmandu Marriott Hotel",
    location: "Kathmandu",
    rating: 4.9,
    pricePerNight: 300,
    description: "Contemporary luxury hotel offering international standards with local charm in the heart of Kathmandu.",
    longDescription: `The Kathmandu Marriott Hotel represents the pinnacle of modern luxury in Nepal's capital. With its prime location and sophisticated amenities, it caters to both business and leisure travelers seeking contemporary comfort.

    The hotel seamlessly integrates Nepalese hospitality with Marriott's international standards, featuring multiple dining venues, extensive meeting facilities, and a world-class spa.`,
    mainImage: "https://images.pexels.com/photos/2417278/pexels-photo-2417278.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/2606523/pexels-photo-2606523.jpeg",
      "https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg",
      "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg"
    ],
    amenities: [
      { name: "Executive Lounge", icon: <FaConciergeBell /> },
      { name: "Fitness Center", icon: <FaDumbbell /> },
      { name: "Multiple Restaurants", icon: <FaUtensils /> },
      { name: "Business Center", icon: <FaWifi /> }
    ],
    features: [
      "City Views",
      "Meeting Rooms",
      "Rooftop Bar",
      "Spa Services",
      "24/7 Room Service",
      "Airport Shuttle"
    ],
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 48 hours before check-in",
      children: "Welcome with kids' activities",
      pets: "Service animals only"
    },
    roomTypes: [
      {
        id: 1,
        name: "Deluxe Room",
        description: "Modern room with city views",
        size: "400 sq ft",
        capacity: 2,
        pricePerNight: 300,
        bedType: "King or Twin",
        mainImage: "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg"
      },
      {
        id: 2,
        name: "Executive Suite",
        description: "Luxury suite with lounge access",
        size: "700 sq ft",
        capacity: 3,
        pricePerNight: 500,
        bedType: "King Size",
        mainImage: "https://images.pexels.com/photos/3659682/pexels-photo-3659682.jpeg"
      }
    ],
    coordinates: {
      lat: 27.7172,
      lng: 85.3240
    }
  },
  {
    id: 8,
    name: "Pavilions Himalayas",
    location: "Pokhara",
    rating: 5,
    pricePerNight: 700,
    description: "Eco-luxury resort offering private villas with stunning mountain views and sustainable practices.",
    longDescription: `The Pavilions Himalayas is a unique eco-sensitive luxury resort that combines comfort with conservation. Set against the backdrop of the Annapurna range, this collection of private villas offers an intimate experience of Nepal's natural beauty.

    The resort operates on solar power and uses farm-to-table ingredients from its organic farm. Each villa features contemporary design elements while maintaining harmony with the surrounding environment.`,
    mainImage: "https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
      "https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg",
      "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg"
    ],
    amenities: [
      { name: "Infinity Pool", icon: <FaSwimmingPool /> },
      { name: "Farm-to-Table", icon: <FaUtensils /> },
      { name: "Wellness Center", icon: <FaSpa /> },
      { name: "Adventure Activities", icon: <FaHiking /> }
    ],
    features: [
      "Organic Farm",
      "Mountain Views",
      "Solar Power",
      "Hiking Trails",
      "Cooking Classes",
      "Meditation Space"
    ],
    policies: {
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation up to 14 days before check-in",
      children: "Welcome with nature activities",
      pets: "Not allowed"
    },
    roomTypes: [
      {
        id: 1,
        name: "Private Villa",
        description: "Eco-luxury villa with mountain views",
        size: "800 sq ft",
        capacity: 2,
        pricePerNight: 700,
        bedType: "King Size",
        mainImage: "https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg"
      },
      {
        id: 2,
        name: "Pool Villa",
        description: "Villa with private infinity pool",
        size: "1200 sq ft",
        capacity: 4,
        pricePerNight: 1200,
        bedType: "King Size + Twin Beds",
        mainImage: "https://images.pexels.com/photos/2662819/pexels-photo-2662819.jpeg"
      }
    ],
    coordinates: {
      lat: 28.2096,
      lng: 83.9856
    }
  }
];

export default hotels;