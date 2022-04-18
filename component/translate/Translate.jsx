import { DocumentsTranslate, styles, TextTranslate, WebsitesTranslate } from ".";
import { Box, Button, Paper, Typography } from "@mui/material";

const Translate = ({ translateOptions, translateType, translateTypeHandler }) => (
  <Box className={styles.translate}>
    <div />
    <Box>
      {translateOptions.map(({ label, icon }) => (
        <Button
          key={label}
          startIcon={icon}
          variant="outlined"
          onClick={translateTypeHandler(label)}
          sx={{
            mr: 1,
            fontWeight: "bold",
            textTransform: "capitalize",
            backgroundColor: translateType === label ? "#dee7fd" : null,
            // hide "Documents option" when on mobile device
            display: label === "Documents" ? { xs: "none", sm: "none", md: "inline-block" } : "",
          }}>
          {label}
        </Button>
      ))}

      <Paper
        elevation={4}
        className={styles.translateContainer}
        sx={{
          mt: 2,
          mb: 0.5,
          minHeight: translateType === "Documents" ? 300 : translateType === "Websites" ? 260 : 270,
        }}>
        {translateType === "Text" ? <TextTranslate /> : translateType === "Documents" ? <DocumentsTranslate /> : <WebsitesTranslate />}
      </Paper>
      <Typography textAlign="right" fontSize={12}>
        <i>Send feedback</i>
      </Typography>
    </Box>
  </Box>
);

export default Translate;
