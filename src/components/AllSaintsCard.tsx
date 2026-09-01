import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { formatFeastDay } from "../utils/date";

const AllSaintsCard = () => {
  return (
    <Card elevation={3}>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="360"
          image={
            "https://www.antiochpatriarchate.org/images/Icons/6842c97b71723e0c0e77af85a3de7cdc.jpg"
          }
          alt={"All Saints Day"}
          sx={{
            objectFit: "cover",
            objectPosition: "50% 20%",
          }}
        />
      </Box>

      <CardContent>
        <Typography variant="h4" sx={{ mb: 1 }}>
          {"All Saints Day"}
        </Typography>

        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Feast Day: {formatFeastDay(1, 11)}
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
          Today we celebrate all the saints in Heaven, both those formally
          canonized by the Church and the countless holy men and women known
          only to God. It is a day to honour their lives, seek their
          intercession, and remember the universal call to holiness. The feast
          is celebrated annually on 1 November.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AllSaintsCard;
