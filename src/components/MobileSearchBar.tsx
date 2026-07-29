import Box from "@mui/material/Box";
import Searchbar from "./Searchbar";
import type { Saint } from "../data/saints";

// #region interface
interface MobileSearchBarProps {
  darkColor: boolean;
  onSelectSaint: (saint: Saint | null) => void;
}
// #endregion

const MobileSearchBar = ({
  darkColor,
  onSelectSaint,
}: MobileSearchBarProps) => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        p: 2,
        zIndex: 1200,
        backgroundColor: "background.paper",
        boxShadow: 3,
      }}
    >
      <Searchbar
        darkColor={darkColor}
        isMobile={true}
        onSelectSaint={onSelectSaint}
      />
    </Box>
  );
};

export default MobileSearchBar;
