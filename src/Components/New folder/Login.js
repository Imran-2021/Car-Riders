import React, { useContext, useState } from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../App';
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
firebase.initializeApp(firebaseConfig); 

function LogIn() {
const  provider = new firebase.auth.GoogleAuthProvider();
const [newUser,setnewUser]=useState(false);
const [abc,setupabc]=useState({
  
  isTure :false,
  displayName:'',
  email:'',
  photoURL:'',
  password : '',

});

const [loggedUser,setLoggedInUser]=useContext(UserContext);
const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
  const handleGoogleSignIn=()=>{
 
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    const {displayName,email,photoURL} = result.user;
    const newUserInfo={name:displayName,email,photoURL}
    setLoggedInUser(newUserInfo)
    history.replace(from)
    setupabc({
      isTure :true,
      displayName:displayName,
      email:email,
      photoURL:photoURL,
    })
  }).catch((error) => {
    var errorMessage = error.message;
    console.log(errorMessage);
  });
  }
  const handleGoogleSignOut =()=>{
    firebase.auth().signOut().then(() => {
      const user = {
        isTure :false,
        displayName:'',
        email:'',
        photoURL:'',
        errorMessage: '',
        success : false,
    }
    setupabc(user)
    }).catch((error) => {
      console.log(error);
    });
  }
  const handleChange =(e)=>{
  let isformValid= true;
    if(e.target.name==='email'){
      isformValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name==='password'){
      isformValid = e.target.value.length>6 && /\d{1}/.test(e.target.value);
    }
    if(isformValid){
     const newUserInfo ={...abc, }
     newUserInfo[e.target.name]=e.target.value;
     setupabc(newUserInfo)
    }
  }
  const handleSubmit =(e)=>{
  if(newUser && abc.email && abc.password){
    firebase.auth().createUserWithEmailAndPassword(abc.email, abc.password)
  .then((userCredential) => {
    // Signed in 
    const newUserInfo ={...abc};
    newUserInfo.errorMessage= '';
    newUserInfo.success = true;
    setupabc(newUserInfo)
    setLoggedInUser(newUserInfo)
    history.replace(from)
    updateUserName(abc.name);
  })
  .catch((error) => {
    const errorMessage = error.message;
    const newUserInfo ={...abc};
    newUserInfo.errorMessage=errorMessage;
    newUserInfo.success = false;
    setupabc(newUserInfo)
    });
    }
    if(!newUser && abc.email && abc.password){
      firebase.auth().signInWithEmailAndPassword(abc.email, abc.password)
  .then((userCredential) => {
    // Signed in
    const newUserInfo ={...abc};
    newUserInfo.errorMessage= '';
    newUserInfo.success = true;
    setupabc(newUserInfo)
    setLoggedInUser(newUserInfo)
    setLoggedInUser(userCredential.user)

    history.replace(from)
    console.log('sing in userinfo',userCredential.user.displayName);
  })
  .catch((error) => {
    const errorMessage = error.message;
    const newUserInfo ={...abc};
    newUserInfo.errorMessage=errorMessage;
    newUserInfo.success = false;
    setupabc(newUserInfo)
  });
    }
    e.preventDefault();
  }

    const updateUserName = name=>{
      var user = firebase.auth().currentUser;
          user.updateProfile({
          displayName: name,
        }).then(function() {
         console.log('user name updated successfully');
        }).catch(function(error) {
         console.log(error);
        });
    }


  return (
    <div style={{textAlign:'center'}}>
    
      {
        abc.isTure ?  <div>
          <p>welcome to {abc.displayName}</p>
          <p> your email : {abc.email}</p>
          <p><img src={abc.photoURL} alt=""/></p>
        
        </div>: <h3 style={{color:'green'}}> </h3>
      }
{/* 
      <h3> our own authentication </h3> */}
{/* 
      <p>name: {abc.name}</p>
      <p>email: {abc.email}</p>
      <p>password: {abc.password}</p> */}


      <form action="" onSubmit={handleSubmit}>
        <input type="checkbox" onChange={()=>setnewUser(!newUser)} name="newUser" id=""/> 
        <label htmlFor="newUser">New User Sign uP</label> <br/> <br/>
        {newUser && <input name="name" onBlur={handleChange} type="text" placeholder='your name'/>}
      <br/> <br/>
      <input type="text" name ="email" onBlur={handleChange} placeholder="write your email address" required /> <br/> <br/>
      <input type="password" name="password" onBlur={handleChange} id="" placeholder="write your password" required/> <br/> <br/>
      <input type="submit"class="btn btn-primary"  value={newUser ? "Sign Up": "Sign In"}/>
      </form>
      <p style={{color:'red'}}>{abc.errorMessage}</p>
      {
        abc.success &&  <p style={{color:'green'}}>user {newUser ?'created': 'logged In'} successfully.</p>
      }
      <p>______________or____________</p>
      
      {abc.isTure? <button onClick={handleGoogleSignOut} class="btn btn-primary" style={{cursor:'pointer',padding:"10px 20px",marginTop:'5%'}} >Sign Out</button> :
      <button onClick={handleGoogleSignIn} class="btn btn-primary" style={{cursor:'pointer',padding:"10px 20px"}} >Sign IN with google</button>
      }
      
    </div>
  );
}

export default LogIn;
