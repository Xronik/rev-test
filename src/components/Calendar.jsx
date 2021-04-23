import React, {useState, useEffect} from 'react'
import moment from 'moment'
import '../App.css'
import buildCalendar from './build'
import dayStyles from './styles'


function Calendar() {

    const [calendar, setCalendar] = useState([])
    const [value, setValue] = useState(moment())

  
    useEffect(()=>{        
        setCalendar(buildCalendar(value))
    }, [value])

    function currMonthName (){
        return value.format('MMMM')
    }
    function currYear (){
        return value.format('YYY')
    }

    return (
        <div className='calendar'>
            <div className='header'>
                <div>
                    {currMonthName()}  {currYear()}
                </div>
            </div>
            
            <div className='body'>
            {
                calendar.map((week)=>
                    <div className='week'>
                        {
                            week.map((day)=>
                            <div className='day' onClick={()=> setValue(day)}>
                                <div className={dayStyles(day, value)}>
                                    {day.format('D').toString()}
                                </div>
                            </div>
                            )
                        }
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default Calendar
