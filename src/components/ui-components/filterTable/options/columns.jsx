import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";

export function Columns({
  getIsAllColumnsVisible,
  getToggleAllColumnsVisibilityHandler,
  getAllLeafColumns,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Tooltip title="columns display options">
        <Button
          id="demo-customized-button"
          variant="contained"
          color="secondary"
          disableElevation
          onClick={handleClickMenu}
          sx={{ height: 30 }}
        >
          Columns
        </Button>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleCloseMenu}
      >
        <MenuItem>
          <FormControlLabel
            label="display all"
            control={
              <Checkbox
                checked={getIsAllColumnsVisible()}
                onChange={getToggleAllColumnsVisibilityHandler()}
              />
            }
          />
        </MenuItem>
        {getAllLeafColumns().map((column) => {
          return (
            <MenuItem key={column.id} >
              <FormControlLabel
                label={column.id}
                control={
                  <Checkbox
                    checked={column.getIsVisible()}
                    onChange={column.getToggleVisibilityHandler()}
                  />
                }
              />
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}
