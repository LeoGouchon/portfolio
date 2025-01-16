import styled from "@emotion/styled";
import {Chip, css, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {ScreenSizeInterface} from "../../global.style.tsx";
import {getGapValue} from "../../utils/CssUtils.ts";

export const SelectedTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
`;

export const GlobalWrapper = styled.div`
    display: flex;
    flex-direction: row;
    
    overflow: hidden;
    gap: 20px;
`;

interface WorksListWrapperProps extends ScreenSizeInterface {}

export const WorksListWrapper = styled.div<WorksListWrapperProps>`
    display: flex;
    flex-direction: column;
    
    width: ${props => props.screensize >= 4 ? '66%' : '100%'};
    
    padding-right: ${props => props.screensize >= 4 ? '20px' : 0};
`;

interface TableAndFilterWrapperProps extends ScreenSizeInterface {};

export const TableAndFilterWrapper = styled.div<TableAndFilterWrapperProps>`
    display: flex;
    flex-direction: column;
    gap: ${props => getGapValue(props.screensize)}
`;

export const TitleWrapper = styled.div`   
    text-align: left;
    text-wrap: balance;
`;

interface NumberAnimationProps {
    projectCount: number
}

export const NumberAnimation = styled.span<NumberAnimationProps>`
    @property --num {
        syntax: "<integer>";
        initial-value: 0;
        inherits: false;
    }

    animation: counter 3s ease-out forwards;
    counter-reset: num var(--num);

    ::after {
        content: counter(num);
    }

    @keyframes counter {
        0% {
            --num: 0;
        }
        100% {
            --num: ${(props) => props.projectCount};
        }
    }
`;

export const TableRowStyled = styled(TableRow)`
`;

export const TableRowPrimaryStyled = styled(TableRowStyled)`
    cursor: pointer;
`;

export const TableCellStyled = styled(TableCell)`
`;

export const TableCellShowCaseStyled = styled(TableCellStyled)`
    padding-bottom: 0; 
    padding-top: 0;
`;

export const TableCellChipStyled = styled(TableCellStyled)`
    gap: 8px;
`;

export const TableYearStyled = styled(TableCellStyled)`
    text-wrap: nowrap;
    text-align: right;
`;

export const IconsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    gap: 20px;
    
    > * {
        min-width: 0;
        padding: 0;
    }
`;

export const TableContainerStyled = styled(TableContainer)`
  overflow-y: hidden;
`;

export const TableHeadStyled = styled(TableHead)`
`;

export const TableFirstRowStyled = styled(TableRow)`
    > * {
        height: 0;
        padding: 0;
    }
`;

interface SelectWrapperProps extends ScreenSizeInterface {};

export const SelectWrapper = styled.div<SelectWrapperProps>`
    display: flex;
    flex-direction: column;
    width: fit-content;
    min-width: ${props => props.screensize > 3 ? "50%" : "100%"};
`;

export const TitleAndShowcaseWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;
`;

interface NameAndChipWrapperProps extends ScreenSizeInterface {};

export const NameAndChipWrapper = styled.div<NameAndChipWrapperProps>`
    display: flex;
    align-items: center;
    justify-content: start;
    height: 100%;
    
    gap: ${getGapValue(1)}
`;

interface ChipStyledProps extends ScreenSizeInterface {};

export const ChipStyled = styled(Chip)<ChipStyledProps>`
    ${props => props.screensize === 1 && css`
        writing-mode: vertical-rl;
        text-orientation: mixed; 
        font-size: 11px;
        height: fit-content;
        width: fit-content;
        padding: 9px 1px 10px 0;
        border-radius: 4px;
    `}

    ${props => props.screensize > 1 && css`
        writing-mode: vertical-rl;
        text-orientation: mixed; 
        font-size: 14px;
        font-weight: 500;
        height: fit-content;
        width: fit-content;
        padding: 12px 1px 13px 0;
        border-radius: 4px;
    `}
`;

export const ChipWrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    height: 100%;
`;

export const YearStyled = styled(Typography)`
    writing-mode: vertical-rl;
    text-orientation: mixed;
`;

export const MobileTableCellStyled = styled(TableCellStyled)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 4px;
    padding-right: 4px;
    
    gap: ${getGapValue(1)}
`;