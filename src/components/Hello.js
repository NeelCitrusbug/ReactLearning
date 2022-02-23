import React from 'react'

const Hello = () => {

    // with using jsx
    // return(
    //     <div className='dummyClass'>
    //     <h1>Hello Neel!</h1>
    // </div>
    // )


    // without usign jsx  

    return React.createElement('div',{id:'Hello',className:'dummyClass'},React.createElement('h1',null,'Hello Neel!'))
}

export default Hello