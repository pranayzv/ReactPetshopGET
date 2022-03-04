import React, {Component} from "react"
import './shopstyle.css';
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
                 <table>
                 <tbody>
          <tr>
            <th>Petshop Name</th>
            <th>Status</th>
          </tr>
          {shops.map(shop => (
            <tr key={shop.id}>
              <td>{shop.name}</td>
              <td>{shop.status}</td>
            </tr>
          ))}
        </tbody>
    </table>

                
                {
                    errorMsg ? <h1>{errorMsg}</h1> : null
                }
            </div>
        )

    }


}

export default ShopLists



