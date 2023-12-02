import { Card, CardContent, CardHeader, Typography, useTheme } from "@mui/material";
import { tokens } from "../assets/theme";
import { ReactNode } from "react";

type ItemProps = {
  title: string;
  content?: ReactNode | null;
  height: number;
  padding?: number;
};

const Item = ({ title, content, height = 400, padding = 1 }: ItemProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Card
      sx={{
        background: colors.primary[400],
        boxShadow: 4,
        height: `${height}px`,
        padding: `${padding}rem`,
        margin: "0 auto",
        width: "100%",
      }}
    >
      <CardHeader
        title={
          <Typography variant="h5" fontWeight={600}>
            {title}
          </Typography>
        }
      />
      <CardContent
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[800],
            borderBottom: "none",
          },
          boxSizing: "border-box",
          height: "90%",
        }}
      >
        {content}
      </CardContent>
    </Card>
  );
};

export default Item;
