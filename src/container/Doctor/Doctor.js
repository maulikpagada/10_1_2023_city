import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import List from '../../component/List/List';


function Doctor(props) {
  const [adata, setAdata] = useState([])

  useEffect(() => {
    let localdata = JSON.parse(localStorage.getItem("Doctor"));

    if (localdata !== null) {
      setAdata(localdata)
    }
  }, [])

  return (
    <div>
      <section id="doctors" class="doctors">
        <div className="container">
          <div className="section-title">
            <h2>Doctors</h2>
          </div>

          <List listdata={adata} />
        </div>
      </section>
    </div>
  );
}

export default Doctor;