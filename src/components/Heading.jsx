// =========Single Span======
// import React from 'react'

// const Heading = ({text}) => {

//     let abir = text.replace('#', "<span class='hashcolor'> ").replace('#','</span>')

//   return (
//     <>
//     <h1 dangerouslySetInnerHTML={{__html:abir}}></h1>
//     </>
//   )
// }

// export default Heading

// =============Double Span==========

import React from 'react'

let Heading = ({text}) => {

let abir = /#([^#]+)#/g;

let multiplespan = text.replace(abir,"<span class='hashcolor'>$1</span>");

  return (<h1 dangerouslySetInnerHTML={{__html:multiplespan}}/> 
  
)
}

export default Heading

