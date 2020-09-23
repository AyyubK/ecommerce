import React, { Component } from 'react'
import products from "./section/products"
import Details from "./section/Details"
import {Route} from "react-router-dom"

export class Section extends Component{
    render(){
        return(
            <section>
                <Route path="/products" component={products} exact />
                <Route path="/products/:id" component={Details} />
            </section>
        )
    }
}
export default Section