import React, { useRef, useState } from 'react'
import '../stayle/account.css'
import bg from '../img/bg.png'
import avatar from '../img/Avatar.png'
import qalam from '../img/qalam.svg'


function Account() {
const[userInfo,setUserInfo]=useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")):
    {
    name:'fgxdfg',
        email:'dsfgsdfg',
        password:'gsdfg',
        phone:'sdgserg',
        adress:'dfgdf',
        birth:'dfgsdfg'
})

    let modal=useRef()
    let user_name=useRef()
    let user_email=useRef()
    let user_password=useRef()
    let user_phone=useRef()
    let user_adress=useRef()
    let user_birth=useRef()

    function openModal(){
        modal.current.classList.add("show")
    }
    function closeModal(){
        modal.current.classList.remove("show")
    }
function submitHandle(e) {
    e.preventDefault()
    let user_info={
        name:user_name.current.value,
        email:user_email.current.value,
        password:user_password.current.value,
        phone:user_phone.current.value,
        adress:user_adress.current.value,
        birth:user_birth.current.value
    }
    localStorage.setItem("user",JSON.stringify(user_info))
    setUserInfo(user_info)
    closeModal()
}

  return (
    <main className='account' >
        
        <div ref={modal} className="modal">
        <button className='close' onClick={closeModal}>Close</button>
            <form onSubmit={(e)=>submitHandle(e)}>
                <input ref={user_name} type="text" placeholder='name' />
                <input ref={user_email} type="text" placeholder='email' />
                <input ref={user_password} type="text" placeholder='password' />
                <input ref={user_phone} type="text" placeholder='phone' />
                <input ref={user_adress} type="text" placeholder='adress' />
                <input ref={user_birth} type="text" placeholder='birth' />
                <button  type="submit">SUBMIT</button>
            </form>
        </div>
<div className="container">
<div className="account__hero">
<button>Upload new cover</button>

<div className="account__content">
    <img className='avatar' src={avatar} alt="" />
    <img onClick={openModal} className='pencil' src={qalam} alt="" />
    <h3>{userInfo.name}</h3>
    <p>john.doe@gmail.com</p>
</div>

</div>
<div className="info">
    <div>
        <span>Name</span>
        <h3>{userInfo.name}</h3>
    </div>
    <button>Change</button>
</div>
<div className="info">
    <div>
        <span>Email</span>
        <h3>{userInfo.email}</h3>
    </div>
    <button>Change</button>
</div>
<div className="info">
    <div>
        <span>Password</span>
        <h3>{userInfo.password}</h3>
    </div>
    <button>Change</button>
</div>
<div className="info">
    <div>
        <span>Phone number</span>
        <h3>{userInfo.phone}</h3>
    </div>
    <button>Change</button>
</div>
<div className="info">
    <div>
        <span>Address</span>
        <h3>{userInfo.adress}</h3>
    </div>
    <button>Change</button>
</div>
<div className="info">
    <div>
        <span>Date of birth</span>
        <h3>{userInfo.birth}</h3>
    </div>
    <button>Change</button>
</div>
</div>
    </main>
  )
}

export default Account