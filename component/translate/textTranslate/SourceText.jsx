import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Tooltip from "@mui/material/Tooltip";
import MicIcon from "@mui/icons-material/Mic";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

const SourceText = ({ sourceText, clearTextHandler, handleSourceTextChange }) => (
  <Box sx={{ width: "100%" }}>
    <Box p={2} alignItems="flex-start" display="flex">
      <Input
        fullWidth
        multiline
        disableUnderline={true}
        minRows={4}
        fullWidth
        value={sourceText}
        sx={{ fontSize: 22, fontWeight: 500, color: "#474747" }}
        onChange={(e) => handleSourceTextChange(e.target.value)}
      />
      <Tooltip title="Clear source text" sx={{ ml: 1 }}>
        <IconButton aria-label="clear-source-text" onClick={clearTextHandler}>
          <CloseSharpIcon />
        </IconButton>
      </Tooltip>
    </Box>
    <Box display="flex" alignItems="center" pb={1}>
      <Tooltip title="Translate by voice">
        <IconButton aria-label="translate-by-voice">
          <MicIcon />
        </IconButton>
      </Tooltip>
      {sourceText.length ? (
        <Tooltip title="Listen">
          <IconButton aria-label="listen">
            <VolumeUpIcon />
          </IconButton>
        </Tooltip>
      ) : (
        ""
      )}
      <Box sx={{ flexGrow: 1 }} />
      <Typography color="text.secondary" fontSize={14} mr={1}>
        {`${sourceText.length}/5000`}
      </Typography>
      <Tooltip title="Turn on Virtual Keyboard">
        <IconButton aria-label="turn-on-virtual-keyboard">
          <KeyboardIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
  </Box>
);

export default SourceText;
