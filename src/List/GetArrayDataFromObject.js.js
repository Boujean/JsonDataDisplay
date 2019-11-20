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

export function AllDataByWeek (Weeks, DataToChart) {
  var myArray = []

  Weeks.forEach(function (element, index) {
    const weeknumber = Weeks[index]
    const weekcorrect = DataToChart[index].Correct
    const weekcorrectduration = DataToChart[index].Correct_Duration
    const weekviolators = DataToChart[index].Violators
    const weekviolatorsduration = DataToChart[index].Violators_Duration
    myArray[index] = {
      name: weeknumber,
      Correct: weekcorrect,
      Correct_Duration: weekcorrectduration,
      Violators: weekviolators,
      Violators_Duration: weekviolatorsduration
    }
  })

  return (
    myArray
  )
}
