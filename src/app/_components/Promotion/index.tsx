'use client'
import { useEffect, useState } from 'react'

import classes from './index.module.scss'

const Promotion = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 5)

  useEffect(() => {
    const timerID = setInterval(() => {
      const currentTime = new Date()
      const timeDifference = targetDate.getTime() - currentTime.getTime()

      if (timeDifference > 0) {
        const remainingSeconds = Math.floor(timeDifference / 1000)
        const remainingMinutes = Math.floor(remainingSeconds / 60)
        const remainingHours = Math.floor(remainingMinutes / 60)
        const remainingDays = Math.floor(remainingHours / 24)

        setTime({
          days: remainingDays,
          hours: remainingHours % 24,
          minutes: remainingMinutes % 60,
          seconds: remainingSeconds % 60,
        })
      }
    }, 1000)

    return () => {
      clearInterval(timerID)
    }
  }, [])

  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <h3 className={classes.title}> Deal of the Month</h3>
        <p>
          Get ready for a shopping experience like never before with our Deals of the Month! Every
          purchase comes with exclusive perks and offers, making this month a celebration of savvy
          choices and amazing deals. Don't miss out! 🎁🛒
        </p>

        <ul className={classes.stats}>
          <StatBox label="Days" value={time.days} />
          <StatBox label="Hours" value={time.hours} />
          <StatBox label="Minutes" value={time.minutes} />
          <StatBox label="Seconds" value={time.seconds} />
        </ul>
      </div>
    </section>
  )
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
  <li className={classes.statBox}>
    <h4>{value}</h4>
    <p>{label}</p>
  </li>
)

export default Promotion
