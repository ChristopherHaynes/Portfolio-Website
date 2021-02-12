import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './PageSegment.css'

export default function PageSegment({
  lightBg, 
  topLine, 
  lightText, 
  lightTextDesc, 
  headline, 
  description, 
  buttonLabel, 
  src, 
  alt, 
  imgStart
}) {
  return (
    <>
      <div className={lightBg ? 'page-segment-section' : 'page-segment-section dark-bg'}>
        <div className="container">
          <div className="row page-segment-row" style={{display: 'flex', flexDirection: imgStart ? 'row-reverse' : 'row'}}>
            <div className="col">
              <div className="page-segment-text-wrapper">
                <div className="top-line">
                  {topLine}
                </div>
                <h1 className={lightText ? 'heading' : 'heading dark-text'}>{headline}</h1>
                <p className={lightTextDesc ? 'page-segment-subtitle' : 'page-segment-subtitle dark-text'}>{description}</p>
                <Link to="/sign-up">
                  <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                </Link>

              </div>
            </div>
            <div className="col">
              <div className="page-segment-image-wrapper">
                <img src={src} alt={alt} className='page-segment-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
