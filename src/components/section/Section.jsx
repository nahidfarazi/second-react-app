import React from 'react'
import classes from './section.module.css'
const Section = ({title, items}) => {
  return (
    <>
        <section className={classes.section}>
            <h3>{title}</h3>
            <ul className={classes.ul}>
               {items.map(item => <li>{item}</li>)}
            </ul>
        </section>
    </>
  )
}

export default Section