import { Dentist, Event, ItemList, LocalBusiness, WithContext } from "schema-dts";
import { Timeslot } from "@/app/types/types";
import { Location } from "@/app/services/locationService";

export type LocationListSchema = WithContext<ItemList>;

export type LocationPageSchema = (
    WithContext<Event> |
    WithContext<LocalBusiness & Dentist>
    )[];

// Only use properties that exist on Location type
export function generateLocationListSchema(locations: Location[]): LocationListSchema {
    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": `/locations`,
        "name": "Emergency Dental Care Service Areas",
        "description": "List of areas where our 24/7 emergency dental care services are available",
        "numberOfItems": locations.length,
        "itemListElement": locations.map((location, index) => {
            return {
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "@id": `/location/${location.slug}`,
                    "name": location.name,
                    "description": location.description,
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": location.latitude,
                        "longitude": location.longitude
                    }
                },
            } as any;
        })
    } as any;
}

export function generateLocationPageSchema(
    location: Location,
    timeslots: Timeslot[]
): LocationPageSchema {
    const emergencyServiceSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `/location/${location.slug}`,
        "name": location.name,
        "description": location.description,
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": location.latitude,
            "longitude": location.longitude
        }
    } as any;

    const clinicSchemas = timeslots.length > 0
        ? timeslots.map((timeslot, index) => ({
            "@context": "https://schema.org",
            "@type": "Event",
            "@id": `/location/${location.slug}/timeslot/${index}`,
            "name": `Emergency Dental Appointment at ${location.name}`,
            "description": `Emergency dental appointment for ${timeslot.city} at ${location.name}`,
            "startDate": timeslot.starts,
            "endDate": timeslot.ends,
            "location": {
                "@type": "Place",
                "name": location.name,
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": location.latitude,
                    "longitude": location.longitude
                }
            },
            "offers": {
                "@type": "Offer",
                "price": "0.00",
                "priceCurrency": "USD",
                "availability": "http://schema.org/InStock",
                "url": `/location/${location.slug}/timeslot/${index}`
            },
            "attendee": {
                "@type": "Audience",
                "name": "Emergency Dental Patient"
            },
            "organizer": {
                "@type": "Organization",
                "name": location.name,
                "url": `/location/${location.slug}`
            }
        }) as any)
        : [];

    return [emergencyServiceSchema, ...clinicSchemas] as any;
}