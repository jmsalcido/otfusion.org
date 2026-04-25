interface SectionHeaderProps {
  label: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export const SectionHeader = ({ label, title, description, align = 'left' }: SectionHeaderProps) => {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  return (
    <div className={`flex flex-col ${alignment}`}>
      <span className="rule-accent" aria-hidden="true" />
      <p className="label">{label}</p>
      <h2 className="mt-3 max-w-3xl">{title}</h2>
      <p className="lead mt-4 max-w-3xl">{description}</p>
    </div>
  )
}
