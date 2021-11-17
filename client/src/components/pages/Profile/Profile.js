import { Container, Button } from "react-bootstrap"  
import './Profile.css'


const Profile = ({ loggedUser }) => {
  console.log(loggedUser)
  return ( 
    <div className="profilebackground">
    <Container className="text-center profile">
      <h1 className="title" >Welcome, {loggedUser.username}!</h1>
      <img className="profilephoto" src={loggedUser.photo} alt="naty"></img> 
      <p className="email" >Your email: {loggedUser.email}</p> 
      <Button  className="btn-danger">My favorites products</Button>
    </Container>
    </div>
  )
}

export default Profile