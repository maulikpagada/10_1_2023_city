import React from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';

function List({ listdata }) {
    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        listdata.map((l, i) => {
                            return (
                                <div className="col-lg-6">
                                    <div className="member d-flex align-items-start">
                                        <div className="pic"><img src={l.Img} className="img-doctor" alt /></div>
                                        <div className="member-info">

                                            <h4>Name: {l.Mname}</h4>
                                            {
                                                l.Des === undefined || l.Txt === undefined ?
                                                    <>
                                                        <span>Price: {l.price}</span>
                                                        <p>Quantity: {l.qua}</p>
                                                    </>
                                                    :
                                                    <>
                                                        <span>{l.Des}</span>
                                                        <p>{l.Txt}</p>

                                                    </>
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        listdata.map((l, i) => {
                            return (
                                <div className="col-lg-6">
                                    <div className="member d-flex align-items-start">
                                        <div className="pic"><img src={l.Img} className="img-doctor" alt /></div>
                                        <div className="member-info">

                                            <h4>Name: {l.Name}</h4>
                                            {
                                                l.Description === undefined || l.Qualification === undefined ?
                                                    <>
                                                        <span>Description: {l.Description}</span>
                                                        <p>Qualification: {l.Qualification}</p>
                                                    </>
                                                    :
                                                    <>
                                                        <span>Description: {l.Description}</span>
                                                        <p>Qualification: {l.Qualification}</p>
                                                    </>
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )



}

export default List;