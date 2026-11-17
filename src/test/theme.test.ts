import { describe, expect, it } from "vitest";

import { DEFAULT_ACCENT, DEFAULT_THEME, resolveTheme, themeInitScript } from "@/lib/site";

describe("site theme", () => {
  it("defaults to the dark theme", () => {
    expect(DEFAULT_THEME).toBe("escuro");
    expect(resolveTheme(null)).toBe("escuro");
  });

  it("keeps the visitor's saved choice", () => {
    expect(resolveTheme("claro")).toBe("claro");
    expect(resolveTheme("escuro")).toBe("escuro");
  });
});

describe("accent colors", () => {
  it("uses emerald as the fixed default", () => {
    expect(DEFAULT_ACCENT).toBe("esmeralda");
  });

  it("ignores previous palette choices while preserving the saved theme", () => {
    localStorage.setItem("el-accent", "ruby");
    localStorage.setItem("el-theme", "claro");
    new Function(themeInitScript)();
    expect(document.documentElement.getAttribute("data-accent")).toBe("esmeralda");
    expect(document.documentElement.getAttribute("data-theme")).toBe("claro");
    localStorage.clear();
  });
});
