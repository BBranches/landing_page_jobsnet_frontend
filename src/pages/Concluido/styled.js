import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100vw;
  height:100vh;
  background-color: rgba(0, 0, 0, 0.8);
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height:100vh;
  background-color: rgba(0, 0, 0, 0.7);
`

export const ContentFlex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 50vh;
  width: 50vw;
  margin-bottom: 2rem;
  margin-right: 40px;
  margin: 0 auto;
`

export const H1 = styled.h1`
  font-size: 2rem;
  letter-spacing: .4rem;
  text-align: center;
  color: #e9afad;
  padding: 20px 0 40px 0;
`

export const P = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #8689cc;
`

export const Button = styled.button`
  margin: 50px 0;
  text-align: center;
  height: 40px;
  width: 50%;
  border: none;
  background-color: #e9afad;
  color: #111;
  padding: 0 1rem;
  border-radius: 0.3rem;
  transition: 150ms;
  font-weight:700;
  font-size: 1.2rem;

  &:focus,
  &:active {
    outline: none;
    boxed-shadow: none;
  }
  &:hover {
    border: 1px solid #8689cc;
    background-color:#8689cc;
    cursor: pointer; 
`