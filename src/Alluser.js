import React, { useEffect, useState } from "react";
const Alluser=() => {
  
    const [data, setData] = useState([]);
   
     // eslint-disable-next-line react-hooks/rules-of-hooks
     useEffect(() => {
         const fetchData = async () => {
            try {
            const response = await fetch('http://localhost:8080/users');
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
    
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error.message);
          }
        };
    
            fetchData();
        }, []);

     

    
    return(
        <div className="container">
        <div className="card">
        <div className="card-header">
                <h3> All users</h3>
            </div>
             <div className="card-body">
               
                <br></br>
                <table className="table table-bordered">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>Username</th>
                            <th>name</th>
                            <th>Country</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                               data.map(item => (
                                <tr key={item.id}>
                                     <td>{item.id}</td>
                                     <td>{item.name}</td>
                                     <td>{item.country}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );

    
};
export default Alluser;