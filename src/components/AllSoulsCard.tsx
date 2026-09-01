import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { formatFeastDay } from "../utils/date";

const AllSoulsCard = () => {
  return (
    <Card elevation={3}>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="360"
          image={
            "https://images.unsplash.com/photo-1667512503380-c3b127f5c1a4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuZGxlJTIwd2l0aCUyMGJsYWNrJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
          }
          alt={"All Souls Day"}
          sx={{
            objectFit: "cover",
            objectPosition: "50% 20%",
          }}
        />
      </Box>

      <CardContent>
        <Typography variant="h4" sx={{ mb: 1 }}>
          {"All Souls Day"}
        </Typography>

        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Feast Day: {formatFeastDay(2, 11)}
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
          All Souls' Day is a day of prayer and remembrance for the faithful
          departed. The Church offers prayers and Masses for those who have died
          and may still be undergoing purification before entering the fullness
          of Heaven. It is a day to entrust the departed to God's mercy and to
          reflect upon the hope of eternal life. It is observed annually on 2
          November.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AllSoulsCard;
