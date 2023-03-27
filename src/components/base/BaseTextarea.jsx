import styled from "styled-components";

const StyledTextarea = styled.textarea`
  all: unset;
  width: ${(p) => p.width || "100%"};
  height: ${(p) => p.height || "auto"};
  padding: ${(p) => p.padding || {}};
  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-standard);
  background: var(--color-white);
  transition: var(--transition-300);
  &:focus {
    border: 1px solid var(--color-gray-500);
    box-shadow: 0 0 2px 2px var(--color-gray-400);
  }
  &::placeholder {
    color: var(--color-gray-500);
  }
  @media all and (max-width: 47.9375rem) {
  }

  @media all and (max-width: 29.9375rem) {
  }
`;
function BaseTextarea({
  textareaRef,
  className,
  width,
  height,
  padding,
  value,
  name,
  id,
  cols,
  rows,
  onChange,
  children,
}) {
  return (
    <StyledTextarea
      ref={textareaRef}
      className={className}
      width={width}
      height={height}
      padding={padding}
      value={value}
      name={name}
      id={id}
      cols={cols}
      rows={rows}
      onChange={onChange}
    >
      {children}
    </StyledTextarea>
  );
}
export default BaseTextarea;
