import styled from 'styled-components'

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
`
export const Dialog = styled.div`
  width: 500px;
  height: 250px;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  color: #7f7f7f;
`
export const DialogHeader = styled.div`
  height: 10%;
  display: flex;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
`
export const DialogTitle = styled.div`
  margin: 10px;
  font-size: 1.2rem;
`
export const CloseButton = styled.div`
  margin-left: auto;
  font-size: 1.5rem;
  & svg {
    cursor: pointer;
  }
`
export const DialogBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75%;
`

export const DialogFooter = styled.div`
  height: 10%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 15px;
`
export const Button = styled.div`
  width: 100px;
  height: 35px;
  background: #b4b4b4;
  border-radius: 5px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.2s;
  margin-right: 10px;
  user-select: none;
  & svg {
    margin: 0px 5px;
  }
  &:hover {
    background: #927676;
  }
`
