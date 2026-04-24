    



    "use client";

// ─── Design Tokens ────────────────────────────────────────────────────────────
const tokens = {
  gap: {
    none: "0px",
    xs:   "clamp(0.25rem, 1vw, 0.5rem)",
    sm:   "clamp(0.5rem,  1.5vw, 0.75rem)",
    md:   "clamp(0.75rem, 2vw,   1.25rem)",
    lg:   "clamp(1rem,    2.5vw, 2rem)",
    xl:   "clamp(1.5rem,  3vw,   3rem)",
  },
  padding: {
    none:  "0",
    tight: "0 clamp(0.5rem, 2vw, 1.5rem)",
    base:  "0 clamp(1rem,   4vw, 3rem)",
    wide:  "0 clamp(2rem,   6vw, 6rem)",
  },
};

// ─── Grid ─────────────────────────────────────────────────────────────────────
/**
 * Responsive.Grid — তিনটা mode
 *
 * ┌─────────────────────────────────────────────────────────────┐
 * │ MODE 1: AUTO-FIT                                            │
 * │ cols prop নেই, min দাও                                      │
 * │ সব device এ automatically কাজ করে                           │
 * │                                                             │
 * │ <Responsive.Grid min="280px" gap="lg">                      │
 * │   <Card /> <Card /> <Card />                                │
 * │ </Responsive.Grid>                                          │
 * ├─────────────────────────────────────────────────────────────┤
 * │ MODE 2: BREAKPOINT COLS (সবচেয়ে professional)              │
 * │ cols={{ base: 1, sm: 2, md: 3, lg: 4 }}                    │
 * │ প্রতিটা breakpoint এ আলাদা column count                    │
 * │                                                             │
 * │ <Responsive.Grid cols={{ base: 1, md: 2, lg: 3 }}>         │
 * │   <Card /> <Card /> <Card />                                │
 * │ </Responsive.Grid>                                          │
 * ├─────────────────────────────────────────────────────────────┤
 * │ MODE 3: CUSTOM STRING (Figma pixel perfect)                 │
 * │ cols="443px_1fr" | cols="40%_60%" | cols="1fr_2fr"         │
 * │ underscore = space                                          │
 * │ mobile এ auto single column হয়                             │
 * │                                                             │
 * │ <Responsive.Grid cols="443px_1fr" gap="lg">                 │
 * │   <Sidebar /> <Content />                                   │
 * │ </Responsive.Grid>                                          │
 * └─────────────────────────────────────────────────────────────┘
 */
function Grid({
  as: Tag = "div",
  children,
  min = "260px",
  cols,
  gap = "md",
  padding = "none",
  align,
  className = "",
  style = {},
}) {

  // ── MODE 2: cols object ───────────────────────────────────────────────────
  if (cols && typeof cols === "object") {

    // Tailwind এর fixed class গুলো hardcode করতে হয়
    // dynamic string থেকে Tailwind class generate হয় না
    const map = {
      1:  "grid-cols-1",
      2:  "grid-cols-2",
      3:  "grid-cols-3",
      4:  "grid-cols-4",
      5:  "grid-cols-5",
      6:  "grid-cols-6",
      7:  "grid-cols-7",
      8:  "grid-cols-8",
      9:  "grid-cols-9",
      10: "grid-cols-10",
      11: "grid-cols-11",
      12: "grid-cols-12",
    };

    const classes = [
      cols.base          && map[cols.base],
      cols.sm            && `sm:${map[cols.sm]}`,
      cols.md            && `md:${map[cols.md]}`,
      cols.lg            && `lg:${map[cols.lg]}`,
      cols.xl            && `xl:${map[cols.xl]}`,
      cols["2xl"]        && `2xl:${map[cols["2xl"]]}`,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <Tag
        className={`grid w-full ${classes} ${className}`}
        style={{
          gap:        tokens.gap[gap]         ?? gap,
          padding:    tokens.padding[padding] ?? padding,
          alignItems: align,
          boxSizing:  "border-box",
          ...style,
        }}
      >
        {children}
      </Tag>
    );
  }

  // ── MODE 3: custom string ─────────────────────────────────────────────────
  if (cols && typeof cols === "string") {
    // "443px_1fr"  →  "443px 1fr"
    // "40%_60%"    →  "40% 60%"
    // "1fr_2fr_1fr" → "1fr 2fr 1fr"
    const templateColumns = cols.replaceAll("_", " ");

    return (
      <Tag
        className={`grid w-full grid-cols-1 md:[grid-template-columns:var(--gcols)] ${className}`}
        style={{
          "--gcols":  templateColumns,         // CSS variable দিয়ে pass
          gap:        tokens.gap[gap]         ?? gap,
          padding:    tokens.padding[padding] ?? padding,
          alignItems: align,
          boxSizing:  "border-box",
          ...style,
        }}
      >
        {children}
      </Tag>
    );
  }

  // ── MODE 1: auto-fit ──────────────────────────────────────────────────────
  // column কখনো min এর ছোট হবে না — জায়গা না হলে নিচে নামবে
  // সব device এ automatically কাজ করে, কোনো breakpoint লাগে না
  return (
    <Tag
      className={`grid w-full ${className}`}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(min(${min}, 100%), 1fr))`,
        gap:        tokens.gap[gap]         ?? gap,
        padding:    tokens.padding[padding] ?? padding,
        alignItems: align,
        boxSizing:  "border-box",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

// ─── Flex ──────────────────────────────────────────────────────────────────
/**
 * Responsive.Flex
 *
 * Horizontal wrapping flex — navbar, tags, button groups
 *
 * Props:
 *   wrap    — true (default) wraps | false single line
 *   align   — alignItems    (default: "center")
 *   justify — justifyContent (default: "flex-start")
 *
 * Example:
 *   // Tag cloud
 *   <Responsive.Flex as="ul" gap="sm" style={{ listStyle: "none" }}>
 *     <li>React</li>
 *     <li>Next.js</li>
 *   </Responsive.Flex>
 *
 *   // Footer nav — দুই পাশে
 *   <Responsive.Flex justify="space-between" align="center">
 *     <Logo />
 *     <Nav />
 *   </Responsive.Flex>
 */
function Flex({
  as: Tag = "div",
  children,
  gap = "md",
  padding = "none",
  wrap = true,
  align = "center",
  justify = "flex-start",
  className = "",
  style = {},
}) {
  return (
    <Tag
      className={`flex w-full ${wrap ? "flex-wrap" : "flex-nowrap"} ${className}`}
      style={{
        gap:            tokens.gap[gap]         ?? gap,
        padding:        tokens.padding[padding] ?? padding,
        alignItems:     align,
        justifyContent: justify,
        boxSizing:      "border-box",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

// ─── Stack ─────────────────────────────────────────────────────────────────
/**
 * Responsive.Stack
 *
 * Vertical column — form, sidebar, article content
 *
 * Props:
 *   align — alignItems (default: "stretch" — সব item full width)
 *
 * Example:
 *   // Form
 *   <Responsive.Stack as="form" gap="md">
 *     <input type="text" />
 *     <input type="email" />
 *     <button type="submit">Send</button>
 *   </Responsive.Stack>
 *
 *   // Page section heading
 *   <Responsive.Stack gap="xs">
 *     <h2>Title</h2>
 *     <p>Subtitle</p>
 *   </Responsive.Stack>
 */
function Stack({
  as: Tag = "div",
  children,
  gap = "md",
  padding = "none",
  align = "stretch",
  className = "",
  style = {},
}) {
  return (
    <Tag
      className={`flex flex-col w-full ${className}`}
      style={{
        gap:        tokens.gap[gap]         ?? gap,
        padding:    tokens.padding[padding] ?? padding,
        alignItems: align,
        boxSizing:  "border-box",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

// ─── Compound export ───────────────────────────────────────────────────────
const Responsive = { Grid, Flex, Stack };
export default Responsive;
export { Grid, Flex, Stack };