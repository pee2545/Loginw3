import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
const Home = () => {
    const [userData, setUserData] = useState({});
   
    useEffect(() => {
     
        const fetchData = async () => {
            try {
              const response = await fetch('http://localhost:8080/users');
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
      
              const [user] = await response.json();
              setUserData(user);
            } catch (error) {
              console.error('Error fetching data:', error.message);
            }
          };
      
          fetchData();
        }, []);

        
   

    
   
    return (
        
        <div>
             <div>
            {
                <div className="header">

                    <Link to={'/'}>Home</Link>
                    <Link style={{ marginLeft: '100px' }}to={'/landmarkAll'}>All Landmark</Link>
                    <Link style={{ marginLeft: '100px' }}to={'/alluser'}>All User</Link>
                    <span style={{ marginLeft: '60%' }}>Welcome admin <b>{userData.name}</b></span>
                    <Link style={{ float: 'right' }} to={'/login'}>Logout</Link>
                </div>
            }

        </div>
            <h2>Welcome {userData.name}</h2>
            <div className="profile-picture">
                <img src={userData.image} alt="Profile" />
            </div>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Country</td>
                        <td>landmark</td>
                        <td>Role</td>
                        <td>Gender</td>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                     <td>{userData.id}</td>
                     <td>{userData.name}</td>
                     <td>{userData.email}</td>
                     <td>{userData.phone}</td>
                     <td>{userData.country}</td>
                     <td>{userData.landmarks}</td>
                     <td>{userData.role}</td>
                     <td>{userData.gender}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Home;
