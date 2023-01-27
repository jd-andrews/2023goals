import { useState } from "react";
import Twenty23 from "./2023";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const [subjectList, setSubjectList] = useState({
    hobbies: {
      title: "hobbies",
      align: "left",
      listItems: [
        "read 6 books",
        "climb 5.8 outdoors/5.llc indoors",
        "learn to crochet or knit",
        "record a talk with pops",
      ],
    },
    pHealth: {
      title: "physical health",
      align: "right",
      listItems: [
        "improve cardio",
        "daily pushups",
        "figure out curry",
        "figure out lentils",
      ],
    },

    style: {
      title: "style",
      align: "left",
      listItems: [
        "wear more clothes i enjoy",
        "by a suit/a good formal fit",
        "wear more jewelry",
        "try industrial",
      ],
    },
    fHealth: {
      title: "financial health",
      align: "right",
      listItems: ["pay off one card", "restart ira"],
    },
    travel: {
      title: "travel",
      align: "left",
      listItems: ["go west once", "camp alone", "backpack twice"],
    },
    eHealth: {
      title: "emotional health",
      align: "right",
      listItems: [
        "hesitate less/take chances",
        "nurture quality friendships",
        "fix night routine",
        "no phone first 10 min of the day",
        "therapy once a month",
        "buy flowers once or twice",
      ],
    },
  });

  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#88b9b2",
      },
      secondary: {
        main: "#888fb9",
      },
      background: {
        default: "#8fb988",
        paper: "#cce0c9",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 40, backgroundColor: "#8fb988", height: "100vh" }}>
        <Twenty23 subjectList={subjectList} setSubjectList={setSubjectList} />
      </div>
    </ThemeProvider>
  );
}

export default App;
