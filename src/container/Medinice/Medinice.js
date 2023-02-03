import React, { useEffect, useState } from 'react';
import List from '../../component/List/List';


function Medinice(props) {
    
    const [data, setdata] = useState([])

    useEffect (() => {
        let localdata = JSON.parse(localStorage.getItem("medicine"));

        if (localdata !== null) {
            setdata(localdata)
        }
    },[])

    return (
        <>
        <section id="departments" class="departments">
            <div class="container">
                <div class="section-title">
                    <h2>Medicine</h2>
                </div>
            </div>
            <List listdata = {data}/>
        </section>
        </>
    );

}

export default Medinice;