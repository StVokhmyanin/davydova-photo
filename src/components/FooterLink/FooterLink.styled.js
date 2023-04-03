import styled from "styled-components";

const StyledFooterLink = styled.li`

a {
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  opacity: 1;
  font-size: 10px;
  color: #000;
  transition: all .2s linear;
}

a:hover {
  opacity: .7;
}
`

export default StyledFooterLink;