import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Autocomplete, {
  AutocompleteRenderInputParams,
} from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { argProps } from "./utils/formatArgs";
import { ReactNode } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Autocomplete> = {
  title: "INPUTS/Autocomplete",
  component: Autocomplete,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component:
          "The value must be chosen from a predefined set of allowed values.",
      },
      canvas: { sourceState: "shown" },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: { type: "boolean" },
    },
    color: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "error",
        "warning",
        "info",
        "success",
        "inherit",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

const options = [
  { label: "The Godfather", id: 1 },
  { label: "Pulp Fiction", id: 2 },
];
// or

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const AutocompleteComboBox: Story = {
  args: {
    size: "medium",
    options: options,
    renderInput: (params: AutocompleteRenderInputParams): ReactNode => (
      <TextField {...params} label="Movie" />
    ),
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import { ReactNode } from "react";
import Autocomplete, { AutocompleteRenderInputParams } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const options = [
  { label: 'The Godfather', id: 1 },
  { label: 'Pulp Fiction', id: 2 },
];
// or
const options = ['The Godfather', 'Pulp Fiction'];

<Autocomplete
  ${argProps(storyContext, ["renderInput", "options"])}
  options={options}
  renderInput: (params: AutocompleteRenderInputParams): ReactNode => <TextField {...params} label="Movie" />
>
        `,
      },
    },
  },
};
