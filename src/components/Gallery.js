import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../store";
import axios from "axios";
import styled from "styled-components";
const ContainerDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 12px;
  float: left;
`;
const Photo = styled.img`
  display: block;
  float: left;
  width: 80px;
  height: 80px;
  margin: 5px 5px 0 0;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
`;
const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: none;
`;
export function Gallery() {
  const { RANDOMusers } = useSelector(state => ({
    ...state.userReducer
  }));
  let loadingDiv = <div>Loading...</div>;

  const modalMask = (
    <Modal>
      {!RANDOMusers.data
        ? loadingDiv
        : RANDOMusers.data.results.map(user => (
            <>
              <Photo alt="user" src={user.picture.large}></Photo>
            </>
          ))}
    </Modal>
  );

  React.useEffect(() => {
    store.dispatch({
      type: "FETCH_RANDOM_USERS",
      payload: axios.get("https://randomuser.me/api/?results=100")
    });
  }, []);

  return (
    <ContainerDiv>
      {!RANDOMusers.data
        ? loadingDiv
        : RANDOMusers.data.results.map(user => (
            <>
              <Photo alt="user" src={user.picture.large}></Photo>
            </>
          ))}
    </ContainerDiv>
  );
}
