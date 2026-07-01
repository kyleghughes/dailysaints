import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";

// #region type
type LiturgicalColour =
  | "green"
  | "red"
  | "white"
  | "purple"
  | "rose"
  | "gold"
  | "black";
// #endregion

// #region interace
export interface Saint {
  name: string;
  image: string;
  description: string;
  patronOf?: string;
  colour?: LiturgicalColour;
}
// #endregion

const SaintCard = ({ saint }: { saint: Saint }) => {
  // #region state
  const [open, setOpen] = useState<boolean>(false);
  // #endregion

  return (
    <>
      <Card elevation={3}>
        <div style={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="360"
            image={saint.image}
            alt={saint.name}
            sx={{
              objectFit: "cover",
              objectPosition: "50% 20%",
            }}
          />

          {/* Fullscreen button */}
          <IconButton
            onClick={() => setOpen(true)}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              bgcolor: "rgba(0,0,0,0.5)",
              color: "white",
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.7)",
              },
            }}
          >
            <FullscreenIcon />
          </IconButton>
        </div>

        <CardContent>
          <Typography variant="h4" gutterBottom>
            {saint.name}
          </Typography>

          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
            {saint.description}
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Stack spacing={1}>
            {saint.patronOf && (
              <Typography variant="body2">
                <strong>Patron of:</strong> {saint.patronOf}
              </Typography>
            )}
          </Stack>
        </CardContent>
      </Card>
      <Dialog fullScreen open={open} onClose={() => setOpen(false)}>
        <IconButton
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            zIndex: 1,
            color: "white",
            bgcolor: "rgba(0,0,0,0.4)",
            "&:hover": {
              bgcolor: "rgba(0,0,0,0.7)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
        <img
          src={saint.image}
          alt={saint.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            backgroundColor: "black",
          }}
        />
      </Dialog>
    </>
  );
};

export default SaintCard;
