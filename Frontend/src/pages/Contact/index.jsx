import { ArrowUpRight, Clock3, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useLocale } from '../../i18n/LocaleContext'
import heroBg from '../../assets/convetional.jpg'

const contactDetails = [
  { icon: Mail, title: 'Email', detail: 'Info@anidev.africa', href: 'mailto:Info@anidev.africa' },
  { icon: Phone, title: 'Call us', detail: '+250 788 399 423', href: 'tel:+250788399423' },
  {
    icon: MapPin,
    title: 'Visit our office',
    detail: 'Inind House, KN 3 Rd, Kigali, Rwanda',
    href: 'https://maps.google.com/?q=Inind+House,+KN+3+Rd,+Kigali,+Rwanda',
  },
]

const inputClass =
  'w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100'
const labelClass = 'mb-2 block text-sm font-medium text-slate-700'

function handleSubmit(event, t) {
  event.preventDefault()

  const formData = new FormData(event.currentTarget)
  const body = [
    `${t('Full name')}: ${formData.get('fullName')}`,
    `${t('Work email')}: ${formData.get('email')}`,
    `${t('Phone number')}: ${formData.get('phone')}`,
    `${t('I am interested in')}: ${t(formData.get('inquiryType'))}`,
    '',
    formData.get('message'),
  ].join('\n')

  window.location.href = `mailto:Info@anidev.africa?subject=${encodeURIComponent(formData.get('subject'))}&body=${encodeURIComponent(body)}`
}

export default function ContactPage() {
  const { t } = useLocale()

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <section className="relative isolate overflow-hidden bg-primary-950 text-white">
        <img src={heroBg} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-950 via-primary-950/90 to-primary-900/55" />
        <div aria-hidden="true" className="absolute -right-24 -top-40 -z-10 h-[28rem] w-[28rem] rounded-full border border-white/10" />
        <div aria-hidden="true" className="absolute -right-8 -top-24 -z-10 h-[22rem] w-[22rem] rounded-full border border-white/10" />

        <div className="mx-auto max-w-5xl px-4 pb-28 pt-16 sm:px-6 md:pb-32 md:pt-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
              {t("Let's start a conversation")}
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              {t('Great partnerships')}
              <span className="block text-blue-200">{t('start with a hello.')}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-blue-50/85 sm:text-lg sm:leading-8">
              {t("Tell us what you're working toward. Whether you need exceptional talent, training, or a technology partner, our team is ready to listen.")}
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-16 max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-[0_28px_80px_-36px_rgba(15,23,42,0.28)] ring-1 ring-slate-200/70 lg:grid-cols-5">
          <aside className="relative overflow-hidden bg-gradient-to-br from-primary-900 to-primary-950 p-7 text-white sm:p-9 lg:col-span-2 lg:p-10">
            <div aria-hidden="true" className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-400/10 blur-2xl" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">{t('Contact information')}</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">{t("We're here to help.")}</h2>
              <p className="mt-3 text-sm leading-6 text-blue-100/75">
                {t('Reach out directly or leave us a note. We usually respond within one business day.')}
              </p>

              <div className="mt-9 space-y-6">
                {contactDetails.map(({ icon: Icon, title, detail, href }) => (
                  <a
                    key={title}
                    href={href}
                    target={title === 'Visit our office' ? '_blank' : undefined}
                    rel={title === 'Visit our office' ? 'noreferrer' : undefined}
                    className="group flex items-start gap-4 rounded-2xl transition-colors hover:text-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-blue-200 transition-colors group-hover:bg-white/15">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 pt-0.5">
                      <span className="block text-xs font-medium uppercase tracking-wide text-blue-200/80">{t(title)}</span>
                      <span className="mt-1 block text-sm font-medium leading-6 text-white">{detail}</span>
                    </span>
                    {title === 'Visit our office' && <ArrowUpRight className="ml-auto mt-1 h-4 w-4 shrink-0 text-blue-200/70" aria-hidden="true" />}
                  </a>
                ))}
              </div>

              <div className="mt-9 border-t border-white/15 pt-6">
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-blue-200" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold">{t('Business hours')}</p>
                    <p className="mt-1 text-sm leading-6 text-blue-100/75">{t('Monday – Friday')}<br />8:00 – 17:00 (CAT)</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="p-6 sm:p-9 lg:col-span-3 lg:p-10">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{t('Send us a message')}</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{t('How can we work together?')}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                {t("Share a few details and we'll connect you with the right person on our team.")}
              </p>
            </div>

            <form className="space-y-5" onSubmit={(event) => handleSubmit(event, t)}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className={labelClass}>{t('Full name')} <span className="text-blue-700">*</span></label>
                  <input id="fullName" name="fullName" type="text" autoComplete="name" required placeholder={t('Your name')} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>{t('Work email')} <span className="text-blue-700">*</span></label>
                  <input id="email" name="email" type="email" autoComplete="email" required placeholder={t('you@company.com')} className={inputClass} />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className={labelClass}>{t('Phone number')} <span className="text-blue-700">*</span></label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" required placeholder={t('+250 ...')} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="inquiryType" className={labelClass}>{t('I am interested in')} <span className="text-blue-700">*</span></label>
                  <select id="inquiryType" name="inquiryType" required defaultValue="general" className={inputClass}>
                    <option value="general">{t('General inquiry')}</option>
                    <option value="hiring">{t('Hiring talent')}</option>
                    <option value="training">{t('Training programs')}</option>
                    <option value="partnership">{t('Partnership')}</option>
                    <option value="support">{t('Support')}</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={labelClass}>{t('Subject')} <span className="text-blue-700">*</span></label>
                <input id="subject" name="subject" type="text" required placeholder={t('What would you like to discuss?')} className={inputClass} />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>{t('How can we help?')} <span className="text-blue-700">*</span></label>
                <textarea id="message" name="message" rows={5} required placeholder={t('Tell us a little about your goals or project...')} className={`${inputClass} resize-y`} />
              </div>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
                >
                  {t('Send message')}
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
                <p className="text-xs leading-5 text-slate-500">
                  {t('Your email app will open with your message ready to send.')}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">{t('Find us in Kigali')}</p>
              <h2 className="mt-1 text-lg font-semibold text-slate-900">Inind House, KN 3 Road, Kigali, Rwanda</h2>
            </div>
            <a
              href="https://maps.google.com/?q=Inind+House,+KN+3+Rd,+Kigali,+Rwanda"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
            >
              {t('Get directions')}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d63799.50383361362!2d30.062152086056166!3d-1.9663212100429146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x19dca7985e753a99%3A0x69db8cd5b853fb3!2sSOLVIT%20AFRICA%20Headquarters%2C%20Inind%20House%2C%20KN%203%20Road%2C%20Kigali!3m2!1d-1.9664074999999999!2d30.103351699999997!4m5!1s0x19dca7985e753a99%3A0x69db8cd5b853fb3!2sInind%20House%2C%20KN%203%20Rd%2C%20Kigali!3m2!1d-1.9664074999999999!2d30.103351699999997!5e0!3m2!1sen!2srw!4v1752594056846!5m2!1sen!2srw"
            title="ANIDEV TECHNOLOGIES office location in Kigali"
            className="h-72 w-full border-0 sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  )
}
