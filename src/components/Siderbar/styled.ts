import styled from 'styled-components';

export const StyledSiderar = styled.aside`
    background: var(--gray-800);
    border-radius: 8px;
    overflow: hidden;

    footer{
        border-top: 1px solid var(--gray-600);
        margin-top: 1.5rem;
        padding: 1.5rem 2rem 2rem;

        a{ 
            font-size: 0.875rem;
            background: transparent;
            color: var(--green-500);
            border: 1px solid var(--green-500);
            border-radius: 8px;
            height: 50px;
            padding: 0 1.5rem;
            font-weight: bold;
            display: block;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            transition: all 150ms ease;
            &:visited{
                color: var(--green-500); 
            };
            &:hover{
                background: var(--green-500);
                color: var(--white);
            }
        }
    }

`;

export const Cover = styled.img`
    width: 100%;
    height: 72px;
    object-fit: cover;
`;

export const Avatar = styled.img`
    width: calc(3rem + 12px);
    height: calc(3rem + 12px);
    border-radius: 8px;
    border: 2px solid var(--gray-800);
    outline: 2px solid var(--green-500);

`;

export const Profile = styled.div`
    margin-top: calc(0px - 1.5rem - 6px);
    display: flex;
    flex-direction: column;
    align-items: center;

    strong{
        margin-top: 1rem;
        color: var(--gray-100);
        line-height: 1.6;
    }
    span{
        font-size: 0.875rem;
        color: var(--gray-400);
        line-height: 1.6;
    }
`;
