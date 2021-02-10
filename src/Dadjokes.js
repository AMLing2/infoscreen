import React, { useState, useEffect } from "react";

function Dadjokes() {
    const [joke, setjoke] = useState({});


    function getjoke() {
        fetch("https://www.reddit.com/r/dadjokes/top.json?t=day&limit=1").then((respone)=> respone.json()).then((json) => setjoke(json.data.children[0].data));


    }
    useEffect (()=> {
        getjoke();
    }, []);


    return <div className="joke">
        <p>{joke.title} </p> 
        <p>{joke.selftext}</p>
    </div>;
}

export default Dadjokes;