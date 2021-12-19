import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from './Modal';
import './Login.css'

const Container = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  left: -350px;
  z-index:25;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 10px 20px;
  border-radius: 40px;
  border: none;
  background: blue;
  color: #fff;
  font-size: 16px;
  cursor: pointer;


  position : relative;
  top: -275px;
  left: 330px;

  z-index: 14;
`;

function Login() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <Container>
        <Button onClick={openModal}>Log in or Create</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </Container>
    </>
  );
}

export default Login;
