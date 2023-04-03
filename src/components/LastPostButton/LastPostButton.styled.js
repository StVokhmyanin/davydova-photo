import styled from "styled-components";

const StyledLastPostButton = styled.div`
width: 100%;
border-bottom: 1px solid rgba(0, 0, 0, .2);
padding-bottom: 20px;

a {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  transition: all .3s linear;
  opacity: .7;
}

a:hover {
  opacity: 1;
}

p {
  width: 100%;
  font-size: 13px;
  line-height: 16px;
}

h3 {
  font-size: 20px;
  font-weight: 400px;
  text-align: left;
}
`

export default StyledLastPostButton;