import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";
import { default as Button } from "./index";
import React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: "Example/ZButton",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const All: Story = {
  args: {
    size: "medium",
    color: "primary",
    children: "Create Cohort",
  },
};

const Template: Story = (args) => <Button {...args} />;
export const Variants = Template.bind({});

const Wrapper = ({ children }) => {
  return (
    <Box display={"flex"} width={"100%"} justifyContent={"space-between"}>
      {children}
    </Box>
  );
};

Variants.args = {
  size: "medium",
  color: "primary",
  children: "Create Cohort",
};

Variants.decorators = [
  () => {
    return (
      <Box display={"flex"} width={"600px"} justifyContent={"space-between"}>
        <Button {...Variants.args} variant="contained">
          Contained
        </Button>
        <Button {...Variants.args} variant="outlined">
          Outlined
        </Button>
        <Button {...Variants.args} variant="text">
          Text Button
        </Button>
      </Box>
    );
  },
];

export const Colors = Template.bind({});

Colors.args = {
  size: "medium",
  children: "Create Cohort",
};

Colors.decorators = [
  () => {
    return (
      <Box width={"600px"}>
        <Wrapper>
          <Button {...Colors.args} variant="contained" color="primary">
            Contained Primary
          </Button>

          <Button {...Colors.args} variant="contained" color="secondary">
            Contained Secondary
          </Button>
          <Button {...Colors.args} variant="contained" color="error">
            Contained Error
          </Button>
        </Wrapper>

        <br />
        <br />
        <Wrapper>
          <Button {...Colors.args} variant="outlined" color="primary">
            Outlined Primary
          </Button>
          <Button {...Colors.args} variant="outlined" color="secondary">
            Outlined Secondary
          </Button>
          <Button {...Colors.args} variant="outlined" color="error">
            Outlined Error
          </Button>
        </Wrapper>
        <br />
        <br />
        <Wrapper>
          <Button {...Colors.args} variant="text" color="primary">
            Text Primary
          </Button>
          <Button {...Colors.args} variant="text" color="secondary">
            Text Secondary
          </Button>
          <Button {...Colors.args} variant="text" color="error">
            Text Error
          </Button>
        </Wrapper>
      </Box>
    );
  },
];

export const Sizes = Template.bind({});

Sizes.args = {
  color: "primary",
  variant: "contained",
  children: "Create Cohort",
};

Sizes.decorators = [
  () => {
    return (
      <Box width={"600px"}>
        <Wrapper>
          {/* <Button {...Colors.args} size="xl">
          XL Button
        </Button> */}

          <Button {...Sizes.args} size="large">
            Large Button
          </Button>
          <Button {...Sizes.args} size="medium">
            Medium Button
          </Button>
          <Button {...Sizes.args} size="small">
            Small Button
          </Button>
        </Wrapper>
      </Box>
    );
  },
];

export const Disabled = Template.bind({});

Disabled.args = {
  size: "medium",
  children: "Create Cohort",
  disabled: true,
};

Disabled.decorators = [
  () => {
    return (
      <Box width={"600px"}>
        {/* <Button {...Colors.args} size="xl">
          XL Button
        </Button> */}

        <Wrapper>
          <Button
            {...Disabled.args}
            variant="contained"
            color="primary"
            disabled
          >
            Contained Primary
          </Button>

          <Button {...Disabled.args} variant="contained" color="secondary">
            Contained Secondary
          </Button>
          <Button {...Disabled.args} variant="contained" color="error">
            Contained Error
          </Button>
        </Wrapper>

        <br />
        <br />
        <Wrapper>
          <Button {...Disabled.args} variant="outlined" color="primary">
            Outlined Primary
          </Button>
          <Button {...Disabled.args} variant="outlined" color="secondary">
            Outlined Secondary
          </Button>
          <Button {...Disabled.args} variant="outlined" color="error">
            Outlined Error
          </Button>
        </Wrapper>
        <br />
        <br />
        <Wrapper>
          <Button {...Disabled.args} variant="text" color="primary">
            Text Primary
          </Button>
          <Button {...Disabled.args} variant="text" color="secondary">
            Text Secondary
          </Button>
          <Button {...Disabled.args} variant="text" color="error">
            Text Error
          </Button>
        </Wrapper>
      </Box>
    );
  },
];

export const DropDownButton = Template.bind({});

DropDownButton.args = {
  size: "large",
  children: "Create Cohort",
  // isLoading: true,
  dropDownButtonProps: {
    actionItems: [
      {
        label: "Item 1",
        onClick: () => {
          console.log("Item 1");
        },
      },
      {
        label: "Item 2",
        onClick: () => {
          console.log("Item 2");
        },
      },
    ],
    primaryAction: {
      label: "Primary Action",
      onClick: () => {
        console.log("Primary Action");
      },
    },
  },
};

DropDownButton.decorators = [
  () => {
    return (
      <Box width={"900px"}>
        <Wrapper>
          <Button
            {...DropDownButton.args}
            variant="contained"
            color="primary"
          />

          <Button
            {...DropDownButton.args}
            variant="contained"
            color="secondary"
          />
          <Button {...DropDownButton.args} variant="contained" color="error" />
        </Wrapper>
        <Box height={"2rem"} />
        <Wrapper>
          <Button {...DropDownButton.args} variant="outlined" color="primary" />

          <Button
            {...DropDownButton.args}
            variant="outlined"
            color="secondary"
          />
          <Button {...DropDownButton.args} variant="outlined" color="error" />
        </Wrapper>
      </Box>
    );
  },
];
