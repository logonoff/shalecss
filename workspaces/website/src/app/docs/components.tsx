/**
 * A list of shalecss exports and what page they belong to
 */
export const components: Record<
  string,
  {
    name: string;
    components: (keyof typeof import("@shalecss/react"))[];
  }
> = {
  "/docs": { name: "Introduction", components: [] },
  "/docs/button": { name: "Button", components: ["Button"] },
  "/docs/caption-button": {
    name: "CaptionButton",
    components: ["CaptionButton", "CaptionMenu"],
  },
  "/docs/card": { name: "Card", components: ["Card"] },
  "/docs/command-bar": { name: "CommandBar", components: ["CommandBar"] },
  "/docs/container": { name: "Container", components: ["Container"] },
  "/docs/flex": {
    name: "Flex",
    components: ["FlexContainer", "FlexItem", "FlexForm"],
  },
  "/docs/footer": { name: "Footer", components: ["Footer"] },
  "/docs/header": {
    name: "Header",
    components: ["Header", "HeaderText", "HeaderTitle", "Nav"],
  },
  "/docs/icon": { name: "Icon", components: ["Icon"] },
  "/docs/input": { name: "Input", components: ["Input"] },
  "/docs/link": { name: "Link", components: ["Link"] },
  "/docs/note": { name: "Note", components: ["Note", "NoteText"] },
  "/docs/select": { name: "Select", components: ["Select"] },
  "/docs/skip-to-content": {
    name: "SkipToContent",
    components: ["SkipToContent"],
  },
  "/docs/textarea": { name: "Textarea", components: ["Textarea"] },
  "/docs/typography": {
    name: "Typography",
    components: ["H1", "H2", "H3", "H4", "H5", "H6", "P", "Code"],
  },
};
