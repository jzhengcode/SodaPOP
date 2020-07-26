import styled from 'styled-components';

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

const NavigationBarStyle = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  background-color: #80DED0;
`;
export { 
  AddEntryButtonStyle,
  DashboardStyle, 
  NavigationBarStyle
};
