import React from "react";
import styled from "styled-components";

//inbuilt fun()

//components

const Right = () => {
  return (
    <RightC>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>

        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>

        <Recommendation>
          View all recommendations
          <img src="/images/right-icon.svg" alt="" />
        </Recommendation>
      </FollowCard>

      <BannerCard>
          <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" alt="" />
      </BannerCard>
    </RightC>
  );
};

const RightC = styled.div`
  grid-area: right;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* overflow: hidden; */
`;

const FollowCard = styled.div`
    width: 100%;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%) , 0 0 0 rgb(0 0 0 / 20%);
    border-radius: 5px;
    position: relative;
    border: none;
    box-sizing: border-box;
    padding: 12px;

    //testing
    /* background-color: yellow; */
`;

const Title = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      span {
        font-weight: 500;
      }
    }

    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 10px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
    }
  }
`;

const Avatar = styled.div`
  background-image: url("/images/hashtag-icon.svg");
  background-size: contain;
  box-sizing: border-box;
  background-size: 70%;
  background-position: center;
  background-repeat: no-repeat;
  border: 4px solid #a4d3ef;
  background-color: rgba(164, 211, 239, 0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  
`;

const Recommendation = styled.a`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #0a66c2;
    gap: 5px;
`;

const BannerCard = styled(FollowCard)`
    margin-top: 10px;
    padding: 0;
    width: 95%;
    height: auto;
    img{
      width: 100%;
      /* height: 100%; */
      border-radius: 7px;
    }

    /* background: transparent; */
    /* box-shadow: none; */
`;

export default Right;
