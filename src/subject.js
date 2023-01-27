import Task from "./task";
import {
  Card,
  CardContent,
  Divider,
  Typography,
  FormGroup,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function Subject({ subject }) {
  console.log(subject);
  return (
    <Card sx={{ minHeight: 300 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Divider textAlign={subject.align}>
              <Typography variant="h5">{subject.title}</Typography>
            </Divider>
          </Grid>
          <Grid
            xs={12}
            display="flex"
            justifyContent="left"
            alignItems="center"
          >
            <FormGroup>
              {subject.listItems.map((item, index) => (
                <Task task={item} />
              ))}
            </FormGroup>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Subject;
