import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

import type { Saint } from "../data/saints";
import { formatFeastDay } from "../utils/date";

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
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="360"
            image={saint.image}
            alt={saint.name}
            sx={{ objectFit: "cover", objectPosition: "50% 20%" }}
          />
          <IconButton
            onClick={() => setImageOpen(true)}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              bgcolor: "rgba(0,0,0,0.5)",
              color: "white",
              "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
            }}
          >
            <FullscreenIcon />
          </IconButton>
        </Box>
        <CardContent>
          <Typography variant="h4" sx={{ mb: 1 }}>
            {saint.name}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
            Feast Day: {formatFeastDay(saint.day, saint.month)}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
            {saint.description}
          </Typography>
          <Button
            color="info"
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
      {/* Fullscreen Image */}
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
            "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
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
      {/* More Info */}
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
            "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box
          sx={{ p: { xs: 3, md: 5 }, maxWidth: 900, width: "100%", mx: "auto" }}
        >
          <Typography variant="h3" gutterBottom sx={{ mb: 5 }}>
            {saint.name}
          </Typography>
          <Stack spacing={5}>
            {saint.longDescription && (
              <>
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
              </>
            )}
            {saint.quotes && saint.quotes.length > 0 && (
              <Section title="Quotes">
                <Stack spacing={3}>
                  {saint.quotes.map((quote, index) => (
                    <Typography
                      key={index}
                      component="blockquote"
                      sx={{
                        m: 0,
                        pl: 3,
                        pr: 2,
                        borderLeft: 3,
                        borderColor: "divider",
                        fontStyle: "italic",
                        lineHeight: 1.8,
                      }}
                    >
                      {`"${quote.title}" — ${quote.source}`}
                    </Typography>
                  ))}
                </Stack>
              </Section>
            )}
            {saint.furtherReading && saint.furtherReading.length > 0 && (
              <Section title="Further Reading" divider={false}>
                <Stack spacing={2}>
                  {saint.furtherReading.map((reading, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      sx={{ lineHeight: 1.7 }}
                    >
                      <strong>{reading.title}</strong>
                      {reading.author && ` — ${reading.author}`}
                    </Typography>
                  ))}
                </Stack>
              </Section>
            )}
          </Stack>
        </Box>
      </Dialog>
    </>
  );
};

export default SaintCard;

const Section = ({
  title,
  text,
  children,
  divider = true,
}: {
  title: string;
  text?: string;
  children?: React.ReactNode;
  divider?: boolean;
}) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        {title}
      </Typography>
      {text && (
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          {text}
        </Typography>
      )}
      {children} {divider && <Divider sx={{ mt: 2 }} />}
    </Box>
  );
};
