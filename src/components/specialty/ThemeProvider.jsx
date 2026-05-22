export default function ThemeProvider({ theme, children, className = '', style = {} }) {
  return (
    <div
      className={`overflow-x-clip ${className}`}
      style={{
        '--brand-base': theme.base,
        '--brand-med':  theme.med,
        '--brand-dark': theme.dark,
        '--brand-bg-soft':  theme.bgSoftHex,
        '--brand-bg-ultra': theme.bgUltraHex,
        '--brand-fade':     theme.fadeHex,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
