import { ArrowDown, ArrowRight, ArrowUpRight, Quote, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLocale } from '../../i18n/LocaleContext'
import { testimonials } from '../../data/testimonials'
import styles from './Testimonials.module.css'

export default function TestimonialsPage() {
  const { t } = useLocale()
  const averageRating = (
    testimonials.reduce((total, testimonial) => total + testimonial.rating, 0) / testimonials.length
  ).toFixed(1)

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="testimonials-title">
        <div aria-hidden="true" className={styles.heroPattern} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              {t('Testimonials')}
            </p>
            <h1 id="testimonials-title" className={styles.heroTitle}>
              {t('What Our Partners Say About Us')}
            </h1>
            <p className={styles.heroIntro}>
              {t('Discover how Anidev Technologies empowers developers to thrive and helps businesses build the products they envision.')}
            </p>
            <a className={styles.heroLink} href="#stories">
              {t('Read all stories')}
              <ArrowDown aria-hidden="true" />
            </a>
          </div>

          <div className={styles.heroProof} aria-label={`${averageRating} ${t('Rating')}`}>
            <div className={styles.proofIcon}>
              <Quote aria-hidden="true" />
            </div>
            <div className={styles.proofRating}>
              <span className={styles.proofNumber}>{averageRating}</span>
              <span className={styles.proofStars} role="img" aria-label={`${t('Rating')}: ${averageRating}/5`}>
                {Array.from({ length: 5 }, (_, i) => <Star key={i} aria-hidden="true" />)}
              </span>
            </div>
            <span className={styles.proofCaption}>{testimonials.length} {t('stories')}</span>
            <span className={styles.proofRule} />
            <p className={styles.proofQuote}>
              {t('Every organization brings a different challenge. We start by understanding yours, then find a practical way to combine our strengths.')}
            </p>
          </div>
        </div>
        <a className={styles.scrollCue} href="#stories" aria-label={t('Read all stories')}>
          <ArrowDown aria-hidden="true" />
        </a>
      </section>

      <section id="stories" className={styles.stories} aria-labelledby="stories-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.sectionEyebrow}>{t('Testimonials')}</p>
              <h2 id="stories-title" className={styles.sectionTitle}>{t('Read all stories')}</h2>
            </div>
            <span className={styles.countPill}>
              {String(testimonials.length).padStart(2, '0')} <span aria-hidden="true">/</span> {t('stories')}
            </span>
          </div>

          <div className={styles.grid}>
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.id}
                className={`${styles.card} ${index === 1 ? styles.featured : ''}`}
              >
                <div className={styles.cardTop}>
                  <span className={styles.cardIndex}>0{index + 1}</span>
                  <span
                    className={styles.cardRating}
                    role="img"
                    aria-label={`${t('Rating')}: ${testimonial.rating}/5`}
                  >
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star key={i} aria-hidden="true" />
                    ))}
                  </span>
                </div>

                <Quote className={styles.cardQuoteIcon} aria-hidden="true" />
                <blockquote className={styles.quote}>
                  <p>{t(testimonial.quote)}</p>
                </blockquote>

                <div className={styles.cardDivider} />
                <div className={styles.author}>
                  <span className={styles.avatar} aria-hidden="true">
                    {testimonial.author.split(' ').map((name) => name[0]).join('')}
                  </span>
                  <span className={styles.authorInfo}>
                    <span className={styles.authorName}>{testimonial.author}</span>
                    <span className={styles.authorRole}>{t(testimonial.role)}</span>
                  </span>
                  <ArrowUpRight className={styles.authorArrow} aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.contactPanel}>
            <div className={styles.contactCopy}>
              <p className={styles.contactEyebrow}>{t('Partner With Us')}</p>
              <h2>{t('Every organization brings a different challenge. We start by understanding yours, then find a practical way to combine our strengths.')}</h2>
            </div>
            <Link to="/contact" className={styles.contactLink}>
              {t('Contact Us')}
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
