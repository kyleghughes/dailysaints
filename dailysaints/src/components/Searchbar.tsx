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
  // #region function
  /**
   * Returns the sort priority for a saint's name.
   *
   * Names are grouped by title before being sorted alphabetically:
   * 1. Holy
   * 2. St.
   * 3. Sts.
   * 4. B. (Blessed)
   * 5. All other names
   */
  const getSortPriority = (name: string): number => {
    if (name.startsWith("Holy ")) return 0;
    if (name.startsWith("St. ")) return 1;
    if (name.startsWith("Sts. ")) return 2;
    if (name.startsWith("B. ")) return 3;
    return 4;
  };
  // #endregion

  // #region variables
  const saintNames = [...saints]
    .sort((a, b) => {
      const priorityDiff = getSortPriority(a.name) - getSortPriority(b.name);

      if (priorityDiff !== 0) {
        return priorityDiff;
      }

      return a.name.localeCompare(b.name);
    })
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
