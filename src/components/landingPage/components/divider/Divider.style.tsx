import styled from "@emotion/styled";
import {ScreenSizeInterface} from "../../../../global.style.tsx";

interface DividerWrapperProps extends ScreenSizeInterface {}

export const DividerWrapper = styled.div<DividerWrapperProps>`
    width: 100%;
    margin: ${(props) => props.screensize < 3 ? "16px 0" : "40px 0"};
    display: flex;
    justify-content: center;
    align-items: center;
    
    //animation: move-horizontal 100s linear infinite;

    @keyframes move-horizontal {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(100vw);
        }
    }
`;

export const ElementWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;