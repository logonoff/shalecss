"use client";

import {
  Header,
  HeaderText,
  HeaderTitle,
  MenuBarButton,
  Nav,
} from "@shalecss/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "react";
import { ThemeMenu } from "./ThemeMenu";

const metadata = [
  { title: "Home", path: "/" },
  { title: "Documentation", path: "/docs" },
];

export const PageHeader: FC = () => {
  const currentPath = usePathname();
  const currentPage = metadata.find(
    (page) =>
      (page.path !== "/" && currentPath.startsWith(page.path)) ||
      currentPath === page.path,
  ) || { title: "Page", path: currentPath };

  return (
    <Header>
      <HeaderTitle>
        <HeaderText>{currentPage.title}</HeaderText>
        <ThemeMenu />
      </HeaderTitle>
      <Nav>
        {metadata.map((page) => (
          <MenuBarButton
            Component={Link}
            key={page.path}
            href={page.path}
            current={page.path === currentPage.path}
          >
            {page.title}
          </MenuBarButton>
        ))}
      </Nav>
    </Header>
  );
};
