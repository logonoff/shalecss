"use client";

import {
  Button,
  Card,
  Container,
  FlexContainer,
  FlexItem,
} from "@shalecss/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { components } from "./components";

export default function DocsPage({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  return (
    <Container
      Component="main"
      id="maincontent"
      style={{ marginTop: "var(--shale-v1-font-4)" }}
    >
      <FlexContainer variant="center">
        <FlexItem flex="custom" flexAmount="10%">
          <Card
            style={{
              position: "sticky",
              top: "var(--shale-v1-font-5)",
              padding: "var(--shale-v1-font--3)",
            }}
          >
            <FlexContainer
              variant="space-between"
              style={{
                flexDirection: "column",
                gap: "var(--shale-v1-font--3)",
              }}
            >
              {Object.entries(components).map(([path, component]) => (
                <Button
                  variant="secondary"
                  style={{ width: "100%", textAlign: "left" }}
                  Component={Link}
                  scroll={false}
                  key={component.name}
                  href={path}
                  state={pathname === path ? "active" : undefined}
                >
                  {component.name}
                </Button>
              ))}
            </FlexContainer>
          </Card>
        </FlexItem>
        <FlexItem flex="custom" flexAmount="80%">
          {children}
        </FlexItem>
      </FlexContainer>
    </Container>
  );
}
