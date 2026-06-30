import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, MessageCircle, Phone, MapPin } from "lucide-react"
import CTAButton from "./CTAButton"
import { CONTACT } from "@/config/constants"

// ─── Theme palettes ───────────────────────────────────────────────────────────
export type ContactTheme = "blue" | "pink" | "green"

interface ThemePalette {
  med: string
  dark: string
  soft: string
  ultra: string
  glow: string
}

const THEMES: Record<ContactTheme, ThemePalette> = {
  blue: {
    med:   "#0199C6",
    dark:  "#0070A5",
    soft:  "#F7FCFE",
    ultra: "#EEFBFF",
    glow:  "rgba(82,192,225,0.10)",
  },
  pink: {
    med:   "#E91E8C",
    dark:  "#C2185B",
    soft:  "#FFFBFD",
    ultra: "#FFF8FB",
    glow:  "rgba(244,114,182,0.10)",
  },
  green: {
    med:   "#10B981",
    dark:  "#059669",
    soft:  "#F0FDF9",
    ultra: "#ECFDF5",
    glow:  "rgba(52,211,153,0.10)",
  },
}

// ─── Contact item type ────────────────────────────────────────────────────────
interface ContactItem {
  icon: React.ElementType
  label: string
  val: string
  href: string
  accent?: string      // Tailwind class  (e.g. "text-emerald-500")
  accentColor?: string // hex — takes priority over accent class
}

function buildDefaultItems(palette: ThemePalette): ContactItem[] {
  return [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      val: CONTACT.phoneDisplay,
      href: CONTACT.whatsappUrl,
      accent: "text-emerald-500",
    },
    {
      icon: Phone,
      label: "Teléfono",
      val: CONTACT.centralPhoneDisplay,
      href: CONTACT.centralPhoneTel,
      accentColor: palette.med,
    },
    {
      icon: MapPin,
      label: "Sede",
      val: "Av. Angamos 2688, Surquillo",
      href: "https://maps.google.com/?q=Av.+Angamos+2688+Surquillo+Lima",
      accent: "text-slate-500",
    },
  ]
}

// ─── Row subcomponent (needs local hover state for dynamic palette colors) ─────
function ContactRow({
  item,
  palette,
  idx,
}: {
  item: ContactItem
  palette: ThemePalette
  idx: number
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: idx * 0.06 }}
      className="group flex items-center gap-4 rounded-2xl px-4 py-4 transition-all duration-300"
      style={{ background: hovered ? palette.soft : undefined }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={item.accentColor ? undefined : item.accent}
        style={item.accentColor ? { color: item.accentColor } : undefined}
      >
        <item.icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
      </span>

      <div className="min-w-0 flex-1">
        <span className="block text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-400">
          {item.label}
        </span>
        <span className="mt-0.5 block truncate text-[13.5px] font-medium text-slate-800">
          {item.val}
        </span>
      </div>

      <ArrowUpRight
        className="h-3.5 w-3.5 shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        style={{ color: hovered ? palette.med : "#cbd5e1" }}
      />
    </motion.a>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
interface ContactSidebarProps {
  title?: string
  titleAccent?: string
  eyebrow?: string
  contactItems?: ContactItem[]
  theme?: ContactTheme
}

export default function ContactSidebar({
  title = "¿Tienes dudas?",
  titleAccent = "Estamos aquí.",
  eyebrow = "Contacto",
  contactItems,
  theme = "blue",
}: ContactSidebarProps) {
  const palette = THEMES[theme]
  const items = contactItems ?? buildDefaultItems(palette)

  return (
    <aside className="overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
      {/* Header con gradiente */}
      <div
        className="relative overflow-hidden border-b border-slate-100 px-6 py-6"
        style={{
          background: `linear-gradient(135deg, #FFFFFF 0%, ${palette.soft} 60%, ${palette.ultra} 100%)`,
        }}
      >
        {/* Glow decorativo */}
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl"
          style={{ background: palette.glow }}
        />

        <div className="relative z-10">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.3em]"
            style={{ color: palette.med }}
          >
            {eyebrow}
          </p>
          <h3 className="mt-2 text-[20px] font-light leading-snug text-slate-900">
            {title}{" "}
            <span className="font-medium" style={{ color: palette.dark }}>
              {titleAccent}
            </span>
          </h3>
        </div>
      </div>

      {/* Items de contacto */}
      <div className="px-2 py-2">
        {items.map((item, idx) => (
          <ContactRow key={idx} item={item} palette={palette} idx={idx} />
        ))}
      </div>

      {/* CTA */}
      <div className="border-t border-slate-100 px-5 pb-5 pt-5">
        <CTAButton label="AGENDAR CITA" href={CONTACT.appointmentsUrl} baseBg={palette.med} hoverBg={palette.dark} fullWidth />
      </div>
    </aside>
  )
}
