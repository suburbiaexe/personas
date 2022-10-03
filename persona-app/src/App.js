import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import { BsHouseFill } from "react-icons/bs";
import { AppBar, IconButton, Toolbar } from "@mui/material";

import Home from "./pages/Home";
import Interface from "./pages/Interface";
import Observations from "./pages/Observations";
import Personas from "./pages/Personas";
import Storyboard from "./pages/Storyboard";

function App() {
  return (
    <div className="App">
      <AppBar color="transparent" elevation={0}>
        <Toolbar>
          <IconButton  href={"/"} size="large" sx={{color:"black"}}>
            < BsHouseFill />
          </IconButton>
        </Toolbar>
      </AppBar>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />}/>
          <Route path="/interface" element={< Interface />} />
          <Route path="/observations" element={< Observations />} />
          <Route path="/personas" element={< Personas />} />
          <Route path="storyboard" element={< Storyboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
