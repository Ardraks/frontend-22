import React from 'react'
import baseurl from '../Api'
import axios from 'axios'

const Editprofile = (props) => {

    [inputs,setInputs]=useState(props.data)
    
    const inputhandler =(event)=> {
        const {name,value}=event.target
        setInputs((inputs)=>({...inputs,[name]:value}))
        console.log(inputs)
    }
    
    const savedata =()=>{
      
        if(props.method ==='put'){
          
            axios.put(baseurl+"/update/sedit/"+inputs._id,inputs)
            .then((response)=>{
                alert("Updated")
                window.location.reload(false)
              })
              .catch(err=>console.log(err))
        }
    }
    
   
    


  return (
    <>
    <div className="settings">
          {users.map((value, index) => (
              <div key={index}>
          <div className="settingsWrapper">
           <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">  
          <label>Profile Picture</label>
          <div className="settingsPP">
          {file && (
        <img className="writeImg" src={URL.createObjectURL(file)}   alt="" />
      )} 
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            //   onChange={handleimage}

            //   onChange={(e) => setFile(e.target.files[0])}
            />
           
          </div>
          <label>Username</label>
          <input type="text" name="username"  value={value.username}
          onChange={inputhandler}
          />
          <label>Email</label>
          <input type="email" name="email" value={value.email}
          onChange={inputhandler}
           />
          <label>Password</label>
          <input type="password" name="password" value={value.password}
          onChange={inputhandler}
           />
          <button className="settingsSubmitButton" type="submit" onClick={savedata}>
           Update
          </button>  
        </form> 
        
      </div>
     
    </div>
  ))}
  
  </div>
  </>
  )
}

export default Editprofile
