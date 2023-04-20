// INbuilt func()
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
//components
import Left from './Left'
import Main from './Main'
import Right from './Right'

const Home = (props) => {
  return (
        <HomeC>
          { !props.user &&
          
              <Navigate to='/' />

          }
            <Section>

                <h5>
                  <a >Hiring in a hurry? - </a>
                </h5>
                <p>
                    Find talented pros in record time with Upwork and keep business moving.
                </p>
          
            </Section>

            <Layout>

               <Left />
               <Main/>
               <Right />

            </Layout>
        </HomeC>
  )
}



const HomeC = styled.div`
    width: 100%;  
    margin-top: 10px;
    /* background-color: #f5f5f5; */
    //testing
    /* background-color: pink; */

`;

const Section = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-direction: column; */
    box-sizing: border-box;
    text-align: center;
    
    
    h5{
      color: #0a66c2;
      font-size: 14px;
      font-weight: 750;
      text-decoration: underline;
    }

    p{
      font-size: 14px;
      color: #434649
      font-weight: 700;
      text-decoration: underline;
      margin-left: 8px;
    }


    @media all and (max-width: 768px) and (max-height: 1024px) and (orientation:portrait) {
        flex-direction: column;
        padding: 0 10px;
    }
    @media all and (max-width: 1024px) and (max-height: 768px) and (orientation:landscape) {}
    //testing
    /* background-color: lightblue; */
    /* border: 3px solid black; */
`;

const Layout = styled.div`
    width: 100%;
    box-sizing: border-box;
    margin-top: 40px;
    padding: 0 5vw;
    display: grid;
    grid-template-areas: 'left main right';
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(0, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    grid-template-rows: auto;
    @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) { 
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }
    @media all and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape) { }

    //testing
    /* background-color: lightgreen; */
    /* border: 2px solid black; */
    /* margin-left: 8px; */
`;

const mapStateToProps = (state) => {
  return{
      user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  //signOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)