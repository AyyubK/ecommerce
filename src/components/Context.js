import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component{

state = {
    products:[
        {
        "id":"1",
        "title":"T-Shirt",
        "src":"https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1482&q=80",
        "description":"Polo T-Shirts Available with free delivery",
        "price":15,
        "colors":["black","white","green","red"],
        "count":1
    },
    {
        "id":"2",
        "title":"T-Shirt",
        "src":"https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1482&q=80",
        "description":"Polo T-Shirts Available with free delivery",
        "price":20,
        "colors":["black","white","green","red"],
        "count":1
    },
    {
        "id":"3",
        "title":"T-Shirt",
        "src":"https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1482&q=80",
        "description":"Polo T-Shirts Available with free delivery",
        "price":15,
        "colors":["black","white","green","red"],
        "count":1
    },
    {
        "id":"4",
        "title":"T-Shirt",
        "src":"https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1482&q=80",
        "description":"Polo T-Shirts Available with free delivery",
        "price":20,
        "colors":["black","white","green","red"],
        "count":1
    },
    {
        "id":"5",
        "title":"T-Shirt",
        "src":"https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1482&q=80",
        "description":"Polo T-Shirts Available with free delivery",
        "price":15,
        "colors":["black","white","green","red"],
        "count":1
    },
    {
        "id":"5",
        "title":"T-Shirt",
        "src":"https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1482&q=80",
        "description":"Polo T-Shirts Available with free delivery",
        "price":20,
        "colors":["black","white"],
        "count":1
    }

]
}

    render(){
        const {products} = this.state;
        return(
            <DataContext.Provider value={{products}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
