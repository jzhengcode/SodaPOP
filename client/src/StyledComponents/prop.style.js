import styled from 'styled-components';

const MetricsBox = styled.div`
  margin: ${(props) => (props.calories ? '50px 25px 50px 50px' : '50px 50px 50px 25px')
};
  width: 50%;
  height: 80%;
  padding: 25px;
  background-color: #80DED0;
  border-radius: 5%; 
  box-shadow: 5px 5px #d3d3d3;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;


export default MetricsBox;
