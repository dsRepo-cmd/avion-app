import { isMobile } from "./isMobile";

describe("isMobile", () => {
  it("should return true for iPhone user agent", () => {
    const userAgent =
      "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15A372 Safari/604.1";
    expect(isMobile(userAgent)).toBe(true);
  });

  it("should return true for iPad user agent", () => {
    const userAgent =
      "Mozilla/5.0 (iPad; CPU OS 13_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/604.1";
    expect(isMobile(userAgent)).toBe(true);
  });

  it("should return true for Android mobile user agent", () => {
    const userAgent =
      "Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36";
    expect(isMobile(userAgent)).toBe(true);
  });

  it("should return false for Android tablet user agent", () => {
    const userAgent =
      "Mozilla/5.0 (Linux; Android 10; SM-T865) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36";
    expect(isMobile(userAgent)).toBe(false);
  });

  it("should return false for desktop user agent", () => {
    const userAgent =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";
    expect(isMobile(userAgent)).toBe(false);
  });

  it("should return false for an empty user agent", () => {
    const userAgent = "";
    expect(isMobile(userAgent)).toBe(false);
  });
});
