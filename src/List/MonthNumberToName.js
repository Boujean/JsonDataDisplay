import React, { Component } from 'react'

export function MonthNumberToName (MonthNumber) {
  var MonthName = ''
  if (MonthNumber === 1) { MonthName = 'January' }
  if (MonthNumber === 2) { MonthName = 'February' }
  if (MonthNumber === 3) { MonthName = 'March' }
  if (MonthNumber === 4) { MonthName = 'April' }
  if (MonthNumber === 5) { MonthName = 'May' }
  if (MonthNumber === 6) { MonthName = 'June' }
  if (MonthNumber === 7) { MonthName = 'July' }
  if (MonthNumber === 8) { MonthName = 'August' }
  if (MonthNumber === 9) { MonthName = 'September' }
  if (MonthNumber === 10) { MonthName = 'October' }
  if (MonthNumber === 11) { MonthName = 'November' }
  if (MonthNumber === 12) { MonthName = 'December' }
  return (
    MonthName
  )
}

export default MonthNumberToName
