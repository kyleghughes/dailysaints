import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CoffeeIcon from "@mui/icons-material/Coffee";

const Footer = () => {
  // #region constants
  const links = [
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
