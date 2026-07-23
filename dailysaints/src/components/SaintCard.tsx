import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";
import type { Saint } from "../data/saints";

// #region types
export interface SaintLongDescription {
  earlyLife: string;
  spiritualLife: string;
  death: string;
  legacy: string;
  canonization: string;
}
// #endregion

const SaintCard = ({ saint }: { saint: Saint }) => {
  // #region state
  const [imageOpen, setImageOpen] = useState<boolean>(false);
  const [infoOpen, setInfoOpen] = useState<boolean>(false);
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

          <IconButton
            onClick={() => setImageOpen(true)}
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

          <Button
            color={"info"}
            variant="outlined"
            onClick={() => setInfoOpen(true)}
            sx={{ mb: 2 }}
          >
            Show more info
          </Button>

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

      <Dialog fullScreen open={imageOpen} onClose={() => setImageOpen(false)}>
        <IconButton
          onClick={() => setImageOpen(false)}
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

      <Dialog fullScreen open={infoOpen} onClose={() => setInfoOpen(false)}>
        <IconButton
          onClick={() => setInfoOpen(false)}
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

        <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
          <Typography variant="h3" gutterBottom>
            {saint.name}
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
            {saint.description}
          </Typography>

          {saint.longDescription && (
            <Stack spacing={4}>
              <Section
                title="Early Life"
                text={saint.longDescription.earlyLife}
              />
              <Section
                title="Spiritual Life"
                text={saint.longDescription.spiritualLife}
              />
              <Section title="Death" text={saint.longDescription.death} />
              <Section title="Legacy" text={saint.longDescription.legacy} />
              <Section
                title="Canonization"
                text={saint.longDescription.canonization}
              />
            </Stack>
          )}
        </div>
      </Dialog>
    </>
  );
};

export default SaintCard;

const Section = ({ title, text }: { title: string; text: string }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
        {text}
      </Typography>
      <Divider sx={{ mt: 2 }} />
    </div>
  );
};
