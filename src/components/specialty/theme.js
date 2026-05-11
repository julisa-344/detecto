// Color themes for specialty pages.
// Each color is stored as space-separated RGB so it can be used inside
// rgb(var(--brand-x) / <alpha>) in Tailwind arbitrary values.

export const BLUE_THEME = {
  base: '82 192 225',     // #52C0E1
  med:  '1 153 198',      // #0199C6
  dark: '0 112 165',      // #0070A5
  bgSoftHex: '#F7FCFE',
  bgUltraHex: '#EEFBFF',
  pageGradient:
    'linear-gradient(180deg, #FFFFFF 0%, #F7FCFE 35%, #EEFBFF 70%, #E3F4FB 100%)',
  fadeHex: '#ecfafe',     // used by FortalezasClinica fade
}

export const PINK_THEME = {
  base: '244 114 182',    // #F472B6
  med:  '233 30 140',     // #E91E8C
  dark: '194 24 91',      // #C2185B
  bgSoftHex: '#FFF5FA',
  bgUltraHex: '#FFF0F6',
  pageGradient:
    'linear-gradient(180deg, #FFFFFF 0%, #FFF5FA 35%, #FFF0F6 70%, #FBE2EE 100%)',
  fadeHex: '#fff1f7',
}

export const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}
