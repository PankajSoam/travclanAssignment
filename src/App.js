import React, { useEffect, useState } from 'react';
import './App.css';
import TableHeader from './TableHeader';
import UserList from './UserList';



function App(){

    // initializing state to store fetched data from api
    const [userData, setUserData] = useState([]); 
    const [showMinBid, setMinBid] = useState(false);    
     

    // fetching data and updating state in userData
    const url = 'https://intense-tor-76305.herokuapp.com/merchants'
    useEffect(() => {
        loadData();
    },[setUserData]);


    //function to fetch and setting in state
    const loadData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        // const data = res;
        setUserData(data);
    }

    //flag to toggle min/max bid amount
    let minOrMax = 'Max';
    function toggleBid(){
        if(showMinBid){
            
            setMinBid(false);
        }else{
            
            setMinBid(true);
        }
    }
    

    return(
        <div>
            <button onClick= {toggleBid}>Toggle bid </button>
            <TableHeader/>
            <UserList users={userData} showMinBid={showMinBid}/>
            <h1>Initialize</h1>
        </div>
            
    );
}

export default App;