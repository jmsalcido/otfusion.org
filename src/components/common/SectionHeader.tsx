interface SectionHeaderProps {
  label: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export const SectionHeader = ({ label, title, description, align = 'left' }: SectionHeaderProps) => {
  const alignment = align === 'center' ? 'text-center' : 'text-left'
  return (
    <div className={`space-y-3 ${alignment}`}>
      <p className="text-xs uppercase tracking-[0.3em] text-[#8b8f99]">{label}</p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0b1f3a]">{title}</h2>
      <p className="text-base md:text-lg text-[#4a4f57] max-w-3xl leading-relaxed">{description}</p>
    </div>
  )
}
