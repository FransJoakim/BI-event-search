import React, { useState } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import ClearIcon from "@mui/icons-material/CloseOutlined";

interface SearchBarProps extends Omit<TextFieldProps<"outlined">, "variant"> {
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
}

const SearchBar = ({
  value: valueProp,
  onChange,
  ref,
  ...otherProps
}: SearchBarProps) => {
  const [value, setValue] = useState<string>(valueProp ?? "");
  const [isReadOnly, setIsReadOnly] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange?.(event);
  };

  const handleClear = () => {
    setValue("");
    setIsReadOnly(false);

    if (onChange) {
      onChange({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <Box style={{ position: "relative" }}>
      <TextField
        inputRef={ref}
        variant="outlined"
        sx={{
          backgroundColor: "white",
          borderRadius: "50px",
          "& .MuiInputBase-root ": { borderRadius: "50px" },
        }}
        value={valueProp ?? value}
        onChange={handleChange}
        slotProps={{
          input: {
            readOnly: isReadOnly,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <>
                <InputAdornment
                  position="end"
                  sx={{ visibility: value ? "visible" : "hidden" }}
                >
                  <IconButton onClick={handleClear}>
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              </>
            ),
          },
        }}
        {...otherProps}
      />
    </Box>
  );
};

export default SearchBar;
