import { renderHook, act } from "@testing-library/react";
import useIsMobile from "./useIsMobile";

describe("useIsMobile", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should return true when window width is less than or equal to MOBILE_MAX_WIDTH", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 800,
    });

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(true);
  });

  it("should return false when window width is greater than MOBILE_MAX_WIDTH", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 900,
    });

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);
  });

  it("should return true when the user agent is mobile", () => {
    Object.defineProperty(window.navigator, "userAgent", {
      value:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15A372 Safari/604.1",
      configurable: true,
    });

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(true);
  });

  it("should return false when the user agent is not mobile and width is greater than MOBILE_MAX_WIDTH", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 900,
    });

    Object.defineProperty(window.navigator, "userAgent", {
      value:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      configurable: true,
    });

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);
  });

  it("should update isMobile when the window is resized", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 900,
    });

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);

    act(() => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        value: 800,
      });

      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current).toBe(true);
  });
});
