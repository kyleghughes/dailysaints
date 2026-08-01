import { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { saintQuotes } from "../data/saintQuotes";

const QuoteCard = () => {
  // #region state
  const [quote] = useState(() => {
    const randomIndex = Math.floor(Math.random() * saintQuotes.length);
    return saintQuotes[randomIndex];
  });
  // #endregion

  return (
    <Card
      sx={{
        textAlign: "center",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          component="blockquote"
          sx={{
            fontStyle: "italic",
          }}
        >
          {quote}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default QuoteCard;
