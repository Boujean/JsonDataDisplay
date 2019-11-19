
import React, { Component } from 'react'
import MonthName from './MonthNumberToName.js'

export function CorrectByMonth (Months, DataToChart) {
  var myArray = new Array()

  Months.forEach(function (element, index) {
    const monthname = MonthName(Months[index])
    const monthcorrect = DataToChart[index].Correct
    myArray[index] = { name: monthname, Correct: monthcorrect }
  })

  return (
    myArray
  )
}

export function CorrectDurationByMonth (Months, DataToChart) {
  var myArray = new Array()

  Months.forEach(function (element, index) {
    const monthname = MonthName(Months[index])
    const monthcorrectduration = DataToChart[index].Correct_Duration
    myArray[index] = { name: monthname, Correct_Duration: monthcorrectduration }
  })

  return (
    myArray
  )
}

export function ViolatorsByMonth (Months, DataToChart) {
  var myArray = new Array()

  Months.forEach(function (element, index) {
    const monthname = MonthName(Months[index])
    const monthviolators = DataToChart[index].Violators
    myArray[index] = { name: monthname, Violators: monthviolators }
  })

  return (
    myArray
  )
}

export function ViolatorsDurationByMonth (Months, DataToChart) {
  var myArray = new Array()

  Months.forEach(function (element, index) {
    const monthname = MonthName(Months[index])
    const monthviolatorsduration = DataToChart[index].Violators_Duration
    myArray[index] = { name: monthname, Violators_Duration: monthviolatorsduration }
  })

  return (
    myArray
  )
}
export function ShortByMonth (Months, DataToChart) {
  var myArray = new Array()

  Months.forEach(function (element, index) {
    const monthname = MonthName(Months[index])
    const monthshort = DataToChart[index].Short
    myArray[index] = { name: monthname, Short: monthshort }
  })

  return (
    myArray
  )
}
