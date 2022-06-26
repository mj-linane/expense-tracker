import React from 'react'

const Card = (props) => {
  const classes = 'card ' + props.className
  return (
    <>
      <div className={classes}>{props.children}</div>
      <style jsx>
        {`
          .card {
            border-radius: 12px;
            box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
          }
        `}
      </style>
    </>
  )
}

export default Card
