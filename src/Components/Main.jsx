import React from "react";
import styled from "styled-components";

//inbuilt fun()

//components

const Main = () => {
  return (
    <MainC>
      <ShareBox>
        Share
        <div>
          <img src="/images/user.svg" alt="" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <img src="/images/photo-icon.svg" alt="" />
            <span>Photo</span>
          </button>

          <button>
            <img src="/images/video-icon.svg" alt="" />
            <span>Video</span>
          </button>

          <button>
            <img src="/images/event-icon.svg" alt="" />
            <span>Event</span>
          </button>

          <button>
            <img src="/images/article-icon.svg" alt="" />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>

      <div style={{ maxWidth: "100%" }}>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" alt="" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/images/3dot-icon.svg" alt="" />
            </button>
          </SharedActor>
          <Description>Description</Description>
          <SharedImg>
            <a>
              <img src="/images/shared2.jpg" alt="" />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img src="/images/thumpsup-icon.svg" alt="" />
                <span>75</span>
              </button>
            </li>
            <li>
              <a> 3 comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img src="/images/like-icon.svg" alt="" />
              <span>Like</span>
            </button>
            <button>
              <img src="/images/comment-icon.svg" alt="" />
              <span>Comments</span>
            </button>
            <button>
              <img src="/images/repost-icon.svg" alt="" />
              <span>Repost</span>
            </button>
            <button>
              <img src="/images/share-icon.svg" alt="" />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
    </MainC>
  );
};

const MainC = styled.div`
  grid-area: main;
  width: 100%;
  box-sizing: border-box;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #fff;
  margin-bottom: 8px;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  background-color: #fff;
  padding: 8px 0;

  div {
    margin-top: 5px;
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 7px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      font-weight: 600;
      cursor: pointer;
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;

      img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }

      button {
        margin: 4px 0;
        flex-grow: 1;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        text-align: enter;
      }

      //testing
      /* background-color: pink; */
    }

    &:nth-child(2) {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  overflow: visible;
  width: 100%;
`;

const SharedActor = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 12px 16px;
  margin-bottom: 8px;
  align-items: center;

  a {
    flex-grow: 1;
    margin-right: 12px;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      overflow: hidden;
      margin-left: 8px;

      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 2) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    top: 0;
    right: 12px;
    background: transparent;
    border: none;
    outline: none;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  /* padding: 5px; */
  display: flex;
  justify-content: center;

  img {
    /* object-fit: contain; */
    width: 99%;
    height: 300px;
    object-fit: cover;
    /* object-position: center; */
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.5;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  border-bottom: 1px solid #e9e5df;
  list-style: none;

  li {
    margin-left: 5px;
    font-size: 12px;

    button {
      display: flex;
      align-items: center;
    }
  }
`;

const SocialActions = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0;
    min-height: 40px;
    padding: 4px 8px;
    button{
      display: inline-flex;
      align-items: center;
      padding: 8px;
      gap: 5px;
      font-weight: 500;
      outline: none;
      background: transparent;
      border: none;
      /* color: #0a66c2; */
    }
`;

export default Main;
