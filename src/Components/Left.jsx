import React from 'react'
import styled from 'styled-components'

//inbuilt fun()

//components

const Left = (props) => {
  return (
    <LeftC>
        <ArtCard>
            <UserInfo>
                <CardBackGround />
                    <a >
                        <div style={{width: '100%', display: 'flex', justifyContent:'center', marginTop: '-27px', marginBottom: '20px'}}>
                        <Photo />
                        </div>
                            <Link>
                                Welcome, there!
                            </Link>
                    </a>
                    <a >
                        <AddPhotoText>Add a photo</AddPhotoText>
                    </a>
            </UserInfo>
            <Widget>
                <a >
                    <div>
                        <span>Connections</span>
                        <span >Grow your network</span>
                    </div>
                    <img src="/images/widget-icon.svg" />
                </a>
            </Widget>
            <Item>
                <span>
                    <img src="/images/item-icon.svg" alt="" />
                    <h3>My Items</h3>
                </span>
            </Item>
        </ArtCard>

        <CommunityCard>
            <a >
                <span>Groups</span>
            </a>
            <a >
                <span>
                    Events 
                    <img src="/images/plus-icon.svg" alt="" />
                </span>
            </a>
            <a >
                <span>Follows Hashtags</span>
            </a>
            <a >
                <span>
                    Discover more
                </span>
            </a>
        </CommunityCard>
    </LeftC>
  )
}


const LeftC = styled.div`
    grid-area: left;
    width: 100%;
    box-sizing:border-box;
    /* flex-shrink: 0; */
    /* display: flex; */
    //testing
    /* background-color: orange; */
    /* border: 3px solid red; */
    /* margin-left: 7px; */
`;

const ArtCard  = styled.div`
    width: 100%;
    position: relative;
    text-align:center;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 5px;
    transition: box-shadow 83ms;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%) , 0 0 0 rgb(0 0 0 / 20%);

    //testing
    /* background-color: yellow; */
`;

const  UserInfo = styled.div`
    border-bottom: 2px solid rgba(0, 0, 0, 0.15);
    padding: 12px;
    
    //testing
    /* background-color: pink; */
`;

const  CardBackGround = styled.div`
    background-image: url('/images/card-bg.svg');
    background-position: center;
    background-size: 462px;
    height: 54px;
    margin: -12px;
    margin-bottom: 0;
    
`;

const  Photo = styled.div`
    box-shadow: none;
    background-image: url('/images/photo.svg');
    background-color: #fff;
    width: 80px;
    height: 80px;
    box-sizing: border-box;
    background-clip: content-box;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    /* margin: -35px 0 20px 6vw; */

`;

const  Link = styled.div`
        font-size: 16px;
        line-height: 1.5;
        color: rgba(0, 0, 0, 0.9);
        font-weight: 700;
`;

const  AddPhotoText = styled.div`
    color: #0a66c2;
    margin-top: 4px;
    font-size: 12px;
    line-height: 1.5;
    font-weight: 500;

`;


const Widget = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 10px 10px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.15);
    cursor: pointer;
    a{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        /* gap: 65px; */
        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: left;
            /* align-items: center; */


            span{
                font-size: 12px;
                line-height: 1.5;

                &:nth-child(2) {
                    font-weight: 650;
                }
            }

          
      
        }
      
    }
  
    &:hover{
        background-color: rgba(0, 0, 0, 0.08);
        /* display: none; */
    } 
    //testing
    /* background-color: pink; */
`;

const Item = styled(Widget)`
    span{
        display: flex;
        font-size: 12px;
        /* margin-left: 10px; */

        img{
            opacity: 0.7;
        }

        h3{
            font-weight: 900px;
        }
    }
`;

const CommunityCard = styled(ArtCard)`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    text-align: left;
    line-height: 1.75;
    padding: 0;
    padding: 7px 0;
    
    

    a{
        padding: 0 12px;
        cursor: pointer;
        span{
            font-size: 12px;
            
            font-weight: 500;   
        }

        &:nth-child(2) > span{

            display:flex;
            align-items: center;
            justify-content: space-between;
        }
        
        &:last-child{
            color: rgba(0, 0, 0, 0.6);
            border-top: 1px solid #d6cec2;
            padding-top: 7px;
            padding-bottom: 7px;

            
            /* border-bottom: 1px solid #d6cec2; */
            
        }

        &:hover{
            span{
            color: #0a66c2;
            font-weight: 600;
            }
        }

     
        //testing
        /* background-color: pink; */
    }
    border-bottom: 1px solid #d6cec2;
`;



export default Left
