import logo from './logo.svg';
import './dashboard.scss';

function UserProfile() {
  return (
    <div className="dashboard">
      <div className="left">
        <div className="divimage">
        <img src="/career.png" />
        </div>
     
         <div className="list">
           <ul>
             <li>Dashboard</li>
             <li>Users</li>
             <li>Admin Users</li>
             <li>Whatsapp</li>
           </ul>
         </div>
         <span className="actionbtn">LOGOUT</span>
      </div>
      <div className="right">
      <div className="top">
        <span className="topbtn">
          Add User
        </span>
      </div>
      <div className="middle">
        <p className="head">Home</p>
        <p className="content">Admin-Users</p>
      </div>
      <div className="bottom">
     
                <table>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Usertype</th>
                      
                        <th>Mentees</th>
                      
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>1</td>
                        <td>North America</td>
                        <td>Supply chain</td>
                        <td>Hari Govind2</td>
                        <td>Anuradha</td>
                        <td>Accelerate</td>
                      
                        <td>ParulK</td>
                  
                    </tr>
                    <tr>
                    <td>1</td>
                        <td>North America</td>
                        <td>Supply chain</td>
                        <td>Hari Govind2</td>
                        <td>Anuradha</td>
                        <td>Accelerate</td>
                    
                        <td>Paarul K</td>
                       
                    </tr>
                    <tr>
                    <td>1</td>
                        <td>North America</td>
                        <td>Supply chain</td>
                        <td>Hari Govind2</td>
                        <td>Anuradha</td>
                        <td>Accelerate</td>
                       
                        <td>Paarul K</td>
                      
                    </tr>
                    <tr>
                    <td>1</td>
                        <td>North America</td>
                        <td>Supply chain</td>
                        <td>Hari Govind2</td>
                        <td>Anuradha</td>
                        <td>Accelerate</td>
                    
                        <td>Paarul K</td>
                       
                    </tr>
                    <tr>
                    <td>1</td>
                        <td>North America</td>
                        <td>Supply chain</td>
                        <td>Hari Govind2</td>
                        <td>Anuradha</td>
                        <td>Accelerate</td>
                      
                        <td>Paarul K</td>
                      
                    </tr>
                    </tbody>
                </table>
            </div>
            </div>
      
    </div>
  );
}
export default UserProfile;