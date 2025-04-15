import React from 'react'

const Hero2 = ({children,...props}) => {
  return (
    <div {...props}>{children}</div>
  )
}

export default Hero2