import React from 'react'
import styled from 'styled-components'
const Login = () => {
  return (
    <Container>
               <Nav>
                <Logo>
                    <a href='/'>
                        <img src="/images/login-logo.svg" />
                    </a>

                </Logo>
                <JoinSigninWrap>
                    <Join>
                        Join now
                    </Join>
                    <SignIn>
                        Sign in
                    </SignIn>
                </JoinSigninWrap>
            </Nav>
            <Section>
                <LeftWrap>
                    <span>
                    Welcome to your professional community
                    </span>
                    <Form>
              
              <Google>
                <img src="/images/google.svg" alt="" />
                Sign in With Google
              </Google>
            </Form>
                </LeftWrap>
                <RightWrap>
                    <img src="images/login-hero2.svg" alt="" />
                </RightWrap>
            </Section>
    </Container>
  )
}

export default Login

const Container = styled.div`
       width : 100%;
       height: 99.2vh;
       
       display: flex;
       flex-direction: column;
       align-items: center;
       // Testing
       /* background-color: yellow; */
       /* outline: 3px solid black; */
`;

const Nav = styled.div`
        width: 99.5vw;
        height: 12vh;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;

         // Testing
        /* outline: 1px solid red; */
     
`;

const Logo = styled.div`
        width : 9vw;
        margin-left: 16.7vw;
`;

const JoinSigninWrap = styled.div`
        display : flex;
        flex-wrap: nowrap;
        margin-right: 1vw;
        gap: 1vw;
        margin-right: 15vw;
`;

const Join = styled.div`
        font-size: 1.1vw;
        color: rgba(0,0,0,0.6);
        font-weight: 600;
        transition-duration: 200ms;
        padding: 9px;
        cursor: pointer;
        &:hover{
        background-color: rgba(0,0,0,0.2);
        color: rgba(0,0,0,0.8);
        border-radius: 20px; 
        font-weight: 700;
        
        } 
`;

const SignIn = styled.div`
    font-size: 1.1vw;
    padding: 9px ;
    font-weight: 600;
    color: #0a66c2;
    box-shadow: inset 0 0 0 1.3px #0a66c2;
    border-radius: 20px;
    background-color: #f5f5f5;
    cursor: pointer;
    &:hover{
        font-weight: 700;
    }
    
`;

const Section = styled.div`
    display: flex;
    width: 83%;
    height: 100%;
    margin-left: 16.6vw;
    
    /* padding-left: 20vw; */
    /* background-color: pink; */

`;

const LeftWrap = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 12vh;
    /* align-items: center; */
    justify-content: center;
    padding-bottom: 29vh;
    span{
        width: 60%;
        font-size: 2.8vw;
        font-weight: 250;
        /* color: #0a66c2; */
        color: #8f5849;

        /* margin-left: 3vw; */
    }
    /* background-color: blue; */
`;

const RightWrap = styled.div`

    width: 50%;
    display: flex;
    align-items: center;
    justify-content: left;
    /* background-color: green; */
    img{
        width: 33vw;
        height: 33vw;
    }
`;

const Form = styled.div`
    /* background-color: red; */
`;

const Google = styled.button`
    max-width: 25vw;
    display: flex;
    gap: 0.7vw;
    align-items: center;
    justify-content: center;
    font-size: 1.15vw;
    padding: 0 3vw;
    color: rgba(0, 0, 0, 0.9);
    background-color: #f5f5f5;
    font-weight: 550;
    width: 100%;
    height: 7vh;
    border-radius: 30px;
    box-shadow: inset 0 0 0 0.7px rgb(0 0 0 / 60%),
                inset 0 0 0 1.5px rgb(0 0 0 / 0%),
                inset 0 0 0 0.7px rgb(0 0 0 / 0) ;
    vertical-align: middle;
    transition-duration: 167ms;
    img {
      padding-right: 10px;
      width: 2vw;
      height: 2vw;
    }
    &:hover {
      background-color: rgba(207, 207, 207, 0.99);
      color: rgba(0, 0, 0, 0.8);
    }

`;

