/* eslint-disable react/prop-types */
import React from "react";
import styled, {  ThemeProvider } from "styled-components";

///////////////////////// 버튼 사용 예제 /////////////////////////
// ==== 기본 버튼 ==== //
// <Button>Default Button</Button>

// ==== 사용불가(disabled) 버튼 ==== //
// <Button disabled>Disabled Button</Button>

// ==== 컨테이너 버튼 ==== //
// <Button>Container Default Button</Button>
// <Button primary>Default Primary Button</Button>
// <Button secondary>Default Secondary Button</Button>

// ==== 고스트 버튼 ==== //
// <Button ghost onClick={buttonClicked}>ghost Default Button</Button>
// <Button ghost primary>ghost Primary Button</Button>
// <Button ghost secondary>ghost Secondary Button</Button>



///////////////////////// 버튼 스타일 /////////////////////////
// button의 기본 스타일을 변경하여 StyledButton 컴포넌트에 지정
// (추후 해당 컴포넌트를 확장하여 스타일 재사용 가능)

// variant값으로 버튼 종류 선택
const SelectStyle = (color, theme, variant) => {
  switch (variant) {
    case "container" : 
      return ContainerStyle(color, theme);
    case "ghost" : 
      return GhostStyle(color, theme);
    case "text": 
      return TextStyle(color, theme);
    default : 
      return ContainerStyle(color, theme);
  }
};

// 컨테이너 버튼
const ContainerStyle = (color, theme) => {
  switch (color) {
    case "primary":
      return `
        background : ${theme.primary.main};
        color: ${theme.primary.contrastText};
        &:hover {
          background: ${theme.primary.hover};
        }
        &:active {
          background: ${theme.primary.active};
        }
      `;
    case "secondary":
      return `
        background : ${theme.secondary.main};
        color: ${theme.secondary.contrastText};
        &:hover {
          background: ${theme.secondary.hover};
        }
        &:active {
          background: ${theme.secondary.active};
        }
      `;
    default:
      return `
        background : ${theme.primary.main};
        color: ${theme.primary.contrastText};
        &:hover {
          background: ${theme.primary.hover};
        }
        &:active {
          background: ${theme.primary.active};
      `;
  }
};

// 고스트 버튼
const GhostStyle = (color, theme) => {
  switch (color) {
    case "primary":
      return `
        background: none;
        border : solid 1px ${theme.primary.main};
        color: ${theme.primary.main};
        &:hover {
          border: ${theme.primary.hover};
        }
        &:active {
          border: ${theme.primary.active};
        }
      `;
    case "secondary":
      return `
        background: none;
        border : solid 1px ${theme.secondary.main};
        color: ${theme.secondary.main};
        &:hover {
          border: ${theme.secondary.hover};
        }
        &:active {
          border: ${theme.secondary.active};
        }
      `;
    default:
      return `
        background: none;
        border : solid 1px  ${theme.primary.main};
        color: ${theme.primary.main};
        &:hover {
          border: ${theme.primary.hover};
        }
        &:active {
          border: ${theme.primary.active};
        }
      `;
  }
};

const TextStyle = (color, theme) => {
  switch (color) {
    case "primary":
      return `
        background: none;
        color : ${theme.primary.main};
        &:hover {
          border: ${theme.primary.hover};
          color : ${theme.primary.hover};
        }
        &:active {
          border: ${theme.primary.active};
          color : ${theme.primary.active};
        }
      `;
    case "secondary":
      return `
        background: none;
        color : ${theme.secondary.main};
        &:hover {
          border: ${theme.secondary.hover};
          color : ${theme.secondary.hover};
        }
        &:active {
          border: ${theme.secondary.active};
          color : ${theme.secondary.active};
        }
      `;
    default:
      return `
        background: none;
        color : ${theme.primary.main};
        &:hover {
          border: ${theme.primary.hover};
          color : ${theme.primary.hover};
        }
        &:active {
          border: ${theme.primary.active};
          color : ${theme.primary.active};
        }
      `;
  }
};


// 공통 버튼 스타일
const StyledButton = styled.button`
  // style 추가하기 (찾아보기)
  cursor: pointer;
  border: none;
  border-radius: 2px;
  padding: 0 16px;
  display: inline-block;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  line-height: 38px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  ${ ({color, variant, theme}) => SelectStyle(color, theme, variant) };
`;

// ...props 관련
const Button = ({disabled, color, variant, theme, children, onClick, style}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledButton style={style} disabled={disabled} 
        color={color} variant={variant} theme={theme}
        onClick={onClick}
        >
        {children}
      </StyledButton>
    </ThemeProvider>
  );
};

export default Button;