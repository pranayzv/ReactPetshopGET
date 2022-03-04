import React, {Component} from "react"
import axios from "axios";


class ShopLists extends Component {

    constructor(){
        super()
        this.state = {
            shops: [],
            errorMsg: ""
        }
    }

    componentDidMount(){

        axios.get("https://petstore.swagger.io/v2/pet/findByStatus?status=available")
        .then(response => {this.setState({shops:response.data})})
        .catch(error => {
            this.state({errorMsg: "Error retriving the data."})
            console.log(error)
        })


    }

    render(){
        const {shops , errorMsg} = this.state
        return (
            <div>
                <h1>Petshop's Available:</h1>
                {
                    shops.length ?
                    shops.map(shop => <div key={shop.id}><label>{shop.name}</label></div>): null
                }   
                {
                    errorMsg ? <h1>{errorMsg}</h1> : null
                }
            </div>
        )

    }


}

export default ShopLists



