import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper className='hidden md:block'>
      <a className="button" href='https://forms.gle/taebDeDT4S6fRpGX7' >Get in touch</a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    display: inline-block;
    margin-top: 8px;
    padding: 6px 16px;
    border: 1px solid #4f4f4f;
    border-radius: 12px;
    transition: all 0.2s ease-in;
    position: relative;
    overflow: hidden;
    font-size: 19px;
    cursor: pointer;
    color: white;
    z-index: 1;
  }

  .button:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  .button:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: #0077B6;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  .button:hover {
    color: #ffffff;
    border: 1px solid #0077B6;
  }

  .button:hover:before {
    top: -35%;
    background-color: #0077B6;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  .button:hover:after {
    top: -45%;
    background-color: #0077B6;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }`;

export default Button;
