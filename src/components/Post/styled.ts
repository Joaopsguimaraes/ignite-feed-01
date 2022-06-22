import styled from 'styled-components';

export const StyledPost = styled.article`
  background: var(--gray-800);
  border-radius: 8px;
  padding: 2.5rem;
  & + & {
    margin-top: 2rem;
  }
  div {
    line-height: 1.6;
    color: var(--gray-300);
    margin-top: 1.5rem;
    p {
      margin-top: 1rem;
    }
    a {
      font-weight: bold;
      color: var(--green-500);
      text-decoration: none;
      &:hover {
        color: var(--green-300);
      }
    }
  }
  & > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > time {
      font-size: 0.875rem;
      color: var(--gray-400);
    }
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center ;
  gap: 1rem;
  img {
    width: calc(3rem + 12px);
    height: calc(3rem + 12px);
    border-radius: 8px;
    border: 2px solid var(--gray-800);
    outline: 2px solid var(--green-500);
  };
`;

export const Author = styled.div`
    display: flex;
    flex-direction: column;
    strong {
      display: block;
      color: var(--gray-100);
      line-height: 1.6;
    };
    span {
      display: block;
      font-size: 0.875rem;
      line-height: 1.6;
    };
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--gray-600);

  & > strong{
    line-height: 1.6;
    color: var(--gray-100);

  }
  textarea {
    width: 100%;
    background: var(--gray-900);
    border: 0;
    resize: none;
    height: 6rem;
    padding: 1rem;
    border-radius: 8px;
    color: var(--gray-100);
    line-height: 1.4;
    margin-top: 1rem;
  }

  button[type="submit"]{
    padding: 1rem 1.5rem;
    margin-top: 1rem;
    border-radius: 8px;
    border: 0;
    background: var(--green-500);
    color: var(--white);
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.1s;
    &:hover{
      background: var(--green-300);
    }
  }

  footer{
    visibility: hidden;
    max-height: 0;
  }

  &:focus-within footer{
    visibility: visible;
    max-height: none;
  }

`;
