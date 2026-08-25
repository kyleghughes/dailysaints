import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CoffeeIcon from "@mui/icons-material/Coffee";
import DiscordIcon from "./DiscordIcon";

const Footer = () => {
  // #region constants
  const links = [
    {
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/kyleghughes/",
    },
    {
      name: "Github",
      icon: <GitHubIcon />,
      url: "https://github.com/kyleghughes",
    },
    {
      name: "Discord",
      icon: <DiscordIcon />,
      url: "https://discord.gg/vf9ywuj2uK",
    },
    {
      name: "Donate",
      icon: <CoffeeIcon />,
      url: "https://buymeacoffee.com/kyleghughes",
    },
  ];
  // #endregion

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        textAlign: "center",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2026 Kyle Hughes. All rights reserved.
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1.5,
          mt: 2,
          flexWrap: "wrap",
        }}
      >
        {links.map((link) => (
          <Button
            key={link.name}
            component="a"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={link.icon}
            sx={{
              textTransform: "none",
              color: "text.secondary",
            }}
          >
            {link.name}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
