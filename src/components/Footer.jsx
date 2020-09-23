import React from "react"

const name = "Ayyub"
const year = new Date().getFullYear()

function Footer(){
   return(
       <div className="copyright">
            <p>Created by {name}</p>
           <p>Copyright @ {year}</p>
           
       </div>
   )
}
export default Footer