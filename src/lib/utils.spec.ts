import { cn } from "./utils";

describe("cn function", () => {
  it("should merge Tailwind CSS classes correctly", () => {
    const result = cn("bg-red-500", "text-white", "hover:bg-red-700");
    expect(result).toBe("bg-red-500 text-white hover:bg-red-700");
  });

  it("should handle conditional classes", () => {
    const result = cn("bg-red-500", false && "text-white", "hover:bg-red-700");
    expect(result).toBe("bg-red-500 hover:bg-red-700");
  });

  it("should merge class names with the same base but different modifiers", () => {
    const result = cn("bg-red-500", "bg-blue-500", "hover:bg-red-700");
    expect(result).toBe("bg-blue-500 hover:bg-red-700");
  });

  it("should remove duplicate class names", () => {
    const result = cn("bg-red-500", "bg-red-500", "hover:bg-red-700");
    expect(result).toBe("bg-red-500 hover:bg-red-700");
  });

  it("should handle undefined and null values gracefully", () => {
    const result = cn("bg-red-500", null, undefined, "hover:bg-red-700");
    expect(result).toBe("bg-red-500 hover:bg-red-700");
  });
});
