import React from 'react'
import './QualificationSegment.css'
import { GiDiploma, GiGraduateCap } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib'

export default function QualificationSegment({
  logo,
  qualificationName,
  qualificationResult,
  year = 2015,
  institution,
  brief,
  moduleNames,
  moduleResults
}) {
  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className="qualification-segment">
        <div className="qualification-segment-wrapper">
          <div className="logo">
            {logo === 'diploma' ? <GiDiploma /> : <GiGraduateCap />}    
          </div>
          <h2 className="qualification-name-result">
            {qualificationName + " - " + qualificationResult}   
          </h2>
          <h3 className="institution">
            {institution + " - " + year}
          </h3>
          <div className="brief">
            {brief}
          </div>
          <div className="module-list-wrapper">
            <ul className="module-list">
              {moduleNames.map((value, index) => {
                return <li key={index} className="module-list-item">{value}</li>
              })}
            </ul>
            <ul className="module-results-list">
            {moduleResults.map((value, index) => {
                return <li key={index} className="module-list-item result-item">{value}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  )
}
