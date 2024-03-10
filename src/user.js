/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const User =()=>{
    const [userData, setUserData] = useState({});
    const [displayusername, setDisplayUsername] = useState('');

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = () => {
          const username = sessionStorage.getItem('username');
          if (username) {
            // Find the user with the matching ID
              const user = users.find(u => u.id === username);

          if (user) {
                setUserData(user);
                setDisplayUsername(username);
        } else {
                console.error('User not found');
                toast.error('User not found');
            }
        } else {
                console.error('No username found in sessionStorage');
                toast.error('No username found');
        }
    };

    
    const users = [
        {
            "id": "adminuser",
            "name": "Nihira",
            "password": "admin",
            "email": "nihiratechiees@gmail.com",
            "phone": "8989898989",
            "country": "usa",
            "address": "",
            "role": "admin",
            "gender": "female",
            "landmarks": "Statue of Liberty, New York",
            "image":"https://cdn.oneesports.gg/cdn-data/2023/12/Anime_MyHeroAcademia_Deku.jpg"
          },
        {
            "id": "ntuser",
      "name": "Fullname",
      "password": "ntuser",
      "email": "email@email.com",
      "phone": "56778889989",
      "country": "singapore",
      "role": "user",
      "gender": "male",
      "landmarks": "The most famous landmark in Singapore: Merlion Park",
      "image":"https://www.comingsoon.net/wp-content/uploads/sites/3/2023/09/My-Hero-Academia-Chapter-402-Release-Date.jpg"

        },
        {
            "id": "deku",
            "name": "midoriya",
            "password": "12345",
            "email": "midoriya@gmail.com",
            "phone": "12345678",
            "country": "France",
            "address": "rgdfgdgdg",
            "gender": "male",
            "role": "user",
            "landmarks": "Eiffel Tower",
            "image":"https://i.pinimg.com/originals/9b/41/3c/9b413c1d24a9d2c9d1006eadfed92f71.jpg"
          },
          {
            "id": "torahu001",
            "name": "torahu",
            "password": "12345",
            "email": "john@gmail.com",
            "phone": "12345678",
            "country": "England",
            "address": "rgdfgdgdg",
            "role": "user",
            "gender": "male",
            "landmarks": "London Bridge",
            "image":"https://i.pinimg.com/474x/72/a7/63/72a76371e179629feece1bed4c54a30e.jpg"
          },
          {
            "id": "alicekey",
            "name": "Alice",
            "password": "12345",
            "email": "alice@gmail.com",
            "phone": "12345678",
            "country": "Australia",
            "role": "user",
            "address": "rgdfgdgdg",
            "gender": "male",
            "landmarks": "opera house",
            "image":"https://www.seekpng.com/png/detail/107-1070622_ayranposting-before-sleep-kobayashi-san-chi-no-maid.png"
          }
      
    ];

    return (
        <div>
          <div className="header">
            <span style={{ marginLeft: '70%' }}>Welcome user <b>{userData.name}</b></span>
            <Link style={{ float: 'right' }} to={'/login'}>Logout</Link>
         </div>
    
          <h2>Welcome, {displayusername}</h2>
    
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
                <td>Landmark</td>
                <td>Role</td>
                <td>Gender</td>
              </tr>
            </thead>
            <tbody>
              <tr key={userData.id}>
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
export default User;