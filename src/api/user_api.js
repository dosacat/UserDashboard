import UserDB from "./config/db.js";
import {delay,returnStatus} from "./helper/helper.js";


let users = UserDB()

// To read array of db users and return a paginated value with default showing page 1.
function getUsers() {
    return users;
}

// To read a single user of :id
function getUser(id) {
    return {data:users[id]};
    
}

// To create a user
function createUser(data){
    if (!data.firstName || !data.lastName || !data.email){
        throw new Error("The data provided is incomplete");
    }

    else {
        const id = users.length+1
        const newUser = { id, ...data };
        users = [ ...users, newUser ];
        return {data:returnStatus("success")}
    }
}

// To update a user
const updateUser = (id, data) => {
    if (!users[id]){
        throw new Error("User does not exist.")
    }
    else {
        users[id] = {...users[id],...data};
        return {data:returnStatus("success")}
    }
    

}

//Logic to delet user
const deleteUser = (id) =>{
    if (!users[id]){
        throw new Error("User does not exist.")
    }
    else {
        users = users.filter((obj)=> obj.id !== id)
        return {data:returnStatus("success")}
    }

}



// logic to GET/READ all users
const doGetUsers = async () => {
    try {
      await delay(300);
      const result = await getUsers();
      
      return result;
    } catch (error) {
      await delay(1000)
      console.log(error);
    }
  };
  
// logic to GET/READ user with :id
  const doGetUser = async (id) => {
    try {
      await delay(1000);
      const result = await getUser(id);
      console.log(result);
      return result;
    } catch (error) {
      await delay(1000)
      console.log(error);
    }
  };

// To POST/CREATE a user 
  const doCreateUser = async (data) => {
    try {
      await delay(1000)
        const result = await createUser(data);
        
        return result;
    } catch (error) {
        await delay(1000)
        console.log(error)
      
    }
  };

// To PUT/UPDATE a user 
const doUpdateUser= async (id,data) => {
    try {
      await delay(1000)
        const result = await updateUser(id,data);
        console.log(result);
        return result;
    } catch (error) {
        await delay(1000)
        console.log(error)
      
    }
}

// To delete USER data
const doDeleteUser = async(id) => {
    try {
        await delay(1000)
          const result = await deleteUser(id);
          
          return result;
      } catch (error) {
          await delay(1000)
          console.log(error)
        
      }
}


export {getUsers,
        createUser,
        updateUser,
        doGetUsers,
        doGetUser,
        doCreateUser,
        doUpdateUser,
        doDeleteUser};
