import axios from "axios";
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { dotPulse } from 'ldrs'

dotPulse.register()

const Customer = () => {
    const [isLoading,setIsLoading] = useState(true);
    const [customer,setCustomer] = useState([]);
    useEffect(() => { 
        fetchData();
    },[]);

    const fetchData = () => {
        axios.get('http://localhost:5000/customer')
        .then(result =>{
            if(result.data.Status){
                setCustomer(result.data.customer);
            }else{
                alert(result.data.Error);
            }
            setIsLoading(false);
        }).catch(error =>{ console.log(error)});
    };

    return (
        <div className="px-5 mt-3 min-vh-100">
            <div className="mt-3">
                {   
                    isLoading &&
                    <>
                        <div className="d-flex justify-content-center mt-5">
                            <l-dot-pulse
                            size="80"
                            speed="1.5" 
                            color="#6610f2" 
                            ></l-dot-pulse>
                        </div>
                    </>
                }
                {!isLoading &&
                <table className='table table-striped table-hover align-middle mb-0 bg-white'>
                    <thead className='text-white bg-head border'>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Address</th>
                            <th scope='col'>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        customer.map((e, index) =>(
                            <tr key={index}>
                                <th scope='row' className='idNumber'>{index + 1}</th>
                                <td>{e.fullname}</td>
                                <td>{e.address}</td>
                                <td>{e.phone_number}</td>
                                
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                }
            </div>
        </div>
    )
};

export default Customer;