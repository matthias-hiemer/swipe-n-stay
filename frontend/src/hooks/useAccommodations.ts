import {useEffect, useState} from 'react'
import {getAccommodations} from "../service/bookingApiService";
import {Accommodation} from "../model/Accommodation";


export default function useAccommodations(){
  const [accommodations, setAccommodations] = useState<Accommodation[]>([])

  const getAllAccommodations = () => {
    console.log("Fetching accommodations")

    getAccommodations()
        .then(result => setAccommodations(result))
        .catch(err => console.error(err))
  }

  useEffect(() => {
    getAllAccommodations()
  }, [])

  return {
    accommodations,
    setAccommodations,
  }
}
