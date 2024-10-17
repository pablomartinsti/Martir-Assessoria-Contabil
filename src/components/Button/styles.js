import styled from 'styled-components';

export const Button = styled.a`
  background: #e8b931;
  padding: 20px 50px;
  font-size: 18px;
  border: 3px solid #e8b931;
  cursor: pointer;
  margin-top: 60px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
  text-decoration: none;
  color: white;

  &:hover {
    background: #000;
  }
  &:active {
    opacity: 0.7;
  }
`;
