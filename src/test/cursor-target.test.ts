import { afterEach, describe, expect, it } from "vitest";

import { resolveCursorTarget } from "@/lib/cursor-target";

afterEach(() => {
  document.body.innerHTML = "";
});

describe("animated cursor targets", () => {
  it("locks onto the outermost card, never the pieces inside it", () => {
    document.body.innerHTML = `
      <div id="outer" class="surface rounded-panel">
        <div id="inner" class="glass rounded-tile"><button id="btn">Ok</button><h3 id="h">Título</h3></div>
      </div>`;
    for (const id of ["btn", "h", "inner"]) {
      expect(resolveCursorTarget(document.getElementById(id))?.element.id).toBe("outer");
    }
  });

  it("targets titles but not ordinary paragraphs", () => {
    document.body.innerHTML = `<section><h2 id="title">Título</h2><p id="para">Texto comum</p></section>`;
    expect(resolveCursorTarget(document.getElementById("title"))?.kind).toBe("heading");
    expect(resolveCursorTarget(document.getElementById("para"))).toBeNull();
  });

  it("never turns the top menu bar into one big target", () => {
    document.body.innerHTML = `<header><div class="glass"><a id="nav" href="/faq">FAQ</a><span id="gap">x</span></div></header>`;
    expect(resolveCursorTarget(document.getElementById("nav"))?.element.id).toBe("nav");
    expect(resolveCursorTarget(document.getElementById("gap"))).toBeNull();
  });
});
