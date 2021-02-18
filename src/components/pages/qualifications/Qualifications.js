import React from 'react'
import QualificationSegment from '../../QualificationSegment'
import { qualifcationDataObjOne, qualifcationDataObjTwo } from './Data'

export default function Qualifications() {
  return (
    <>
      <QualificationSegment {...qualifcationDataObjOne} />
      <QualificationSegment {...qualifcationDataObjTwo} />
    </>
  )
}
