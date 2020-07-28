import styled, { keyframes } from 'styled-components';

const AddEntryButtonStyle = styled.button`
  height: 60px;
  width: 60px;
  background-color: white;
  color: #80DED0;
  text-align: center;
  font-size: 30px;
  border-color: white;
  border-radius: 50%;
  align-self: center;
`;

const DashboardStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 800px;
`;

const Exit = styled.div`
  height: auto;
  width: 1em;
  margin-left: auto;
  &:hover {
    cursor: pointer;
  }
`;

const modalSlide = keyframes`
  from {
    transform: translate(-50%, 0%);
  }
  to {
    transform: translate(-50%, -50%);
  }
`;

const ModalWrapper = styled.div`
  padding: 30px;
  animation: ${modalSlide} 650ms;
  background-color: white;
  border-radius: 8px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const NavigationBarStyle = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  background-color: #80DED0;
`;

const Submit = styled.button`
  height: 25px;
  width: 100px;
  border-radius: 5%;
`;

export {
  AddEntryButtonStyle,
  DashboardStyle,
  Exit,
  ModalWrapper,
  NavigationBarStyle,
  Submit
};
