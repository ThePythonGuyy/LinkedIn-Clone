// Inbuilt func()
import styled from "styled-components";
import React from "react";
import { useState } from "react";
//User func()

//components

const PostModel = (props) => {
  const [editorText, setEditorText] = useState("");

  const reset = (e) => {
    if (editorText !== '') {
      setEditorText("");
      props.handleClick(e);
    }
    
  };
  return (
    <>
      {props.showModel == "open" && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button onClick={(e) => reset(e)}>
                <img src="/images/close-icon.svg" alt="" />
              </button>
            </Header>
            <SharedCont>
              <UserInfo>
                <img src="/images/user.svg" alt="" />
                <span>Name</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  placeholder="what do you want to share about"
                  onChange={(e) => setEditorText(e.target.value)}
                ></textarea>
              </Editor>
            </SharedCont>
            <ShareCreation>
              <AttachAssets>
                <AssetButton>
                  <img src="/images/photo-icon-share.svg" alt="" />
                </AssetButton>

                <AssetButton>
                  <img src="/images/video-icon-share.svg" alt="" />
                </AssetButton>
              </AttachAssets>
              <ShareComment>
                <AssetButton>
                  <img src="/images/comment-icon-share.svg" alt="" />
                  Anyone
                </AssetButton>
              </ShareComment>
              <PostButton onClick={ (e) => reset(e)} 
                disabled={ !editorText ? true : false }>Post</PostButton>
            </ShareCreation>
          </Content>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  animation: fadeInn 0.5s;
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 100px;
  margin: 0 auto;
  /* padding: 20px; */
  box-sizing: border-box;
`;

const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    background-color: transparent;
    svg,
    img {
      pointer-events: none;
    }
  }
`;

const SharedCont = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
  box-sizing: border-box;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 12px 24px;
  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;

const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  background: transparent;
  border-radius: 5px;
  /* border: none; */

  /* color: rgba(0,0,0,0.5); */
`;

const AttachAssets = styled.div`
  align-items: center;
  display: flex;
  gap: 4px;
  padding-right: 8px;
  ${AssetButton} {
    width: 40px;
  }
`;

const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  ${AssetButton} {
    margin-right: 8px;
    gap: 2px;
  }
`;

const PostButton = styled.button`
  min-width: 60px;
  border-radius: 20px;
  padding: 0 16px;
  background: ${(props) => (props.disabled ? 'rgba(0, 0, 0, 0.65)' : '#0a66c2')} ;
  color: white;
  &:hover {
    background: ${(props) => (props.disabled ? 'rgba(0, 0, 0, 0.8)': '#004182')} ;
  }
`;

const Editor = styled.div`
  padding: 12px 24px;
  /* box-sizing: border-box; */
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
    /* padding: 15px; */
    /* box-sizing: border-box; */
  }

  input {
    width: 100%;
    height: 35px;
    font-size: 36px;
    margin-bottom: 120px;
  }
`;

export default PostModel;
