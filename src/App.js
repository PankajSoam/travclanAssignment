import React, { useEffect, useState } from 'react';
import './App.css';
import UserList from './UserList';



function App(){

    // initializing state to store fetched data from api
    const [userData, setUserData] = useState([]); 
    const [showMinBid, setMinBid] = useState(false);    
     

    // fetching data and updating state in userData
    const url = 'https://intense-tor-76305.herokuapp.com/merchants'
    useEffect(() => {
        loadData();
        console.log(typeof({userData}));
    },[setUserData]);


    //function to fetch and setting in state
    const loadData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        // const data = res;
        setUserData(data);
        console.log(data);
    }

    //flag to toggle min/max bid amount
    function toggleBid(){
        if(showMinBid){
            setMinBid(false);
        }else{
            setMinBid(true);
        }
    }
    

    return(
        <div>
            <button onClick= {toggleBid}>Toggle bid {showMinBid}</button>
            <UserList users={userData} showMinBid={showMinBid}/>
            <h1>Initialize</h1>
        </div>
            
    );
}

export default App;