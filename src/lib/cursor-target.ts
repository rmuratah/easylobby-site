// Decides which element the animated cursor locks onto.
// Rules: inside a card, always the outermost card (never its inner pieces);
// outside cards, buttons/links and titles (h1–h3) — never plain paragraphs.

export const CARD_SELECTOR = ".surface, .glass, .rounded-panel, [data-cursor-card]";
export const INTERACTIVE_SELECTOR =
  'a[href], button, [role="tab"], [role="button"], summary, input, select, textarea, label[for]';
export const HEADING_SELECTOR = "h1, h2, h3";
const IGNORE_SELECTOR = "[data-cursor-ignore]";
// The header turns into a glass bar on scroll; it should never become one giant target.
const NO_CARD_ZONE = "header";

export type CursorTarget = {
  element: Element;
  kind: "card" | "interactive" | "heading" | "custom";
};

export function resolveCursorTarget(
  node: Element | null,
  customSelector?: string,
): CursorTarget | null {
  if (!node || node.closest(IGNORE_SELECTOR)) return null;

  if (!node.closest(NO_CARD_ZONE)) {
    let outermost: Element | null = null;
    for (let el: Element | null = node; el && el !== document.body; el = el.parentElement) {
      if (el.matches(CARD_SELECTOR) && !el.matches(IGNORE_SELECTOR)) outermost = el;
    }
    if (outermost) return { element: outermost, kind: "card" };
  }

  if (customSelector) {
    const custom = node.closest(customSelector);
    if (custom) return { element: custom, kind: "custom" };
  }

  const interactive = node.closest(INTERACTIVE_SELECTOR);
  if (interactive) return { element: interactive, kind: "interactive" };

  const heading = node.closest(HEADING_SELECTOR);
  if (heading) return { element: heading, kind: "heading" };

  return null;
}

/** Headings are full-width blocks; hug the actual text instead. */
export function cursorTargetRect(target: CursorTarget): DOMRect {
  if (target.kind === "heading") {
    const range = document.createRange();
    range.selectNodeContents(target.element);
    const r = range.getBoundingClientRect();
    if (r.width > 0 && r.height > 0) return r;
  }
  return target.element.getBoundingClientRect();
}
