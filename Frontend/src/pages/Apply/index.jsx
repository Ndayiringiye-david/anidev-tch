import { useState } from 'react'
import { useLocale } from '../../i18n/LocaleContext'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Code2,
  Mail,
  MapPin,
  UserRound,
} from 'lucide-react'
import heroImage from '../../assets/HerosectionImage.png'

const steps = ['Select Cohort', 'Choose Stack', 'Personal Info', 'Complete']

const cohorts = [
  {
    id: 'next',
    eyebrow: 'Recommended',
    title: 'Next available cohort',
    description: 'Be considered for the next intake that matches your selected learning path.',
  },
  {
    id: 'flexible',
    eyebrow: 'Stay flexible',
    title: 'Future cohort',
    description: 'Keep my application in mind for an upcoming intake.',
  },
]

const stacks = [
  { id: 'frontend', title: 'Frontend Development', detail: 'Build modern web interfaces' },
  { id: 'backend', title: 'Backend Development', detail: 'Power applications and services' },
  { id: 'fullstack', title: 'Full-Stack Development', detail: 'Work across the whole product' },
  { id: 'data-ai', title: 'Data & AI', detail: 'Turn data into useful insights' },
  { id: 'cloud', title: 'Cloud & DevOps', detail: 'Build and operate cloud systems' },
  { id: 'ui-ux', title: 'UI/UX Design', detail: 'Create thoughtful digital experiences' },
]

const initialForm = {
  cohort: '',
  stack: '',
  fullName: '',
  email: '',
  phone: '',
  location: '',
  stackReason: '',
  experienceRating: '',
  linkedIn: '',
  github: '',
  portfolio: '',
  cvFile: null,
  educationLevel: '',
  educationStatus: '',
  educationInstitution: '',
  educationField: '',
  educationYear: '',
  relevantExperience: '',
}

function getApplicationMailto(form, t) {
  const subject = `${t('Application')}: ${form.fullName} - ${t(stacks.find(({ id }) => id === form.stack)?.title)}`
  const body = [
    t('APPLICATION'),
    '',
    `${t('Name')}: ${form.fullName}`,
    `${t('Email')}: ${form.email}`,
    `${t('Phone')}: ${form.phone}`,
    `${t('Location')}: ${form.location}`,
    `${t('Cohort preference')}: ${t(cohorts.find(({ id }) => id === form.cohort)?.title)}`,
    `${t('Learning path')}: ${t(stacks.find(({ id }) => id === form.stack)?.title)}`,
    `${t('Experience rating (1-5)')}: ${form.experienceRating}`,
    '',
    `${t('Why I chose this learning path')}:`,
    form.stackReason,
    '',
    t('Professional profiles'),
    `LinkedIn: ${form.linkedIn}`,
    `${t('GitHub username')}: ${form.github || t('Not provided')}`,
    `${t('Portfolio')}: ${form.portfolio}`,
    `${t('CV to attach')}: ${form.cvFile?.name}`,
    '',
    t('Education background'),
    `${t('Level')}: ${t(form.educationLevel)}`,
    `${t('Status')}: ${t(form.educationStatus)}`,
    `${t('Institution')}: ${form.educationInstitution}`,
    `${t('Field of study')}: ${form.educationField}`,
    `${t('Graduation / expected graduation year')}: ${form.educationYear || t('Not provided')}`,
    '',
    `${t('Relevant skills, projects, and experience')}:`,
    form.relevantExperience,
    '',
    t('Please attach the CV file named above before sending this email.'),
  ].join('\n')

  return `mailto:Info@anidev.africa?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function StepIndicator({ currentStep, t }) {
  return (
    <ol aria-label={t('Application progress')} className="flex items-start">
      {steps.map((step, index) => {
        const complete = index < currentStep
        const active = index === currentStep

        return (
          <li key={step} className="flex min-w-0 flex-1 items-start last:flex-none">
            <div className="flex min-w-0 flex-col items-center">
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition-colors ${
                  complete
                    ? 'border-blue-400 bg-blue-400 text-slate-950'
                    : active
                      ? 'border-blue-600 bg-white text-blue-700 ring-4 ring-blue-100'
                      : 'border-slate-200 bg-white text-slate-400'
                }`}
                aria-current={active ? 'step' : undefined}
              >
                {complete ? <Check className="h-4 w-4" aria-hidden="true" /> : index + 1}
              </span>
              <span
                className={`mt-2 hidden text-center text-xs font-medium sm:block ${
                  active || complete ? 'text-slate-800' : 'text-slate-400'
                }`}
              >
                {t(step)}
              </span>
            </div>
            {index < steps.length - 1 && (
              <span
                className={`mx-2 mt-4 h-px flex-1 sm:mx-3 ${
                  complete ? 'bg-blue-600' : 'bg-slate-200'
                }`}
                aria-hidden="true"
              />
            )}
          </li>
        )
      })}
    </ol>
  )
}

export default function ApplyPage() {
  const { t } = useLocale()
  const [step, setStep] = useState(0)
  const [form, setForm] = useState(initialForm)
  const [cvError, setCvError] = useState('')

  const updateForm = (event) => {
    const { name, value, files } = event.target

    if (name === 'cvFile') {
      const file = files?.[0] || null
      const hasSupportedType = file && /\.(pdf|doc|docx)$/i.test(file.name)
      const isWithinSizeLimit = file && file.size <= 10 * 1024 * 1024

      if (file && !hasSupportedType) {
        setCvError('Choose a PDF, DOC, or DOCX file.')
        setForm((current) => ({ ...current, cvFile: null }))
        return
      }

      if (file && !isWithinSizeLimit) {
        setCvError('Your CV must be 10 MB or smaller.')
        setForm((current) => ({ ...current, cvFile: null }))
        return
      }

      setCvError('')
      setForm((current) => ({ ...current, cvFile: file }))
      return
    }

    setForm((current) => ({ ...current, [name]: value }))
  }

  const canContinue =
    (step === 0 && Boolean(form.cohort)) ||
    (step === 1 && Boolean(form.stack)) ||
    (step === 2 &&
      Boolean(form.fullName.trim()) &&
      Boolean(form.email.trim()) &&
      Boolean(form.phone.trim()) &&
      Boolean(form.location.trim()) &&
      Boolean(form.stackReason.trim()) &&
      Boolean(form.experienceRating) &&
      Boolean(form.linkedIn.trim()) &&
      Boolean(form.portfolio.trim()) &&
      Boolean(form.cvFile) &&
      !cvError &&
      Boolean(form.educationLevel) &&
      Boolean(form.educationStatus) &&
      Boolean(form.educationInstitution.trim()) &&
      Boolean(form.educationField.trim()) &&
      Boolean(form.educationYear) &&
      Boolean(form.relevantExperience.trim()))

  const submitApplication = (event) => {
    event.preventDefault()
    window.location.href = getApplicationMailto(form, t)
    setStep(3)
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="group relative flex min-h-[300px] items-center overflow-hidden bg-slate-950 pb-20 pt-16 sm:min-h-[340px] sm:pb-24">
        <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55 transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-blue-950/55 to-slate-950/45" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_5%,rgba(59,130,246,0.36),transparent_60%)]" />
        <div className="pointer-events-none absolute -right-12 top-1/2 hidden h-[25rem] w-[25rem] -translate-y-1/2 items-center justify-center lg:flex">
          <div className="absolute h-full w-full animate-[spin_48s_linear_infinite] rounded-full border border-blue-200/20">
            <span className="absolute left-[18%] top-[12%] h-2.5 w-2.5 rounded-full bg-blue-200 shadow-[0_0_18px_rgba(147,197,253,0.9)]" />
            <span className="absolute bottom-[16%] right-[8%] h-2 w-2 rounded-full bg-blue-200 shadow-[0_0_16px_rgba(147,197,253,0.9)]" />
          </div>
          <div className="absolute h-[18rem] w-[18rem] animate-[spin_36s_linear_infinite_reverse] rounded-full border border-blue-100/20">
            <span className="absolute right-[10%] top-[28%] h-3 w-3 rounded-full bg-blue-300/90 shadow-[0_0_20px_rgba(96,165,250,0.9)]" />
          </div>
          <div className="absolute h-32 w-32 rounded-full bg-blue-400/10 blur-2xl transition-colors duration-500 group-hover:bg-blue-300/25" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {t('Cohort Application')}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              {t('Please complete the form below to register for the cohort.')}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto -mt-7 grid max-w-7xl items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/[0.06] sm:p-8 lg:p-10">
            <StepIndicator currentStep={step} t={t} />

            {step < 3 ? (
              <form className="mt-9" onSubmit={step === 2 ? submitApplication : (event) => {
                event.preventDefault()
                if (canContinue) setStep((current) => current + 1)
              }}>
                {step === 0 && (
                  <div>
                    <p className="text-sm font-semibold text-blue-700">{t('STEP 1 OF 3')}</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                      {t('Select your cohort')}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {t("Choose when you would like to join. We'll follow up with details about upcoming intake dates.")}
                    </p>
                    <div className="mt-7 grid gap-4 sm:grid-cols-2">
                      {cohorts.map(({ id, eyebrow, title, description }) => (
                        <label
                          key={id}
                          className={`relative flex cursor-pointer flex-col rounded-2xl border p-5 transition hover:border-blue-300 hover:bg-blue-50/40 ${
                            form.cohort === id
                              ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-100'
                              : 'border-slate-200'
                          }`}
                        >
                          <input
                            type="radio"
                            name="cohort"
                            value={id}
                            checked={form.cohort === id}
                            onChange={updateForm}
                            className="sr-only"
                          />
                          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                            {t(eyebrow)}
                          </span>
                          <span className="mt-3 text-base font-semibold text-slate-900">{t(title)}</span>
                          <span className="mt-2 text-sm leading-6 text-slate-600">{t(description)}</span>
                          <span
                            className={`absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full border ${
                              form.cohort === id
                                ? 'border-blue-400 bg-blue-400 text-slate-950'
                                : 'border-slate-300 text-transparent'
                            }`}
                          >
                            <Check className="h-3 w-3" aria-hidden="true" />
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div>
                    <p className="text-sm font-semibold text-blue-700">{t('STEP 2 OF 3')}</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                      {t('Choose your stack')}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {t("Select the area you're most excited to learn. Choose one to help us understand your interests.")}
                    </p>
                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {stacks.map(({ id, title, detail }) => (
                        <label
                          key={id}
                          className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition hover:border-blue-300 hover:bg-blue-50/40 ${
                            form.stack === id
                              ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-100'
                              : 'border-slate-200'
                          }`}
                        >
                          <input
                            type="radio"
                            name="stack"
                            value={id}
                            checked={form.stack === id}
                            onChange={updateForm}
                            className="sr-only"
                          />
                          <span
                            className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                              form.stack === id
                                ? 'bg-blue-400 text-slate-950'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            <Code2 className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <span className="flex-1">
                            <span className="block text-sm font-semibold text-slate-900">{t(title)}</span>
                            <span className="mt-1 block text-xs leading-5 text-slate-600">{t(detail)}</span>
                          </span>
                          <span
                            className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                              form.stack === id
                                ? 'border-blue-400 bg-blue-400 text-slate-950'
                                : 'border-slate-300 text-transparent'
                            }`}
                          >
                            <Check className="h-3 w-3" aria-hidden="true" />
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <p className="text-sm font-semibold text-blue-700">{t('STEP 3 OF 3')}</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                      {t('A little about you')}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {t('Add your contact details, education, experience, and profile links so we can get to know you and your goals.')}
                    </p>
                    <div className="mt-8 border-b border-slate-100 pb-7">
                      <h3 className="text-base font-semibold text-slate-900">{t('Your interest and experience')}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {t('Tell us why you chose this stack and how familiar you are with it.')}
                      </p>
                      <div className="mt-5 grid gap-5">
                        <div>
                          <label htmlFor="stackReason" className="mb-2 block text-sm font-medium text-slate-700">
                            {t('Why did you choose this learning path?')} <span className="text-rose-600">*</span>
                          </label>
                          <textarea
                            id="stackReason"
                            name="stackReason"
                            required
                            minLength={20}
                            rows={3}
                            value={form.stackReason}
                            onChange={updateForm}
                            placeholder={t('What interests you about this stack, and what would you like to build?')}
                            className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                          />
                        </div>
                        <fieldset>
                          <legend className="text-sm font-medium text-slate-700">
                            {t('Rate your current experience with this stack')} <span className="text-rose-600">*</span>
                          </legend>
                          <p className="mt-1 text-xs text-slate-500">
                            {t('1 means new to it; 5 means highly experienced.')}
                          </p>
                          <div className="mt-3 grid grid-cols-5 gap-2 sm:max-w-sm">
                            {[1, 2, 3, 4, 5].map((rating) => (
                              <label
                                key={rating}
                                className={`flex cursor-pointer flex-col items-center gap-1 rounded-xl border px-2 py-3 text-sm transition hover:border-blue-300 ${
                                  form.experienceRating === String(rating)
                                    ? 'border-blue-600 bg-blue-50 text-blue-700 ring-2 ring-blue-100'
                                    : 'border-slate-200 text-slate-600'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="experienceRating"
                                  value={rating}
                                  checked={form.experienceRating === String(rating)}
                                  onChange={updateForm}
                                  required
                                  className="sr-only"
                                />
                                <span className="font-semibold">{rating}</span>
                                {rating === 1 && <span className="text-[10px]">{t('New')}</span>}
                                {rating === 5 && <span className="text-[10px]">{t('Expert')}</span>}
                                {rating > 1 && rating < 5 && <span className="text-[10px]">&nbsp;</span>}
                              </label>
                            ))}
                          </div>
                        </fieldset>
                      </div>
                    </div>

                    <div className="mt-7 border-b border-slate-100 pb-7">
                      <h3 className="text-base font-semibold text-slate-900">{t('Personal information')}</h3>
                      <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-700">
                          {t('Full name')} <span className="text-rose-600">*</span>
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          autoComplete="name"
                          required
                          value={form.fullName}
                          onChange={updateForm}
                          placeholder={t('Your full name')}
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                          {t('Email address')} <span className="text-rose-600">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          value={form.email}
                          onChange={updateForm}
                          placeholder={t('you@example.com')}
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
                          {t('Phone number')} <span className="text-rose-600">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          required
                          value={form.phone}
                          onChange={updateForm}
                          placeholder={t('+250 7XX XXX XXX')}
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="location" className="mb-2 block text-sm font-medium text-slate-700">
                          {t('City and country')} <span className="text-rose-600">*</span>
                        </label>
                        <input
                          id="location"
                          name="location"
                          type="text"
                          autoComplete="country-name"
                          required
                          value={form.location}
                          onChange={updateForm}
                          placeholder={t('e.g. Kigali, Rwanda')}
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        />
                      </div>
                      </div>
                    </div>

                    <div className="mt-7 border-b border-slate-100 pb-7">
                      <h3 className="text-base font-semibold text-slate-900">{t('Education background')}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {t('Share your highest or current level of education.')}
                      </p>
                      <div className="mt-5 grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="educationLevel" className="mb-2 block text-sm font-medium text-slate-700">
                            {t('Level of education')} <span className="text-rose-600">*</span>
                          </label>
                          <select
                            id="educationLevel"
                            name="educationLevel"
                            required
                            value={form.educationLevel}
                            onChange={updateForm}
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                          >
                            <option value="">{t('Select your level')}</option>
                            <option value="Secondary">{t('Secondary school')}</option>
                            <option value="TVET / vocational">{t('TVET / vocational')}</option>
                            <option value="Diploma">{t('Diploma')}</option>
                            <option value="Bachelor's degree">{t("Bachelor's degree")}</option>
                            <option value="Master's degree">{t("Master's degree")}</option>
                            <option value="Doctorate">{t('Doctorate')}</option>
                            <option value="Other">{t('Other')}</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="educationStatus" className="mb-2 block text-sm font-medium text-slate-700">
                            {t('Education status')} <span className="text-rose-600">*</span>
                          </label>
                          <select
                            id="educationStatus"
                            name="educationStatus"
                            required
                            value={form.educationStatus}
                            onChange={updateForm}
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                          >
                            <option value="">{t('Select status')}</option>
                            <option value="Completed">{t('Completed')}</option>
                            <option value="In progress">{t('In progress')}</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="educationInstitution" className="mb-2 block text-sm font-medium text-slate-700">
                            {t('School or institution')} <span className="text-rose-600">*</span>
                          </label>
                          <input
                            id="educationInstitution"
                            name="educationInstitution"
                            type="text"
                            required
                            value={form.educationInstitution}
                            onChange={updateForm}
                            placeholder={t('Institution name')}
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                          />
                        </div>
                        <div>
                          <label htmlFor="educationField" className="mb-2 block text-sm font-medium text-slate-700">
                            {t('Field of study')} <span className="text-rose-600">*</span>
                          </label>
                          <input
                            id="educationField"
                            name="educationField"
                            type="text"
                            required
                            value={form.educationField}
                            onChange={updateForm}
                            placeholder={t('e.g. Information Technology')}
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                          />
                        </div>
                        <div>
                          <label htmlFor="educationYear" className="mb-2 block text-sm font-medium text-slate-700">
                            {t('Graduation / expected year')} <span className="text-rose-600">*</span>
                          </label>
                          <input
                            id="educationYear"
                            name="educationYear"
                            type="number"
                            required
                            min="1970"
                            max="2100"
                            value={form.educationYear}
                            onChange={updateForm}
                            placeholder={t('e.g. 2026')}
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-7 border-b border-slate-100 pb-7">
                      <h3 className="text-base font-semibold text-slate-900">{t('Professional profiles')}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {t('Add links where we can learn more about your work. A GitHub username is optional.')}
                      </p>
                      <div className="mt-5 grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="linkedIn" className="mb-2 block text-sm font-medium text-slate-700">
                          {t('LinkedIn profile')} <span className="text-rose-600">*</span>
                          </label>
                          <input
                          id="linkedIn"
                          name="linkedIn"
                          type="url"
                          required
                          value={form.linkedIn}
                          onChange={updateForm}
                          placeholder="https://linkedin.com/in/yourname"
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                          />
                        </div>
                        <div>
                          <label htmlFor="github" className="mb-2 block text-sm font-medium text-slate-700">
                          {t('GitHub username')} <span className="font-normal text-slate-400">({t('optional')})</span>
                          </label>
                          <div className="flex overflow-hidden rounded-xl border border-slate-200 bg-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">
                          <span className="flex items-center border-r border-slate-200 bg-slate-50 px-3 text-sm text-slate-500">
                            @
                          </span>
                          <input
                            id="github"
                            name="github"
                            type="text"
                            autoComplete="off"
                            pattern="[A-Za-z0-9](?:[A-Za-z0-9-]{0,37})"
                            title={t('Enter your GitHub username, not a URL.')}
                            value={form.github}
                            onChange={updateForm}
                            placeholder="username"
                            className="min-w-0 flex-1 px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                          />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label htmlFor="portfolio" className="mb-2 block text-sm font-medium text-slate-700">
                          {t('Portfolio or project link')} <span className="text-rose-600">*</span>
                          </label>
                          <input
                          id="portfolio"
                          name="portfolio"
                          type="url"
                          required
                          value={form.portfolio}
                          onChange={updateForm}
                          placeholder="https://yourportfolio.com"
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-7">
                      <h3 className="text-base font-semibold text-slate-900">{t('CV and relevant experience')}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {t('Help us understand the skills, projects, or experience you bring.')}
                      </p>
                      <div className="mt-5 grid gap-5">
                        <div>
                          <label htmlFor="cvFile" className="mb-2 block text-sm font-medium text-slate-700">
                          {t('Upload your CV')} <span className="text-rose-600">*</span>
                          </label>
                          <input
                          id="cvFile"
                          name="cvFile"
                          type="file"
                          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          required
                          onChange={updateForm}
                          className="block w-full cursor-pointer rounded-xl border border-slate-200 bg-white text-sm text-slate-600 file:mr-4 file:cursor-pointer file:border-0 file:bg-blue-50 file:px-4 file:py-3 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
                          />
                          <p className="mt-2 text-xs leading-5 text-slate-500">
                          {t('PDF, DOC, or DOCX · 10 MB maximum. Your email app cannot attach files automatically; you will attach this CV to the draft email.')}
                          </p>
                          {cvError && <p role="alert" className="mt-2 text-sm text-rose-600">{t(cvError)}</p>}
                          {form.cvFile && (
                          <p className="mt-2 text-sm font-medium text-emerald-700">
                            {t('Selected')}: {form.cvFile.name}
                          </p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="relevantExperience" className="mb-2 block text-sm font-medium text-slate-700">
                          {t('Relevant skills, projects, or experience')} <span className="text-rose-600">*</span>
                          </label>
                          <textarea
                          id="relevantExperience"
                          name="relevantExperience"
                          required
                          minLength={20}
                          rows={4}
                          value={form.relevantExperience}
                          onChange={updateForm}
                          placeholder={t('Mention relevant skills, projects, work experience, certifications, or anything else you would like us to know.')}
                          className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-9 flex flex-col-reverse justify-between gap-3 border-t border-slate-100 pt-6 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setStep((current) => Math.max(0, current - 1))}
                    disabled={step === 0}
                    className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 disabled:invisible focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    {t('Back')}
                  </button>
                  <button
                    type="submit"
                    disabled={!canContinue}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-md shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    {step === 2 ? t('Continue to complete') : t('Continue')}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
                {step === 2 && (
                  <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                    {t('Your email app will open with your application details. Remember to attach your CV before sending.')}
                  </p>
                )}
              </form>
            ) : (
              <div className="mx-auto max-w-xl py-10 text-center sm:py-14">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/60">
                  <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                </div>
                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                  {t('Step 4 · Complete')}
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                  {t('Your application is ready')}
                </h2>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {t('Select Send application to open a prefilled email. Attach your CV and send the message from your email app to complete your application.')}
                </p>
                <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-left text-sm text-amber-900">
                  <p className="font-semibold">{t('Remember to attach your CV')}</p>
                  <p className="mt-1 break-all text-amber-800">{form.cvFile?.name}</p>
                  <p className="mt-1 text-xs leading-5 text-amber-800">
                    {t('Email drafts cannot include file attachments automatically. Add this file to the draft before sending.')}
                  </p>
                </div>
                <a
                  href={getApplicationMailto(form, t)}
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-blue-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-md transition hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {t('Send application')}
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setForm(initialForm)
                    setStep(0)
                  }}
                  className="mx-auto mt-4 block rounded-md px-3 py-2 text-sm font-medium text-slate-500 transition hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  {t('Start a new application')}
                </button>
              </div>
            )}
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <UserRound className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="mt-4 text-base font-semibold text-slate-900">{t('Your application')}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {t('A few details help us understand your interests and connect you with the right learning path.')}
              </p>
              <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-slate-500">{t('Cohort')}</span>
                  <span className="font-medium text-slate-800">
                    {t(cohorts.find(({ id }) => id === form.cohort)?.title || 'Not selected')}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-slate-500">{t('Learning path')}</span>
                  <span className="text-right font-medium text-slate-800">
                    {t(stacks.find(({ id }) => id === form.stack)?.title || 'Not selected')}
                  </span>
                </div>
                {form.experienceRating && (
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-slate-500">{t('Experience')}</span>
                    <span className="font-medium text-slate-800">{form.experienceRating} / 5</span>
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6">
              <h2 className="text-sm font-semibold text-slate-900">{t('Need a hand?')}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {t('Questions about the application? Our team is happy to help.')}
              </p>
              <a
                href="mailto:Info@anidev.africa"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Info@anidev.africa
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-500">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {t('Kigali, Rwanda')}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
