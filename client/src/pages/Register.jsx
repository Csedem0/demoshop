import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { register } from "../redux/apiCalls";
import { publicRequest } from "../requestMethods";
import { mobile } from "../responsive";

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
     rgba(225, 225, 225, 0.5),
     rgba(225, 225, 255, 0.5)
    ),
    url("https://wallpapercave.com/wp/wp7850402.jpg") center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
${mobile({ width: "75%" })}
`;

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`;

const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: gold;
color: white;
cursor: pointer;
`;

const Register = () => {
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const dispatch = useDispatch();

  let navigate = useNavigate();
  const routeChange = (e) => {
    e.preventDefault();
    register(dispatch, { username, email, password })
    let push = `/`;
    navigate(push);

  } 
  

  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
               <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
               <Input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
               <Input placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
               <Agreement>
                   By creating an account, I consent to the processing of my personal
                   data in accordance with the <b>PRIVACY POLICY</b>
               </Agreement>
               <Button onClick={routeChange} >CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register