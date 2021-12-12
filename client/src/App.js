
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //부트스트랩 적용
//import {Button} from "react-bootstrap";
import MenuBar from './component/MenuBar';
import axios from "axios";
import React, {useState,useEffect} from 'react';
let rule = [];
function App() {
  const [restaurants, setRestaurants] = useState([]);
   useEffect(
     async() => {
       try{
       const result = await axios.get("/restaurant");
       rule = JSON.stringify(result.data); //Array.from(JSON.stringify(result.data))
      setRestaurants(rule);
      }
       catch(e) { console.error(e.message);}
     }
   )
  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState(...this.state, {restaurants:res})) //this.setState({restaurants:res})
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('/api/restaurants');
  //   const body = await response.json();
  //   console.log(body);
  //   return body;
  // }
  return (
    
    <div className="App Container">
      <MenuBar restaurants = {restaurants}/>
    </div>
    
  ); }

export default App;
