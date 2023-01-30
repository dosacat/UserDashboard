import React, { useState } from "react";
import { useEffect } from "react";
import { getUsers,doUpdateUser,updateUser } from "../api/user_api";
import Pagination from "../components/pagination";
import "./users.css"

function Users(){

    
    const [users, setUsers] = useState(null);
    const [userid, setUserid] = useState(null)
    const totalPosts = 50;
    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage,setPostsPerPage] = useState(8);
    const [currentPosts,setCurrentPosts] = useState(null)
    const [editForm, setEditForm] = useState({
      firstName :"",
      lastName :"",
      email :"",
      avatar:"",
    })
    const [showEdit,setShowEdit]=useState(false);

    const lastPost = currentPage * postsPerPage;
    const firstPost = lastPost- postsPerPage;

    function toggleview(event){
      setShowEdit(!showEdit)
      setUserid(event.target.name)
  
    }

    function updateResponse(event){
      setEditForm({
        ...editForm,
         [event.target.name]:event.target.value
  
      })
    }

    async function editUser(){
      const edit = await doUpdateUser(userid,editForm);
      setEditForm({
        firstName :"",
        lastName :"",
        email :"",
        avatar:"",
      })
      alert("User Sucessfully edited!");
    }


    useEffect(() => {
        const doGetUsers = async () => {
          const result = await getUsers();
          setUsers(result);
          setCurrentPosts(result.slice(firstPost,lastPost));
        };
    
        doGetUsers();
      }, []);

      useEffect(()=>{
        try{
            setCurrentPosts(users.slice(firstPost,lastPost));
        }
        
        catch{
            console.log("data loading...")
        }
        
      },[currentPage])

      


      if (!currentPosts) {
        return null;
      }

    
      return (
        <>
        {showEdit && (
          <div class="form-popup" id="myForm">
          <form class="form-container">
            <h3>Edit User {userid}:</h3>

            <input type="text" placeholder="Avatar Link" name="avatar" id="avatar" onChange={updateResponse} value={editForm.avatar}/>
            <input type="text" placeholder="First Name*" name="firstName" onChange={updateResponse} value={editForm.firstName} required />
            <input type="text" placeholder="Last Name*" name="lastName" onChange={updateResponse} value={editForm.lastName} required/>
            <input type="text" placeholder="Email*" name="email" onChange={updateResponse} value={editForm.email} required/>
        
            <button type="button" class="btn" onClick={editUser}>Add</button>
            <button type="button" class="btn cancel" onClick={()=>setShowEdit(!showEdit)}>Cancel</button>
          </form>
        </div>
      )
      }


        <div className="userrow">
        <table>
                <tr>
                    <th>Sr no.</th>
                    <th>Avatar</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                </tr>

        

            {currentPosts.map((user) => {
    
              return (
                // 
                <tr key={user.id} className="rows">
                    <td>{user.id}.</td>
                    <td className="profile"><img src={user.avatar}/></td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td><img src="https://cdn-icons-png.flaticon.com/512/1827/1827951.png" name={user.id} onClick={toggleview}/></td>
                </tr>
                );
            })}
        </table>
    <Pagination totalPosts={totalPosts} setCurrentPage={setCurrentPage} postsPerPage={postsPerPage} />
        </div>
        </>
      );
    
}

export default Users;
