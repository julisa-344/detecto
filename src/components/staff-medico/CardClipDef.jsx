// SVG clipPath compartido para el recorte de las cards de doctores.
// Path de assets/shadow.svg (616x868) escalado a objectBoundingBox (0-1).
const CARD_CLIP_PATH =
  'M0 32C0 14.3269 14.3269 0 32 0H584C601.673 0 616 14.3269 616 32V694C616 711.673 601.673 726 584 726H538C502.654 726 474 754.654 474 790V836C474 853.673 459.673 868 442 868H32C14.3269 868 0 853.673 0 836V32Z'

export const CARD_CLIP_ID = 'staff-card-clip'

export default function CardClipDef() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <clipPath id={CARD_CLIP_ID} clipPathUnits="objectBoundingBox">
          <path d={CARD_CLIP_PATH} transform="scale(0.00162338 0.00115207)" />
        </clipPath>
      </defs>
    </svg>
  )
}
