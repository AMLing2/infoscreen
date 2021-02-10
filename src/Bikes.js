import React, {useEffect, useState} from "react";
import createEnturService from '@entur/sdk'

const service = createEnturService({ clientName: 'creamytoad-infoscreen' })

function Bikes () {
    const [bikeStations, setBikeStations] = useState([]);

    useEffect(()=>{
        service.getBikeRentalStationsByPosition({ latitude: 63.428311, longitude: 10.392514 },230).then((data)=> setBikeStations(data));
    }, []);


    
    return <div className="bike">
        {
            bikeStations.map((stationData) => <Station data={stationData} />)
        }
    </div>
}

export default Bikes;

function Station (props) {
    const {data} = props;
    return <div className="station">Stations</div>;
}