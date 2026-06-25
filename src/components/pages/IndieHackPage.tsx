import { useEffect, useMemo, useState } from 'react'
import { Header } from '../layout/Header'
import { Footer } from '../layout/Footer'
import { useLocale } from '../../i18n/LocaleContext'
import { applySeo } from '../../lib/seo'

const PROJECTS_ENDPOINT = 'https://backend.otfusion.org/webhook/otf/projects'
const SEO_IMAGE_URL =
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80&sat=-100'

type ProjectRow = {
  UUID?: unknown
  'Project Name'?: unknown
  Description?: unknown
  MMR?: unknown
  'One Time Payments'?: unknown
  'Creation Date'?: unknown
  Alive?: unknown
}

interface Project {
  id: string
  name: string
  description: string
  monthlyRecurringRevenue: number
  oneTimePayments: number
  creationDate: string | null
  isActive: boolean
}

type FetchStatus = 'loading' | 'success' | 'error'

const toText = (value: unknown, fallback: string) => {
  if (typeof value !== 'string') return fallback
  const trimmed = value.trim()
  return trimmed || fallback
}

const toNumber = (value: unknown) => {
  if (typeof value === 'number') return Number.isFinite(value) ? value : 0
  if (typeof value === 'string') {
    const parsed = Number(value.replace(/[$,]/g, '').trim())
    return Number.isFinite(parsed) ? parsed : 0
  }
  return 0
}

const normalizeProject = (row: ProjectRow, index: number, descriptionFallback: string): Project => {
  return {
    id: toText(row.UUID, `project-${index}`),
    name: toText(row['Project Name'], 'Untitled project'),
    description: toText(row.Description, descriptionFallback),
    monthlyRecurringRevenue: toNumber(row.MMR),
    oneTimePayments: toNumber(row['One Time Payments']),
    creationDate: typeof row['Creation Date'] === 'string' ? row['Creation Date'] : null,
    isActive: row.Alive === true
  }
}

const isValidDate = (value: string | null) => {
  if (!value) return false
  return !Number.isNaN(new Date(value).getTime())
}

const buildMoneyFormatter = (locale: string) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  })

interface SummaryCardProps {
  title: string
  label: string
  count: number
  monthlyRecurringRevenue: number
  oneTimePayments: number
  copy: {
    projects: string
    mmr: string
    oneTime: string
  }
  formatMoney: (value: number) => string
}

const SummaryCard = ({
  title,
  label,
  count,
  monthlyRecurringRevenue,
  oneTimePayments,
  copy,
  formatMoney
}: SummaryCardProps) => (
  <article className="card px-5 py-6 sm:px-6">
    <p className="label">{label}</p>
    <div className="mt-4 flex items-end justify-between gap-4">
      <h2 className="text-[clamp(2.5rem,8vw,4.5rem)] leading-none">{count}</h2>
      <p className="pb-2 text-sm font-medium text-[var(--accent-sand)]">{copy.projects}</p>
    </div>
    <h3 className="mt-5 text-xl">{title}</h3>
    <dl className="mt-5 grid grid-cols-2 gap-3">
      <div className="rounded-md border border-[var(--border-subtle)] bg-[rgba(6,60,107,0.24)] p-3">
        <dt className="label">{copy.mmr}</dt>
        <dd className="mt-2 font-mono text-lg text-[var(--text-primary)]">
          {formatMoney(monthlyRecurringRevenue)}
        </dd>
      </div>
      <div className="rounded-md border border-[var(--border-subtle)] bg-[rgba(6,60,107,0.24)] p-3">
        <dt className="label">{copy.oneTime}</dt>
        <dd className="mt-2 font-mono text-lg text-[var(--text-primary)]">
          {formatMoney(oneTimePayments)}
        </dd>
      </div>
    </dl>
  </article>
)

interface ProjectCardProps {
  project: Project
  copy: {
    active: string
    inactive: string
    created: string
    mmr: string
    oneTime: string
    dateUnavailable: string
  }
  formatMoney: (value: number) => string
  formatDate: (value: string | null) => string
}

const ProjectCard = ({ project, copy, formatMoney, formatDate }: ProjectCardProps) => (
  <article className="card flex h-full flex-col px-5 py-5">
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="label">{copy.created}</p>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">{formatDate(project.creationDate)}</p>
      </div>
      <span
        className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
          project.isActive
            ? 'border-[rgba(242,180,140,0.44)] bg-[rgba(240,122,32,0.14)] text-[var(--accent-sand)]'
            : 'border-[var(--border-subtle)] bg-[rgba(6,60,107,0.3)] text-[var(--text-muted)]'
        }`}
      >
        {project.isActive ? copy.active : copy.inactive}
      </span>
    </div>
    <h3 className="mt-5 text-2xl">{project.name}</h3>
    <p className="mt-3 flex-1 text-sm leading-7">{project.description}</p>
    <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-[var(--border-subtle)] pt-4">
      <div>
        <dt className="label">{copy.mmr}</dt>
        <dd className="mt-1 font-mono text-base text-[var(--text-primary)]">
          {formatMoney(project.monthlyRecurringRevenue)}
        </dd>
      </div>
      <div>
        <dt className="label">{copy.oneTime}</dt>
        <dd className="mt-1 font-mono text-base text-[var(--text-primary)]">
          {formatMoney(project.oneTimePayments)}
        </dd>
      </div>
    </dl>
  </article>
)

export const IndieHackPage = () => {
  const { t, locale } = useLocale()
  const [projects, setProjects] = useState<Project[]>([])
  const [status, setStatus] = useState<FetchStatus>('loading')

  useEffect(() => {
    applySeo({
      title: 'Indie Hack | José M. Salcido',
      description: 'A live counter of active and inactive indie projects from OTFusion.',
      url: 'https://www.otfusion.org/indie-hack',
      image: SEO_IMAGE_URL,
      type: 'website',
      lang: locale
    })
  }, [locale])

  useEffect(() => {
    const controller = new AbortController()

    const loadProjects = async () => {
      setStatus('loading')
      try {
        const response = await fetch(PROJECTS_ENDPOINT, {
          signal: controller.signal,
          headers: {
            Accept: 'application/json'
          }
        })

        if (!response.ok) {
          throw new Error(`Projects request failed with ${response.status}`)
        }

        const payload: unknown = await response.json()
        if (!Array.isArray(payload)) {
          throw new Error('Projects response was not an array')
        }

        setProjects(
          payload.map((row, index) =>
            normalizeProject(row as ProjectRow, index, t.indieHack.descriptionFallback)
          )
        )
        setStatus('success')
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return
        console.error(error)
        setStatus('error')
      }
    }

    void loadProjects()

    return () => {
      controller.abort()
    }
  }, [t.indieHack.descriptionFallback])

  const moneyFormatter = useMemo(() => buildMoneyFormatter(locale), [locale])
  const dateFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat(locale, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
    [locale]
  )

  const formatMoney = (value: number) => moneyFormatter.format(value)
  const formatDate = (value: string | null) => {
    if (!isValidDate(value)) return t.indieHack.dateUnavailable
    return dateFormatter.format(new Date(value as string))
  }

  const activeProjects = projects.filter((project) => project.isActive)
  const inactiveProjects = projects.filter((project) => !project.isActive)
  const summarize = (items: Project[]) =>
    items.reduce(
      (summary, project) => ({
        count: summary.count + 1,
        monthlyRecurringRevenue: summary.monthlyRecurringRevenue + project.monthlyRecurringRevenue,
        oneTimePayments: summary.oneTimePayments + project.oneTimePayments
      }),
      { count: 0, monthlyRecurringRevenue: 0, oneTimePayments: 0 }
    )
  const activeSummary = summarize(activeProjects)
  const inactiveSummary = summarize(inactiveProjects)

  const renderProjectGroup = (title: string, items: Project[]) => (
    <section className="mt-12">
      <div className="flex items-end justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
        <div>
          <p className="label">{t.indieHack.projectGroupLabel}</p>
          <h2 className="mt-2 text-3xl">{title}</h2>
        </div>
        <p className="font-mono text-sm text-[var(--text-secondary)]">
          {items.length} {t.indieHack.summary.projects}
        </p>
      </div>
      {items.length > 0 ? (
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {items.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              copy={t.indieHack}
              formatMoney={formatMoney}
              formatDate={formatDate}
            />
          ))}
        </div>
      ) : (
        <div className="card mt-6 px-5 py-6">
          <p>{t.indieHack.emptyGroup}</p>
        </div>
      )}
    </section>
  )

  return (
    <div className="page-shell min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <span className="rule-accent" aria-hidden="true" />
        <p className="label">{t.indieHack.label}</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h1>{t.indieHack.title}</h1>
          <p className="lead">{t.indieHack.description}</p>
        </div>

        {status === 'loading' && (
          <div className="card mt-10 px-5 py-8">
            <p>{t.indieHack.loading}</p>
          </div>
        )}

        {status === 'error' && (
          <div className="card mt-10 border-[rgba(240,46,43,0.42)] px-5 py-8">
            <p className="text-[var(--accent-sand)]">{t.indieHack.error}</p>
          </div>
        )}

        {status === 'success' && projects.length === 0 && (
          <div className="card mt-10 px-5 py-8">
            <p>{t.indieHack.empty}</p>
          </div>
        )}

        {status === 'success' && projects.length > 0 && (
          <>
            <section className="mt-10 grid gap-5 lg:grid-cols-2">
              <SummaryCard
                title={t.indieHack.activeProjects}
                label={t.indieHack.summaryLabel}
                count={activeSummary.count}
                monthlyRecurringRevenue={activeSummary.monthlyRecurringRevenue}
                oneTimePayments={activeSummary.oneTimePayments}
                copy={t.indieHack.summary}
                formatMoney={formatMoney}
              />
              <SummaryCard
                title={t.indieHack.inactiveProjects}
                label={t.indieHack.summaryLabel}
                count={inactiveSummary.count}
                monthlyRecurringRevenue={inactiveSummary.monthlyRecurringRevenue}
                oneTimePayments={inactiveSummary.oneTimePayments}
                copy={t.indieHack.summary}
                formatMoney={formatMoney}
              />
            </section>

            {renderProjectGroup(t.indieHack.activeProjects, activeProjects)}
            {renderProjectGroup(t.indieHack.inactiveProjects, inactiveProjects)}
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
