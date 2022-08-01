export interface BriefTypes {
    id?: number;
    headline?: string;
    flightIds?: string[];
    shortInformation?: string;
    dailyPhoto?: string;
}

export interface DocumentTypes {
    id: number;
    name: string;
    attachment: {
        fileUrl: string
    }
}

interface AirportInfo {
    airportCode: string,
    airportName: string,
    cityName: string,
    estimated: number
}

export interface FlightTypes {
    airlineName: string,
    id: number,
    arrival: AirportInfo,
    departure: AirportInfo
}
