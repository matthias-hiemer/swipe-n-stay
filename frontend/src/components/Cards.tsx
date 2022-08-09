import useAccommodations from "../hooks/useAccommodations";
import {Accommodation} from "../model/Accommodation";
import AccommodationCard from "./AccommodationCard";


export default function Cards() {

    const {accommodations} = useAccommodations()

    return (
        <>
            {accommodations.map((acco: Accommodation) => <AccommodationCard key={acco.id} accommodation={acco}/>)}
        </>
    )
}