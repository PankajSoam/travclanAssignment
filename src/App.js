import React, { useEffect, useState } from 'react';
import './App.css';



function App(){

    // initializing state to store fetched data from api
    const [userData, setUserData] = useState(0);     
     
    // fetching data and updating state in userData
    useEffect(() => {
        fetch('https://intense-tor-76305.herokuapp.com/merchants')
        .then(res => res.json())
        .then(result => {
            setUserData({result});
            console.log({userData});
        });
    },[]);


    return(
        <h1>Initialize</h1>
    );
}

export default App;