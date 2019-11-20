import MonthName from './MonthNumberToName.js'

export function AllDataByMonth (Months, DataToChart) {
  var myArray = []

  Months.forEach(function (element, index) {
    const monthname = MonthName(Months[index])
    const monthcorrect = DataToChart[index].Correct
    const monthcorrectduration = DataToChart[index].Correct_Duration
    const monthviolators = DataToChart[index].Violators
    const monthviolatorsduration = DataToChart[index].Violators_Duration
    const monthshort = DataToChart[index].Short
    myArray[index] = {
      name: monthname,
      Correct: monthcorrect,
      Correct_Duration: monthcorrectduration,
      Violators: monthviolators,
      Violators_Duration: monthviolatorsduration,
      Short: monthshort
    }
  })

  return (
    myArray
  )
}

export function AllDataByWeek (Months, DataToChart) {
  var myMonthWeekArray = []
  // var myAllWeeksArray = []
  var loopcount = 0

  Months.forEach(function (element, index) {
    const monthname = MonthName(Months[index])
    const monthweeks = DataToChart[index].Weeks
    monthweeks.forEach(function (item, i) {
      const weekdata = DataToChart[index].Weeks_Features[i]
      const weeknumber = monthweeks[i]
      const weekcorrect = weekdata.Correct
      const weekcorrectduration = weekdata.Correct_Duration
      const weekviolators = weekdata.Violators
      const weekviolatorsduration = weekdata.Violators_Duration
      myMonthWeekArray[i + loopcount] = {
        name: 'Week' + ' ' + weeknumber.toString(),
        month: monthname,
        Correct: weekcorrect,
        Correct_Duration: weekcorrectduration,
        Violators: weekviolators,
        Violators_Duration: weekviolatorsduration
      }
    })
    // myAllWeeksArray[index] = {
    // myMonthWeekArray
    // }
    loopcount = loopcount + DataToChart[index].Weeks.length
  })

  return (
    myMonthWeekArray
    // myAllWeeksArray
  )
}
