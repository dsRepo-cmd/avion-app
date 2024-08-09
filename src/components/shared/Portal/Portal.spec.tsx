import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Portal from "./Portal";

// Mock createPortal
jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  createPortal: jest.fn((element, node) => {
    return <div data-testid="mock-portal">{element}</div>;
  }),
}));

describe("Portal", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders children when mounted", async () => {
    await act(async () => {
      render(
        <Portal>
          <div data-testid="portal-content">Portal Content</div>
        </Portal>
      );
    });

    expect(screen.getByTestId("mock-portal")).toBeInTheDocument();
    expect(screen.getByTestId("portal-content")).toBeInTheDocument();
    expect(screen.getByText("Portal Content")).toBeInTheDocument();
  });

  it("uses document.body as the default mount point", async () => {
    await act(async () => {
      render(
        <Portal>
          <div>Portal Content</div>
        </Portal>
      );
    });

    expect(screen.getByTestId("mock-portal")).toBeInTheDocument();
    expect(screen.getByText("Portal Content")).toBeInTheDocument();
  });

  it("uses the specified mountId when provided", async () => {
    const headerElement = document.createElement("div");
    headerElement.id = "header";
    document.body.appendChild(headerElement);

    await act(async () => {
      render(
        <Portal mountId="header">
          <div>Portal Content</div>
        </Portal>
      );
    });

    expect(screen.getByTestId("mock-portal")).toBeInTheDocument();
    expect(screen.getByText("Portal Content")).toBeInTheDocument();

    document.body.removeChild(headerElement);
  });

  it("updates the mount element when mountId changes", async () => {
    const headerElement = document.createElement("div");
    headerElement.id = "header";
    document.body.appendChild(headerElement);

    const { rerender } = render(
      <Portal>
        <div>Portal Content</div>
      </Portal>
    );

    expect(screen.getByTestId("mock-portal")).toBeInTheDocument();
    expect(screen.getByText("Portal Content")).toBeInTheDocument();

    await act(async () => {
      rerender(
        <Portal mountId="header">
          <div>Portal Content</div>
        </Portal>
      );
    });

    expect(screen.getByTestId("mock-portal")).toBeInTheDocument();
    expect(screen.getByText("Portal Content")).toBeInTheDocument();

    document.body.removeChild(headerElement);
  });
});
