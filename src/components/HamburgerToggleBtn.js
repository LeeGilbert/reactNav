import React from 'react';
import styled from 'styled-components';
import './HamburgerToggleBtn.css';

const Wrapper = styled.div`
    vertical-align: top;
    height: 24px;
    width: 24px;
    min-width: 26px;
    max-height: 26px;
    border-radius: 50%;
    display: inline-block;
    margin: 0 4px;
    padding: 10px;
    overflow: hidden;
    cursor: pointer;
    -webkit-user-select: none;
    box-sizing: initial;
    #background-color:black;
 
`;
export const HamburgerToggleBtn = (props) => (
  <Wrapper>
    <div aria-expanded="true" aria-label="Main menu" role="button" tabindex="0"  onClick={props.click}  focusable="false">
      <svg  width="24px" focusable="false" viewBox="0 0 24 24">   
       <path fill="white" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
     </div>
  </Wrapper>
)