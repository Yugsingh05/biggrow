import React from 'react'


function layout({ children,}: Readonly<{children: React.ReactNode; }>) {
    return (
        <main className='bg-black'>
           {children}
            
        </main>
    )
}

export default layout
