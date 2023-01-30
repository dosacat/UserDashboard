import React from "react";
import "./Home.css"; 
import Users from "../users/users";
import {useState} from "react";
import {createUser,doCreateUser} from "../api/user_api"

function Home(){

  const [modal, setModal] = useState(false);
  const [formdata,setFormData]=useState({
    firstName :"",
    lastName :"",
    email :"",
    avatar:"",
  })

  function updateResponse(event){
    setFormData({
      ...formdata,
       [event.target.name]:event.target.value

    })
  }

  function toggleRules(){
    setModal(!modal); 
  }


  function adduser(event){
    //Sets value of submitetd form.
    event.preventDefault();
    setFormData({
      firstName :event.target.form.firstName.value,
      lastName :event.target.form.lastName.value,
      email :event.target.form.email.value,
      avatar:event.target.form.avatar.value,
    })

    const doCreateUser = async () => {
        const result = await createUser(formdata);
        console.log(result);
        //Clears input fields.
        setFormData({
          firstName :"",
          lastName :"",
          email :"",
          avatar:"",
        })
        alert("User Sucessfully added!");


  }
  doCreateUser();
}

    
    return (
        <div className="home">
            <div className="top">
                <div className="heading"> User Dashboard</div>
                    <figure className="plus" onClick={toggleRules}>
                        <figcaption>Add user:</figcaption>
                        <img src="https://thumbs.dreamstime.com/b/add-plus-icon-beautiful-meticulously-designed-vector-stock-174952736.jpg" alt="+"/>
                    </figure> 
            </div>
            {/* //Rewrite to include functional input components */}
            {modal && (
                <div class="form-popup" id="myForm">
                <form class="form-container">
                  <h3>Add User</h3>

                  <input type="text" placeholder="Avatar Link" name="avatar" id="avatar" onChange={updateResponse} value={formdata.avatar}/>
                  <input type="text" placeholder="First Name*" name="firstName" onChange={updateResponse} value={formdata.firstName} required />
                  <input type="text" placeholder="Last Name*" name="lastName" onChange={updateResponse} value={formdata.lastName} required/>
                  <input type="text" placeholder="Email*" name="email" onChange={updateResponse} value={formdata.email} required/>
              
                  <button type="button" class="btn" onClick={adduser}>Add</button>
                  <button type="button" class="btn cancel" onClick={toggleRules}>Cancel</button>
                </form>
              </div>
            )
            }


            <div className ="homeWrap">
                <Users/>
                
            </div>


        </div>
    )
};

export default Home;