import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  max-width: 100%;
  margin: 20px;
  overflow: hidden;
  width: 700px;
  
  & h6 {
      opacity: 0.6;
      margin: 0;
      letter-spacing: 1px;
      text-transform: uppercase;
  }
  
  & h2 {
      letter-spacing: 1px;
      margin: 10px 0;
  }
  
  & a {
      opacity: 0.7;
      color: blue;
      font-size: 1.2rem;
      letter-spacing: 0.5px;
  }
`

export const DecisionService = styled.div`
  background-color: #2A265F;
  color: #fff;
  padding: 30px;
  max-width: 250px;
`

export const ActivityService = styled.div`
  padding: 30px;
  position: relative;
  width: 100%;
`

export const ProgressContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  text-align: right;
  width: 150px;
`

export const Progress = styled.div`
  background-color: #ddd;
  border-radius: 3px;
  height: 5px;
  width: 100%;
  
  &::after {
      border-radius: 3px;
      background-color: #2A265F;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 5px;
      width: ${props => props.width}%;
  }
`

export const ProgressText = styled.div`
  font-size: 10px;
  opacity: 0.6;
  letter-spacing: 1px;
`