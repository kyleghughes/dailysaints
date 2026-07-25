import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CoffeeIcon from "@mui/icons-material/Coffee";
import { Tooltip } from "@mui/material";

const Footer = () => {
  // #region constants
  const links = [
    {
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/kyleghughes/",
    },
    {
      name: "LinkedIn",
      icon: <GitHubIcon />,
      url: "https://github.com/kyleghughes",
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
          gap: 1,
          mt: 2,
        }}
      >
        {links.map((link) => (
          <Tooltip arrow key={link.name} title={link.name}>
            <IconButton
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              {link.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
