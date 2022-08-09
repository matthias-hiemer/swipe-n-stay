import {Accommodation} from "../model/Accommodation";
import  "./AccommodationCard.css"

type AccommodationCardProps = {
    accommodation: Accommodation
}

export default function AccommodationCard({accommodation}: AccommodationCardProps) {

    return (
        <div className={"accommodation-card"}>
            <h2>{accommodation.name}</h2>

            <div className={"accommodation-card-rating"}>
                {accommodation.rating}
            </div>

            <img src={accommodation.imageUrl} className={"accommodation-card-image"} alt={"Accommodation"} />

            <div>
                <a href={accommodation.detailUrl} target="_blank" rel="noreferrer" >
                    <button className={"accommodation-card-button"}>
                        Details
                     </button>
                </a>
            </div>

            <p>{accommodation.pricePerNight} € / Nacht</p>
            <p>{accommodation.priceTotal} € insgesamt </p>
        </div>
    )

}