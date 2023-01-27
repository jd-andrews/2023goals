import Subject from "./subject";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";

function Twenty23({ subjectList, setSubjectList }) {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h1">2023 Goals</Typography>
      </Grid>
      <Grid container spacing={4}>
        <Grid xs={12} md={6} maxWidth>
          <Subject subject={subjectList.hobbies} />
        </Grid>
        <Grid xs={12} md={6}>
          <Subject subject={subjectList.pHealth} />
        </Grid>
        <Grid xs={12} md={6}>
          <Subject subject={subjectList.travel} />
        </Grid>
        <Grid xs={12} md={6}>
          <Subject subject={subjectList.eHealth} />
        </Grid>
        <Grid xs={12} md={6}>
          <Subject subject={subjectList.style} />
        </Grid>
        <Grid xs={12} md={6}>
          <Subject subject={subjectList.fHealth} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Twenty23;
