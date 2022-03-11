import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, WhatsApp } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../../responsive";

const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
margin: 20px 0px;
`;

const SocialContainer = styled.div`
display: flex; 
`;

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;

const Center = styled.div`
flex: 1;
padding = 20px;
${mobile({ display: "none" })}
`;

const Title = styled.h3`
margin-bottom: 30px;
`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;

const Right = styled.div`
flex: 1;
padding = 20px;
${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;  

const Payment = styled.img`
width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>DEMO.</Logo>
            <Desc>We are one of the fastest growing online shopping service in this part of the world, because we are reliable and trust worthy....online shopping haven't been this easy and fun, so buy now from DEMO!</Desc>
            <SocialContainer>
                <a href="https://www.facebook.com/sobulachi.junior/">
                <SocialIcon color="385999">
                    <Facebook/>
                </SocialIcon>
                </a>
                <SocialIcon color=""> 
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="">
                    <WhatsApp/>
                </SocialIcon >
            </SocialContainer>
        </Left>
        <Center>

        <Title>We Sell</Title>
            <List>
                <ListItem>Phones</ListItem>
                <ListItem>Shoes</ListItem>
                <ListItem>Man Wears</ListItem>
                <ListItem>Woman Wears</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>Sport Kits</ListItem>
                <ListItem>Kids Wears</ListItem>
                <ListItem>Watches</ListItem>
                <ListItem>Laptops</ListItem>
                <ListItem>And more...</ListItem>
            </List>
        </Center>
        <Right>

            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/> 196 Old Refinary Road, Texas USA
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/> +234 915 9816 020 
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/> emmasobula@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer