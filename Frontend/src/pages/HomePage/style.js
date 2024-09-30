import styled from "styled-components";
import Buttons from "../../components/Buttons/Buttons";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    border-bottom: 1px solid blue;
    height: 44px;
`
export const WrapperButtonMore = styled(Buttons)`
    &:hover{
        color: #fff;
        background: rgb(13, 92, 182);
        span{
            color: #fff;
        }
    }
    width: 100%;
    text-align:center;
    

`