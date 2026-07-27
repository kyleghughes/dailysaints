import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { saints, type Saint } from "../data/saints";

// #region interface
interface SearchbarProps {
  darkColor: boolean;
  isMobile: boolean;
  onSelectSaint: (saint: Saint | null) => void;
}
// #endregion

const Searchbar = ({ darkColor, isMobile, onSelectSaint }: SearchbarProps) => {
  // #region variables
  const saintNames = [...saints]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((s) => s.name);
  const darkModelogic = darkColor ? "black" : "white";
  // #endregion

  return (
    <Autocomplete
      options={saintNames}
      sx={{
        width: "100%",
      }}
      slotProps={{
        popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, isMobile ? 10 : 0],
              },
            },
          ],
        },
      }}
      onChange={(_, value) => {
        const saint = saints.find((s) => s.name === value) ?? null;
        onSelectSaint(saint);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={isMobile ? "" : "Search Saints"}
          placeholder={!isMobile ? "" : "Search Saints"}
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "white",
              color: darkModelogic,
              "& fieldset": {
                borderColor: darkModelogic,
              },
              "&:hover fieldset": {
                borderColor: darkModelogic,
              },
              "&.Mui-focused fieldset": {
                borderColor: darkModelogic,
              },
            },

            "& .MuiInputLabel-root": {
              color: darkModelogic,
            },

            "& .MuiInputLabel-root.Mui-focused": {
              color: darkModelogic,
            },

            "& .MuiSvgIcon-root": {
              color: darkModelogic,
            },

            "& input": {
              color: darkModelogic,
            },
          }}
        />
      )}
    />
  );
};

export default Searchbar;
