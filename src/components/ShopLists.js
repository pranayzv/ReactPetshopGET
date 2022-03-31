import React, {Component} from "react"
import './shopstyle.css';
import axios from "axios";

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button, Table } from "antd";




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

    fetchTable(){
        this.componentDidMount();
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
);

    }

    render(){
        
        //this.componentDidMount();
        
        const {shops , errorMsg} = this.state
        let pets = this.state.shops.map((v)=>{
            //console.log(v.id);
            //console.log(v.name);
            //console.log(v.status);
            return {
                id : v.id,
                name : v.name,
                status : v.status                
            }
        });
        console.log(pets);
        console.log("log")

      
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];
  console.log(dataSource);
  return <Table dataSource={pets} columns={columns} />;
    }


}

export default ShopLists



