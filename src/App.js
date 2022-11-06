import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Socialnavbar from "./components/Socialnavbar";
import AddPost from "./components/AddPost";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Socialnavbar /> 
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
