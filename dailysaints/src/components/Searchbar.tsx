import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { saints, type Saint } from "../data/saints";

interface SearchbarProps {
  darkColor: boolean;
  onSelectSaint: (saint: Saint | null) => void;
}

const Searchbar = ({ darkColor, onSelectSaint }: SearchbarProps) => {
  // #region variables
  const saintNames = [...saints]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((s) => s.name);
  const darkModelogic = darkColor ? "black" : "white";
  // #endregion

  return (
    <Autocomplete
      options={saintNames}
      sx={{ width: "100%" }}
      onChange={(_, value) => {
        const saint = saints.find((s) => s.name === value) ?? null;
        onSelectSaint(saint);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Saints"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
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
