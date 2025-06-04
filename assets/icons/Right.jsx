import React from 'react'

const Right = ({ size, className, color, fill, strokeWidth, ...props }) => {
    return (
        <svg className={className} width={size || "22"} height={size || "22"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={fill || `none`}>
            <path d="M21 12H3M21 12L15 6M21 12L15 18" stroke={color || `white`} strokeWidth={`${strokeWidth || "2"}`} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default Right

