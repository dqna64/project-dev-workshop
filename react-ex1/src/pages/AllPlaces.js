import CardsList from 'components/CardsList';
import placesInfo from 'data.json'
import { useState } from 'react';
import Layout from 'components/Layout';


const AllPlaces = () => {
  const [places, setPlaces] = useState(placesInfo)
  const updatePlaces = (index, newPlaceDetails) => {
    const newPlaces = [...places]
    newPlaces[index] = newPlaceDetails
    setPlaces(newPlaces)
  }
  return (
<Layout>
      <h1>All Places</h1>
      <p>Here is a list of all the restaurants, cafes, dessert bars and other eateries that I want to keep a record of either because I like them, dislike them, or would like to find out.</p>
      <CardsList places={places} />
    </Layout>
  )
}

export default AllPlaces