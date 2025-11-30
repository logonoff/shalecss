"use client";

import { CaptionButton, CaptionMenu, Icon } from "@shalecss/react";
import type { FC } from "react";
import { useTheme } from "./ThemeProvider";

export const ToggleTheme: FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <CaptionButton onClick={toggleTheme} title="Toggle dark mode">
      <Icon icon="moon-stroke" className="shale-v1-dark-enabled" />
      <Icon icon="moon-fill" className="shale-v1-dark-disabled" />
    </CaptionButton>
  );
};

export const ToggleContrast: FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleContrast = () => {
    if (theme !== "contrast") {
      setTheme("contrast");
    } else {
      setTheme("light");
    }
  };

  return (
    <CaptionButton onClick={toggleContrast} title="Toggle contrast">
      <Icon icon="contrast" className="shale-v1-contrast-enabled" />
      <Icon icon="contrast" flipX className="shale-v1-contrast-disabled" />
    </CaptionButton>
  );
};

export const ToggleTextSize: FC = () => {
  const { size, setSize } = useTheme();

  const toggleTextSize = () => {
    if (size === "regular") {
      setSize("large");
    } else {
      setSize("regular");
    }
  };

  return (
    <CaptionButton onClick={toggleTextSize} title="Toggle text size">
      <Icon icon="a-lowercase" className="shale-v1-bigger-text-enabled" />
      <Icon icon="a-uppercase" className="shale-v1-bigger-text-disabled" />
    </CaptionButton>
  );
};

export const ThemeMenu: FC = () => (
  <CaptionMenu>
    <ToggleTextSize />
    <ToggleContrast />
    <ToggleTheme />
  </CaptionMenu>
);
