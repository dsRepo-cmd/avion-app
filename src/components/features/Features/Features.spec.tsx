import { render, screen } from "@testing-library/react";
import Features, { homeFeatures } from "./Features";

jest.mock("@/components/shared/Container/Container", () => {
  const Container = ({ children }: { children: React.ReactNode }) => (
    <div data-testid="container">{children}</div>
  );
  Container.displayName = "Container";
  return Container;
});

jest.mock("@/components/shared/Typography/Typography", () => {
  const Typography = ({
    children,
    tag: Tag = "span",
    ...props
  }: {
    children: React.ReactNode;
    tag?: keyof JSX.IntrinsicElements;
    [key: string]: any;
  }) => (
    <Tag {...props} data-testid="typography">
      {children}
    </Tag>
  );
  Typography.displayName = "Typography";
  return Typography;
});

jest.mock("@/components/icons/DeliveryIcon", () => {
  const DeliveryIcon = () => <svg data-testid="delivery-icon" />;
  DeliveryIcon.displayName = "DeliveryIcon";
  return DeliveryIcon;
});

jest.mock("@/components/icons/CheckmarkOutlineIcon", () => {
  const CheckmarkOutlineIcon = () => <svg data-testid="checkmark-icon" />;
  CheckmarkOutlineIcon.displayName = "CheckmarkOutlineIcon";
  return CheckmarkOutlineIcon;
});

jest.mock("@/components/icons/PurchaseIcon", () => {
  const PurchaseIcon = () => <svg data-testid="purchase-icon" />;
  PurchaseIcon.displayName = "PurchaseIcon";
  return PurchaseIcon;
});

jest.mock("@/components/icons/SproutIcon", () => {
  const SproutIcon = () => <svg data-testid="sprout-icon" />;
  SproutIcon.displayName = "SproutIcon";
  return SproutIcon;
});

describe("Features Component", () => {
  it("renders without crashing", () => {
    render(<Features />);
    expect(screen.getByTestId("container")).toBeInTheDocument();
  });

  it("displays the correct title", () => {
    render(<Features />);
    const title = screen.getByText(homeFeatures.title);
    expect(title).toBeInTheDocument();
  });

  it("renders all features", () => {
    render(<Features />);
    homeFeatures.features.forEach((feature) => {
      expect(screen.getByText(feature.title)).toBeInTheDocument();
      expect(screen.getByText(feature.text)).toBeInTheDocument();
    });
  });

  it("renders the correct number of features", () => {
    render(<Features />);
    const featureItems = screen.getAllByRole("listitem");
    expect(featureItems).toHaveLength(homeFeatures.features.length);
  });

  it("renders all icons", () => {
    render(<Features />);
    expect(screen.getByTestId("delivery-icon")).toBeInTheDocument();
    expect(screen.getByTestId("checkmark-icon")).toBeInTheDocument();
    expect(screen.getByTestId("purchase-icon")).toBeInTheDocument();
    expect(screen.getByTestId("sprout-icon")).toBeInTheDocument();
  });

  it("applies correct classes to feature items", () => {
    render(<Features />);
    const featureItems = screen.getAllByRole("listitem");
    featureItems.forEach((item) => {
      expect(item).toHaveClass(
        "flex",
        "grow",
        "flex-col",
        "gap-2",
        "bg-lightGrey",
        "p-12",
        "w-full",
        "h-full",
        "md:px-6",
        "md:py-9"
      );
    });
  });
});
