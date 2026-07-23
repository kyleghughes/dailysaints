import Card from "@mui/material/Card";
import type { Saint } from "../data/saints";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface PrayForUsCardProps {
  saints: Saint[];
}

const PrayForUsCard = ({ saints }: PrayForUsCardProps) => {
  return (
    <Card>
      <CardContent>
        <Box>
          {saints.map((saint, index) => (
            <Typography
              key={`${saint.name}-${index}`}
              variant="body1"
              sx={{ textAlign: "center" }}
            >
              {saint.name}, pray for us.
            </Typography>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default PrayForUsCard;
