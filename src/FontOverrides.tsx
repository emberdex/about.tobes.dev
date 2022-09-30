import React from "react";

declare module '@mui/material/styles' {
    interface TypographyVariants {
        jumbotronHeader: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        jumbotronHeader?: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        jumbotronHeader: true;
    }
}

export {}