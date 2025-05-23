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
    exclusions?: string[];
    itinerary?: {
        days?: string;
        description?: string;
        title:string;
        image?: string;
        hotels?:any //eslint-disable-line @typescript-eslint/no-explicit-any
    }[];
    faqs?: {
        question:string
        answer:string
    }[]|undefined
}
