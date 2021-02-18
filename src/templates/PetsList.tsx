// React
import React, {
    FC,
    useEffect,
    useState,
} from 'react'
// Components
import { MediaCard, Header } from './index'
// types
import { Pet } from '../types/index'
// lib
import { fetchPets } from '../lib/Pets'

const PetsList: FC = () => {
    const [petList, setPetList] = useState([] as Pet[])

    // APIからうちの子一覧を取得します
    useEffect(() => {
        (async () => {
            const pets = await fetchPets()
            setPetList([...pets])
        })()
    }, [])

    return (
        <>
            <Header />
            {petList.map((pet) => {
                return <MediaCard
                    id={pet.id}
                    imagePath={pet.imagePath}
                    name={pet.name}
                    sex={pet.sex}
                    birthday={pet.birthday}
                    pickupDate={pet.pickupDate}
                    recomend={pet.attractiveFeature}
                    key={pet.id}
                />
            })}
        </>
    )
}

export default PetsList
