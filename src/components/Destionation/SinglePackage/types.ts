export interface LuxuryPackage {
    title?: string;
    totalDays?: number;
    price?: string;
    description?: string;
    destinations?: {
        city?: string;
        days?: string;
        image?: string;
    }[];
    tripHighlight?: string[];
    activities?: {
        activity?: string;
        image?: string;
    }[];
    inclusions?: string[];
    itinerary?: {
        days?: string;
        description?: string;
        image?: string;
        hotel?: {
            name?: string;
            image?: string;
        };
    }[];
}
