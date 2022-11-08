import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import Statistics from '../Statistics/Statistics';

const Home = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])

    return (
        <div>
            <Slider></Slider>
            <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 my-10'>
            {
                services.map(service => <Services key={service._id} service ={service} ></Services> )
            }
            </div>
                <div className='text-center mb-8'>
                <button className='btn btn-outline btn-info  text-center'>See more</button>
                </div>
            </div>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;