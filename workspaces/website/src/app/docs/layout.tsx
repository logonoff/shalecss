"use client";

import { Button, Container, FlexContainer, FlexItem, H1 } from "@shalecss/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const components = [
    { name: "Introduction", href: "/docs" },
    { name: "Button", href: "/docs/button" },
    { name: "CaptionButton", href: "/docs/caption-button" },
    { name: "Card", href: "/docs/card" },
    { name: "CommandBar", href: "/docs/command-bar" },
    { name: "Container", href: "/docs/container" },
    { name: "FlexItem", href: "/docs/flex-item" },
    { name: "Footer", href: "/docs/footer" },
    { name: "Header", href: "/docs/header" },
    { name: "Html", href: "/docs/html" },
    { name: "Icon", href: "/docs/icon" },
    { name: "Input", href: "/docs/input" },
    { name: "Link", href: "/docs/link" },
    { name: "Nav", href: "/docs/nav" },
    { name: "Note", href: "/docs/note" },
    { name: "Select", href: "/docs/select" },
    { name: "SkipToContent", href: "/docs/skip-to-content" },
    { name: "Textarea", href: "/docs/textarea" },
    { name: "Typography", href: "/docs/typography" },
]

export default function DocsPage({ children }: Readonly<{ children: React.ReactNode }>) {
    const pathname = usePathname();
    const currentPage = components.find(page => page.href === pathname) || { name: "Page", href: pathname };

    return (
        <>
            <Container Component="main">
                <H1>{currentPage.name}</H1>
                <FlexContainer variant="center">
                    <FlexItem flex="custom" flexAmount="10%">
                        <FlexContainer style={{ flexDirection: 'column', gap: 'var(--shale-v1-font--1)' }}>
                            {
                                components.map((component) => (
                                    <Button variant="secondary" Component={Link} key={component.name} href={component.href} state={currentPage.href === component.href ? 'active' : undefined}>
                                        {component.name}
                                    </Button>
                                ))
                            }
                        </FlexContainer>
                    </FlexItem>
                    <FlexItem flex="custom" flexAmount="80%">
                        {children}
                    </FlexItem>
                </FlexContainer>
            </Container>
        </>
    );
}
