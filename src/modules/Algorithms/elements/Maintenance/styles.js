import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: calc(100% - 130px);

    background-image: linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,1)), url('https://images.pexels.com/photos/12876612/pexels-photo-12876612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-size: 100%;
    background-position: bottom right;
    /* background: white; */
    flex-direction: column;
    justify-content: center;
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    max-width: 1150px;
    height: 100%;
`;

export const FormTemp = styled.div`
    .sectionInput {
        display: flex;
        flex-direction: column;
        margin: 1rem 0rem;
        width: 50%

    }

    padding: 2rem;

    input {
        font-size: 1.5rem;
        padding: 0.5rem;
        border-radius: 5px;
    }

    label {
        font-size: 2rem;

    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;  

        margin: 5rem 0px 0px 0px;
        padding: 1rem 2rem;
        
        text-decoration: none;
        text-align: center;
        
        color: var(--color-white);
        background: var( --color-wine);
        
        border-radius: 5px;
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 19px;
        
        cursor: pointer;
        transition: all .3s ease-in-out;
        
        &:hover {
            filter: brightness(.8);
        }
    }

`;

export const Calc = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 0.15rem;
    padding-left: 2rem;
    padding-bottom: 3rem; 
    
    h1 {
        color: #2e2e2e;
        font-weight: regular;
        font-size: 3rem;
        text-decoration: none;  
    }

    label {
        color: #2e2e2e;
        font-weight: regular;
        font-size: 1.15em;
        text-decoration: none;
        padding-top: 0.5rem;
        padding-bottom: 0.25rem;
    }

    span {
        padding-top: 1rem;
        color: #2e2e2e;
        font-weight: bold;
        font-size: 1.25em;
        text-decoration: none;
    }
    input {
        width: 50%;
        color: #2e2e2e;
        font-weight: regular;
        text-decoration: none;
        font-size: 1.15em;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    buttom {
            display: grid;
            justify-content: end;
            color: white;
            background: #F55E34;
            margin-top: 5px;
            margin-left: 30px;
            margin-bottom: 20px;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 19px;
            padding-bottom: 19px;
            font-weight: regular;
            font-size: 1.25rem;
            text-decoration: none;
            border: none;
            cursor: pointer;
            border-radius: 0.5rem;
        
        &:hover{
            background: white;
            color: black;
            transition: 1s;
        }
    }
    
`;
