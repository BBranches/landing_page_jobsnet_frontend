import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  margin: 0 auto;
`

export const ContentForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 2rem 0;
  margin: 0 auto;
`

export const H1 = styled.h1`
  font-size: 2.5rem;
  letter-spacing: .4rem;
  text-align: center;
  color: #8689cc;
  padding: 20px 0 50px 0;
`

export const ContentFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width:100%;
  margin-bottom: 2rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:100%;
`
export const Label = styled.label`
  padding: .1rem;
  color: #e9afad;
  font-size: .9rem;
  text-align: center;
`

export const InputLarge = styled.input`
  border: 1px solid #ddd;
  height: 2rem;
  width: 65%;
  padding: .3rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.1);
  color: #eee;
  border-radius: .2rem;
  margin: 0.5rem;
  font-size: 1rem;

  &:focus,
  &:active {
    outline: none;
    boxed-shadow: none;
    border:none;
  }
  &:read-only  {
    border:none;
  }
`

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 2rem;
  padding: .2rem;
  margin: 0.5rem;
  width: 50%;
  text-align: center;
  border-radius: .3rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: #eee;
  font-size: 1rem;

  &:focus,
  &:active {
    outline: none;
    boxed-shadow: none;
    border:none;
  }
  &:read-only  {
    border:none;
  }
`

export const Select = styled.select`
  border: 1px solid #ddd;
  height: 2.5rem;
  padding: .5rem;
  border-radius: .3rem;
  margin: 0.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ddd;
  font-size: 1rem;

  &:focus,
  &:active {
    outline: none;
    boxed-shadow: none;
    background-color: rgba(255, 255, 255, 0.7);
    color: #111;
  }
  &:focus{
    
  }
`

export const Button = styled.button`
  margin: 20px 0px 50px 0;
  text-align: center;
  height: 40px;
  min-width: 60%;
  border: none;
  background-color: #8689cc;
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
    border: 1px solid #e9afad;
    background-color:#e9afad;
    cursor: pointer; 
`

export const ErrorMsg = styled.span`
  display: block;
  font-size: 0.65rem;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
`
