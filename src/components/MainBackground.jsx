import react from 'react'
export default function MainBackground({children,main}){
    return(
        <header className={main}>
            {children}
        </header>
    )
}