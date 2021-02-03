// React
import React, { FC } from 'react';
// Components
import { MediaCard, Header } from './index'
// img
import dog from '../assets/img/aa_617_01.jpg'

enum Sex {
    MALE = 'male',
    FEMALE = 'female',
}

const PetsList: FC = () => {
    const date = new Date('2019/01/01');

    return (
        <>
            <Header />
            <MediaCard
                imagePath={dog}
                name='太郎'
                sex={Sex.MALE}
                birthday={date}
                pickupDate={date}
                recomend='test'
            />
        </>
    )
}

export default PetsList
