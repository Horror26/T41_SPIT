import React, { useRef, useState } from 'react'
import "./cibil.css"
import cibilImg from "../assets/cibil-assets.jpeg"
import fileupload from "../assets/file-upload.png"

export const CibilScore = () => {
  const  [uploaded, setUploaded] = useState(false)
  const inputRef = useRef()

  const handleImage = (e) => {
    e.preventDefault()
    inputRef.current.click()
  }

  useState(() => {

  }, [])
  return (
    <section className='cibil'>
      <h3>Find Out Your</h3>
      <h1>CIBIL SCORE</h1>
      <div>
        <h4>Step 1</h4>
        <h2>Watch the below YOUTUBE video</h2>
        <div className='cibil-video'>

        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/UdUm6BrXwo8" title="Sbi Cibil Score Check || Sbi Cibil Score Kaise Check Kare In Hindi 2023 @SmartPointUser" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
      <div>
        <h4>Step 2</h4>
        <h2>Take a snapshot of your CIBIL Score from the link below</h2>
        <a target="_blank" href='https://homeloans.sbi/getcibil'>SBI CIBIL SCORE PORTAL </a>
      </div>
      <div>
        <h4>Step 3</h4>
        <h2>Upload your File for verification</h2>
        <img onClick={handleImage} className='file-upload' src={fileupload} alt='alt file upload' style={{backgroundColor: uploaded ? "rgb(172, 239, 205)" :  "rgb(177, 211, 225)" }}/>
        <input onChange={() => setUploaded(() => {return true})} type='file' ref={inputRef} style={{display: 'none'}}/>
      </div>
      <div>
        <h1 className='thanks'>THANK YOU</h1>
      </div>

      <img src={cibilImg} className='cibil-img'/>
    </section>
  )
}
