import styled from 'styled-components';

export interface HeadingElementProps {
  fontSize: number;
}

const baseMargin = 4.8;

const HeadingElement = styled.div<HeadingElementProps>`
  font-weight: 400;
`;

export const HeadingElement1 = styled(HeadingElement)`
  :not(:first-child) {
    margin-top: 30px;
  }
  margin-bottom: ${baseMargin * 2.5}px;
  font-size: ${({ fontSize }) => (fontSize * 20) / 11}px;
  line-height: 36px;
`;

export const HeadingElement2 = styled(HeadingElement)`
  :not(:first-child) {
    margin-top: 18px;
  }
  margin-bottom: ${baseMargin * 1.5}px;
  font-size: ${({ fontSize }) => (fontSize * 16) / 11}px;
  line-height: 28px;
`;

export const HeadingElement3 = styled(HeadingElement)`
  color: #434343;
  :not(:first-child) {
    margin-top: 8px;
  }
  margin-bottom: ${baseMargin * 1.25}px;
  font-size: ${({ fontSize }) => (fontSize * 14) / 11}px;
`;

export const HeadingElement4 = styled(HeadingElement)`
  color: #666666;
  :not(:first-child) {
    margin-top: 8px;
  }
  margin-bottom: ${baseMargin}px;
  font-size: ${({ fontSize }) => (fontSize * 12) / 11}px;
`;

export const HeadingElement5 = styled(HeadingElement)`
  color: #666666;

  :not(:first-child) {
    margin-top: 8px;
  }
  margin-bottom: ${baseMargin}px;
  font-size: ${({ fontSize }) => fontSize}px;
`;

export const HeadingElement6 = styled(HeadingElement)`
  color: #666666;
  font-style: italic;

  :not(:first-child) {
    margin-top: 8px;
  }
  margin-bottom: ${baseMargin}px;
  font-size: ${({ fontSize }) => fontSize}px;
`;
