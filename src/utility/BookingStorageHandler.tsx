export const BOOKING_STORAGE_KEY = 'trek_tour_booking_details';

export interface BookingDetails {
  fullName?: string;
  email?: string;
  phone?: string;
  address?: string;

  adventureType: string | undefined;
  adventureName: string | undefined;
  adventureSlug: string | undefined;
  adventureId: string | undefined;

  bookingDate?: string;
  price?: number;
  totalPrice?: number;
  quantity?: number;

  // Additional fields from API bookingDetails
  singleSupplementaryPremiumFiveStar: number;
  singleSupplementaryFourStar: number;
  singleSupplementaryFiveStar: number;
  solo: number;
  soloPremiumFiveStar: number;
  soloFourStar: number;
  soloFiveStar: number;
  standardPremiumFiveStar: number;
  standardFourStar: number;
  standardFiveStar: number;
}

export const saveBookingDetails = (details: BookingDetails): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(details));
  }
};

export const getBookingDetails = (): BookingDetails | null => {
  if (typeof window !== 'undefined') {
    const storedData = localStorage.getItem(BOOKING_STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : null;
  }
  return null;
};

export const clearBookingDetails = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(BOOKING_STORAGE_KEY);
  }
};

export const hasBookingDetails = (): boolean => {
  return getBookingDetails() !== null;
};
