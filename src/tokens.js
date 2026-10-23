/** Design tokens aligned with Flora light palette */
export const tokens = {
  fg: {
    default: '#2f3130',
    subtle: '#646864',
    primary: '#406cc4',
    /** Flora fg/danger — red.700 */
    danger: '#c63f46',
    onEmphasis: '#ffffff',
  },
  bg: {
    page: '#ffffff',
    surface: '#ffffff',
  },
  border: {
    subtle: '#eae9e8', // grey.200
    /** Flora border/input — grey.400 */
    input: '#b7b7b3',
    /** Flora border/dangerEmphasis — red.700 */
    dangerEmphasis: '#c63f46',
  },
  space: {
    cardPadding: 40,
    /** CSS padding so Inspect (outer edge → content, incl. 1px border) reads 32 / 40 */
    codePadTop: 31,
    codePadX: 39,
    codePadBottom: 39,
    consentPadTop: 31,
    consentPadX: 39,
    consentPadBottom: 31,
    section: 24,
    stack: 16,
    tight: 8,
    buttonGap: 12,
  },
  cardWidth: 380,
  consentCardWidth: 755,
  type: {
    /** 14/20 medium — all non-header / non-button body copy */
    body: {
      size: 14,
      lineHeight: '20px',
      weight: 500,
    },
    /** Permission titles (Create… / View…) */
    bodyBold: {
      size: 14,
      lineHeight: '20px',
      weight: 700,
    },
    appName: {
      size: 16,
      lineHeight: '24px',
      weight: 600,
    },
    title: {
      size: 22,
      lineHeight: '28px',
      weight: 700,
    },
  },
}
