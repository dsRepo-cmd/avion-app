import { render } from "@testing-library/react";
import AppLink from "./AppLink";

describe("AppLink Component", () => {
  it("renders with default props", () => {
    const { getByText } = render(<AppLink href="#">Link Text</AppLink>);
    const linkElement = getByText("Link Text");
    expect(linkElement).toBeInTheDocument();
  });

  it("renders with specified variant and background color", () => {
    const { getByText } = render(
      <AppLink href="#" variant="clear-zommed" bgColor="black">
        Link Text
      </AppLink>
    );
    const linkElement = getByText("Link Text");
    expect(linkElement).toHaveClass("hover-hover:hover:scale-[1.2]");
    expect(linkElement).toHaveClass("bg-darkPrimary");
  });

  it("renders with filled variant and gray background color", () => {
    const { getByText } = render(
      <AppLink href="#" variant="filled" bgColor="gray">
        Link Text
      </AppLink>
    );
    const linkElement = getByText("Link Text");
    expect(linkElement).toHaveClass("py-4 px-8 text-base");
    expect(linkElement).toHaveClass("bg-lightGrey");
  });

  it("renders with clear variant and white background color", () => {
    const { getByText } = render(
      <AppLink href="#" variant="clear" bgColor="white">
        Link Text
      </AppLink>
    );
    const linkElement = getByText("Link Text");
    expect(linkElement).toHaveClass("hover-hover:hover:opacity-70");
    expect(linkElement).toHaveClass("bg-white");
  });

  it("renders as an external link with specified href", () => {
    const { getByText } = render(
      <AppLink
        href="https://example.com"
        variant="clear-zommed"
        bgColor="black"
      >
        Link Text
      </AppLink>
    );
    const linkElement = getByText("Link Text") as HTMLAnchorElement;
    expect(linkElement.href).toBe("https://example.com/");
  });
});
