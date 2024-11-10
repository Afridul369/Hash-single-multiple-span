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
// =======learn this code====
let abir = /#([^#]+)#/g;

// =========here no need 2nd replace & need $1========
let multiplespan = text.replace(abir,"<span class='hashcolor'>$1</span>");

// =============here h1 has single end tag=======
  return (<h1 dangerouslySetInnerHTML={{__html:multiplespan}}/> 
  
)
}

export default Heading

