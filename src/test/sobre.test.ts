import { describe, expect, it } from "vitest";

import { TEAM } from "@/content/sobre";
import { SITE } from "@/lib/site";

describe("Sobre page links", () => {
  it("points the project button to the easylobby repository", () => {
    expect(SITE.githubUrl).toBe("https://github.com/rmuratah/easylobby");
  });

  it("links each person to their own GitHub", () => {
    const byName = Object.fromEntries(TEAM.map((p) => [p.name, p.github]));
    expect(byName).toEqual({
      Murata: "https://github.com/rmuratah",
      Ricco: "https://github.com/Victor-Ricco",
    });
  });

  it("keeps suggestion and bug links empty until real destinations are confirmed", () => {
    expect(SITE.suggestionUrl).toBe("");
    expect(SITE.bugReportUrl).toBe("");
  });
});
