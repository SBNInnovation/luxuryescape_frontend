export interface Tour {
    _id: string;
    tourName: string;
    slug: string;
    type: string;
    thumbnail: string;
    gallery: string[];
    country: string;
    location: string;
    duration: string;
    idealTime: string[];
    cost: number;
    tourTypes: string;
    tourOverview: string;
    tourHighlights: string[];
    highlightPicture: string[];
    tourInclusion: string[];
    tourItinerary: TourItinerary[];
    itineraryDayPhoto: string[];
    faq: FAQ[];
    isRecommend: boolean;
    isActivate: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface TourItinerary {
    day: string;
    title: string;
    description: string;
    accommodation: string[];
    links: string[];
}

interface FAQ {
    question: string;
    answer: string;
}




export interface Trek {
  _id: string;
  trekName: string;
  slug: string;
  type: string;
  thumbnail: string;
  gallery: string[];
  country: string;
  location: string;
  duration: string;
  idealTime: string[];
  cost: number;
  difficultyLevel: string;
  trekOverview: string;
  trekHighlights: string[];
  highlightPicture: string[];
  trekInclusion: string[];
  trekItinerary: TourItinerary[];
  itineraryDayPhoto: string[];
  faq: FAQ[];
  isRecommend: boolean;
  isActivate: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}