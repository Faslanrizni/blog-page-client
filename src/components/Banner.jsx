import React from 'react'
export default function Banner({children,title,subTitle,form}){
    return(
        <div className={'banner'}>
            <h1>{title}</h1>
            <div>{form}</div>
            <p>{subTitle}</p>
            {children}
        </div>
    )
}