import React from 'react'

const heading={
    fontSize: '80px',
    color: 'blue'
}

function Inline(){
    return(
        <div>
            {/* <h1 className={styles.success}>Success</h1> will give error */}
            <h1 className="error">Error</h1>
            <h1 style={heading}>inline</h1>
        </div>
    )
}

export default Inline