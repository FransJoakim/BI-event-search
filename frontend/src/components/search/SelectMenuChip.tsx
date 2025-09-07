import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownOutlined from "@mui/icons-material/KeyboardArrowDownOutlined";
import CheckOutlined from "@mui/icons-material/CheckOutlined";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

interface Props {
  label: string;
  startIcon?: React.ReactNode;
  menuItems?: Array<{ key: string; label: React.ReactNode }>;
  selectedKey?: string;
  closeOnSelect?: boolean;
  onChange?: (key: string) => void;
}

export default function SelectMenuChip({
  label,
  startIcon,
  menuItems = [],
  selectedKey,
  closeOnSelect = false,
  onChange,
}: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (key: string) => {
    onChange?.(key);
    if (closeOnSelect) {
      handleClose();
    }
  };

  return (
    <Box>
      <Button
        id="action-chip-button"
        aria-controls={open ? "action-chip-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="outlined"
        disableElevation
        onClick={handleClick}
        startIcon={startIcon}
        endIcon={<KeyboardArrowDownOutlined />}
        sx={{ borderRadius: 50, fontSize: 12 }}
      >
        <span className="whitespace-nowrap overflow-hidden max-w-[120px] inline-block">
          {label}
        </span>
      </Button>
      <Menu
        elevation={0}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id="action-chip-menu"
        slotProps={{
          paper: {
            sx: {
              minWidth: 150,
              boxShadow: "0px 4px 16px rgba(33, 150, 243, 0.15)", // blue shadow
              borderRadius: 2,
            },
          },
          list: { "aria-labelledby": "action-chip-button" },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuItems.map(({ key, label }) => {
          const isSelected = selectedKey === key;
          return (
            <MenuItem
              key={key}
              onClick={() => handleSelect(key)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>{label}</Box>
              {isSelected && <CheckOutlined fontSize="small" />}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
}
