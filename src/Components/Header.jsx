//Inbuilt func()
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

//User func()
import { signOutAPI } from '../actions'

//components
import { Outlet } from 'react-router-dom'



const Header = (props) => {
  return (
    <div>
      <HeaderC >

        <Content >
          <Logo>
            <a href="/home">
              <img src="/images/home-logo.svg" alt="" />
            </a>
          </Logo>
          <Search>
            <div >
              <input type="text" placeholder='Search' />
            </div>

            <SearchIcon>
              <img src="/images/search-icon.svg" alt="" />
            </SearchIcon>
          </Search>
          <Nav>
            <NavListWrap>
              <NavList className='active'>
                <a>
                  <img src="/images/nav-home.svg" alt="" />
                  <span>
                    Home
                  </span>
                </a>
              </NavList>

              <NavList>
                <a>
                  <img src="/images/nav-network.svg" alt="" />
                  <span>
                    Network
                  </span>
                </a>
              </NavList>

              <NavList>
                <a>
                  <img src="/images/nav-jobs.svg" alt="" />
                  <span>
                    Jobs
                  </span>
                </a>
              </NavList>

              <NavList>
                <a>
                  <img src="/images/nav-messaging.svg" alt="" />
                  <span>
                    Messaging
                  </span>
                </a>
              </NavList>

              <NavList>
                <a>
                  <img src="/images/nav-notifications.svg" alt="" />
                  <span>
                    Notification
                  </span>
                </a>
              </NavList>

              <User>
                <a >
                  {props.user && props.user.photoURL ? (
                    <img src={props.user.photoURL} alt='' />
                  ) : (
                    <img src="/images/user.svg" alt="" />
                  )
                  }
                  
                  <span>
                    me
                    <img src="/images/down-icon.svg" alt="" />
                  </span>
                </a>

                <SignOut onClick={() => props.signOut()}>
                  SignOut
                </SignOut>
              </User>

              <Work>
                <a>
                  <img src="/images/nav-work.svg" alt="" />


                  <span>
                    Work
                    <img src="/images/down-icon.svg" alt="" />
                  </span>
                </a>
              </Work>
            </NavListWrap>
          </Nav>
        </Content>

      </HeaderC>
      <div style={{paddingTop: '62px'}}>
        <Outlet />
      </div>
    </div>
  )
}

// export default Header;

const HeaderC = styled.div`
    width: 100vw;
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 1);
    position: fixed;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    /* left: 0; */
    /* padding: 0 2vw; */
    z-index: 5;

    //testing
    /* background-color: yellow; */
  

`;


const Content = styled.div`
    display: flex;
    width: 99%;
    max-width: 99%;
    align-items: center;
    margin: 0 auto;
    padding: 0 5vw;
    padding-top: 0.8vh;
    //testing
    /* background-color: pink; */
   
`;

const Logo = styled.span`
    a{
      img{
        width: 50px;
        /* height: 4vw; */
      }
    }
`;

const Search = styled.div`
    opacity: 1;
    display: flex;
    align-items: center;
    height: 100%;
    flex-grow: 1;
    /* height: 100%; */
    position: relative;
    & > div{

      input{
        
        border: none;
        box-shadow: none;
        background-color: #d0dae5;
        border-radius: 4px;
        color: rgba(0, 0, 0, 0.9);
        width: 200px;
        padding: 0;
        padding-right: 5vw;
        padding-left: 30px;
        line-height: 1.75;
        font-weight: 400;
        font-size: 13px;
        height: 36px;
        border-color: #94bbe4;
        vertical-align: text-top;
      }
    }

    &:hover{
      img{
          opacity: 1;
      }
    }
    /* testing */
    /* background-color: brown; */
`;


const SearchIcon = styled.div`
    position: absolute;
    top: 18.2px;
    left: 0.5vw;
    z-index: 1;
    pointer-events: none;
    
    img{
      width: 17px;
      opacity: 0.7;
    }

   

`;

const Nav = styled.div`
    margin-left : auto;
    display: block;
    @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) { 
      position: fixed;
      /* left: 0; */
      bottom: 0;
      width: 100%;
    }
    @media all and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape) {
      position: fixed;
      /* left: 0; */
      bottom: 0;
      width: 100%;
     }

     //testing
     /* background-color: red; */
`;

const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;
    
    .active {
      a{
        span:after {
            /* content: ""; */
            transform: scaleX(1);
            border-bottom: 2px soild var(--white, #baa);
            position: absolute;
            left: 0;
            bottom: 0;
            transition: transform 0.2s ease-in-out;
            width: 100%;
            border-color: rgba(0, 0, 0 , 0.9);
        }
      }
    }
`;

const NavList = styled.li`
    display: flex;
    align-items: center;
    flex-grow: 1;
    /* background: pink; */
    margin: 0 5px;
    a{
      display: flex;
      align-items: center;
      flex-direction: column;
      font-size: 12px;
      font-weight: 400;
      justify-content: center;
      line-height: 1.5;
      position: relative;
      text-decoration: none;
      min-height: 42px;
      /* min-width: 80px; */
      min-width: 6vw;
      padding: 2px;
      span{
        color: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight : 500;
      }
      img{
         opacity: 0.7;  
      }
    }



    &:hover,
    &:active {
        a{
           span{
              color: rgba(0, 0, 0, 1);
              font-weight: 700;
           }

           img {
              opacity: 1;
           }
        }
    }

    @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) { }
    @media all and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape) { }
`;

const SignOut = styled.div`
    display: none;
    position: absolute;
    top: 62px;
    right: 12vw;
    width: 100px;
    height: 40px;
    font-size: 15px;
    transition-duration: 3s;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);;
    
    //testing
    /* background-color: yellow; */

`;

const User = styled(NavList)`
    
    a > img{
       width: 35px;
       border-radius: 100%;
    }

    a > span {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a{
       align-items: center;
       justify-content: center;
    }

    &:hover {
        ${SignOut} {
            display: flex;
            align-items: center;
            justify-content: center;
            
        }
    }

    @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) { 
      display: none;
    }
    @media all and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape) { } 
`;


const Work = styled(User)`
      
      a > img{
       width: 35px;
       border-radius: 0%;
    }

    border-left: 1px solid rgba(0,0,0,0.3);

    @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
      display: none;
     }
    @media all and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape) { } 
`;

const mapStateToProps = (state) => {
    return{
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
