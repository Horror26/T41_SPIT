import React from 'react'
import {useNavigate} from "react-router-dom"

export function CardOne({title, desc, link, img}) {
    const navigator = useNavigate()
  return (
    <div className="card-class" >
      <img
        src={img}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-5 left-5 text-left mr-2 offer-titl">
        <h1 className="text-[2rem] font-semibold text-white leading-8 ">
            {title}
        </h1>
        <p className="mt-2 text-[1rem] text-gray-300">
          {desc}
        </p>
        <button onClick={() => navigator(link)} className="mt-2 bg-white p-2 rounded-[5px] inline-flex cursor-pointer items-center text-sm font-semibold text-black">
          View More &rarr;
        </button>
      </div>
    </div>
  )
}
