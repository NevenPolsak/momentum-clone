import React from 'react'
import {DateContainer} from "./DateStyles"

function DateToday() {
    let today = new Date()
    let date = today.getFullYear() + "/" + today.getMonth() + "/" + today.getDate()
  return (
  <DateContainer>
    {date}
  </DateContainer>
  )
}

export default DateToday;
