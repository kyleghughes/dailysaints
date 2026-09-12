import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import type { Saint } from "../data/saints";

// #region interface
interface PrayForUsCardProps {
  saints: Saint[];
}
// #endregion

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
