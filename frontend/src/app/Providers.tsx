"use client";

import CssBaseline from "@mui/material/CssBaseline";
// import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CssBaseline />
      <AppRouterCacheProvider options={{ enableCssLayer: true, key: "css" }}>
        {/* <ThemeProvider> */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {children}
        </LocalizationProvider>
        {/* </ThemeProvider> */}
      </AppRouterCacheProvider>
    </>
  );
};
