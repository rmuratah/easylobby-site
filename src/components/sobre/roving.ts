/** Arrow/Home/End keyboard support for a horizontal or vertical tab list. */
export function rovingKey(
  e: React.KeyboardEvent<HTMLElement>,
  index: number,
  count: number,
  select: (i: number) => void,
) {
  const keys: Record<string, number> = {
    ArrowRight: index + 1,
    ArrowDown: index + 1,
    ArrowLeft: index - 1,
    ArrowUp: index - 1,
    Home: 0,
    End: count - 1,
  };
  if (!(e.key in keys)) return;
  e.preventDefault();
  const next = (keys[e.key]! + count) % count;
  select(next);
  const list =
    e.currentTarget.parentElement?.closest('[role="tablist"]') ?? e.currentTarget.parentElement;
  list?.querySelectorAll<HTMLElement>('[role="tab"]')[next]?.focus();
}
