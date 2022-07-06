import styled from 'styled-components'

export const Wrapper = styled.a`
  background: #fff;

  margin-bottom: 40px;
  margin-right: 40px;

  height: 60px;
  width: 60px;

  border-radius: 50%;
  border: none;
  box-shadow: 0px 4px 4px rgb(43 61 78 / 15%);

  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 99999999999;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 400ms;

  :hover {
    transform: translateY(-4px);
  }

  .launcher-avatar {
    height: 48px;
    width: 48px;
    border-radius: 50%;
  }
`
