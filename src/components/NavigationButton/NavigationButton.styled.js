import styled from "styled-components";

const StyledNavigationButton = styled.div`
a {
  font-weight: 300;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
  display: block;
  text-decoration: none;
  color: rgba(0, 0, 0, 1);
  transition: all .2s linear;
}

a:hover {
  color: rgba(0, 0, 0, .7);
}
`

export default StyledNavigationButton;