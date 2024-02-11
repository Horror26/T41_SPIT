import React from 'react'
import { CardOne } from './Offeringcard'
import farmer1 from "../../assets/farmer-1.jpg"
import farmer2 from "../../assets/farmer-2.jpg"

export const Offerings = () => {
    const content = [
        {
            title: "Lending Loans",
            desc: "Our platform makes lending loans as easy as clicking a button",
            link: "./Transaction",
            image: farmer1
        }, {
            title: "Finance Analysis",
            desc: "All you finances tracked at one single place",
            link: "./cibil",
            image: farmer2
        }
    ]
  return (
    <section className='offering-card'>
        {content.map((cont, idx) => {
            return (
                <CardOne title={cont.title} link={cont.link} desc={cont.desc} img={cont.image}/>
            )
        }) }
    </section>
  )
}
