// src/emotion.d.ts
import '@emotion/react';
import { Theme as MuiTheme } from '@mui/material/styles';

declare module '@emotion/react' {
    export interface Theme extends MuiTheme {}
}

declare module '@mui/material/styles' {
    interface Palette {
        event: Palette["event"],
        photography: Palette["photography"],
        design: Palette["design"],
        programming: Palette["programming"],
    }
}

declare module '@mui/material/Chip' {
    interface ChipPropsColorOverrides {
        event: true;
        photography: true;
        design: true;
        programming: true;
    }
}