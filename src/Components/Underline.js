//import "./Underline.css";
import styled from "styled-components";

const Underline = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 40px;
  width: 40px;
  border-radius: 3px;
  transition: 0.5s;
  background-color: pink;
`;

/*function Underline({ hoverTarget }) {
  if (!hoverTarget) return;
  const left = hoverTarget.offsetLeft + "px";
  const width = hoverTarget.offsetWidth + "px";
  const top = hoverTarget.offsetTop + hoverTarget.offsetHeight + "px";
  return <div id="Underline"></div>;
}*/

export default Underline;
