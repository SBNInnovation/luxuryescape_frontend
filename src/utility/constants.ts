interface Month {
    value: string;
    label: string;
}

interface Destination {
    value: string;
    label: string;
}

interface VehicleOption {
    value: string;
    label: string;
}

export const selectDestinations: Destination[] = [
        { value: "nepal", label: "Nepal"},
        { value: "bhutan", label: "Bhutan"},
        { value: "tibet", label: "Tibet"},
        { value: "nepal-bhutan", label: "Nepal-Bhutan" },
        { value: "nepal-tibet", label: "Nepal-Tibet" },
        { value: "bhutan-tibet", label: "Bhutan-Tibet"},
        { value: "nepal-bhutan-tibet", label: "Nepal-Bhutan-Tibet" },
    ];

export    const months: Month[] = [
        { value: "january", label: "January" },
        { value: "february", label: "February" },
        { value: "march", label: "March" },
        { value: "april", label: "April" },
        { value: "may", label: "May" },
        { value: "june", label: "June" },
        { value: "july", label: "July" },
        { value: "august", label: "August" },
        { value: "september", label: "September" },
        { value: "october", label: "October" },
        { value: "november", label: "November" },
        { value: "december", label: "December" },
    ];

 export   const vehicleOptions: VehicleOption[] = [
        { value: "domestic-flight", label: "Domestic Flight" },
        { value: "helicopter", label: "Helicopter" },
        { value: "private-vehicle", label: "Private Vehicle" },
        { value: "suv", label: "SUV" },
    ];