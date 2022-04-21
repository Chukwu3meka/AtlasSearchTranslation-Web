import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";

import MicIcon from "@mui/icons-material/Mic";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import Tooltip from "@mui/material/Tooltip";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

const SourceText = ({
  activeSourceLanguageTab,
  setActiveSourceLanguageTab,
  sourceText,
  setSourceText,
  handleSourceLanguageTabChange,
  handleFromTextChange,
  languageOptions,
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={activeSourceLanguageTab}
          onChange={handleSourceLanguageTabChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto">
          {languageOptions.map((label) => (
            <Tab
              value={label}
              key={label}
              label={
                <Typography fontWeight={600} color="text.secondary">
                  {label}
                </Typography>
              }
            />
          ))}
        </Tabs>
      </Box>
      <Box p={2} alignItems="flex-start" display="flex">
        <Input
          fullWidth
          multiline
          disableUnderline={true}
          minRows={4}
          fullWidth
          value={sourceText}
          sx={{ fontSize: 22, fontWeight: 500, color: "#474747" }}
          onChange={handleFromTextChange}
        />
        <Tooltip title="Clear source text" sx={{ ml: 1 }}>
          <IconButton aria-label="clear-source-text">
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
};

export default SourceText;
