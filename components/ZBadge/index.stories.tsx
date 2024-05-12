import { Grid } from "@mui/material";
import ZBadge, { ZBadgeProps } from "./index";
import React from "react";

export default {
  title: "Example/ZBadge",
  tags: ["autodocs"],
  component: ZBadge,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// Define the Template component
const Template = (args: ZBadgeProps) => (
  <Grid container justifyContent="center" style={{ margin: "2rem 0" }}>
    <ZBadge {...args} />
  </Grid>
);

// Define the Default story
export const Default = Template.bind({});
Default.args = {
  badgeContent: 5,
  color: "error",
};

// Define the Size story with all size options
export const Size = (args: ZBadgeProps) => (
  <>
    {["small", "medium", "large"].map((size) => (
      <Grid
        justifyContent="center"
        container
        key={size}
        style={{ margin: "2rem 0" }}
      >
        <ZBadge
          {...args}
          size={size}
          badgeContent={5} // Adjust badge content as needed
          color={"error"}
        />
      </Grid>
    ))}
  </>
);
