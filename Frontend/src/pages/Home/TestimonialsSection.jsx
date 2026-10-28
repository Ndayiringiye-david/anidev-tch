import { Star, Quote, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLocale } from '../../i18n/LocaleContext'
import { testimonials } from '../../data/testimonials'
import styles from './TestimonialsSection.module.css'

export default function TestimonialsSection() {
  const { t: translate } = useLocale()

  return (
    <section aria-labelledby="testimonials-heading" className={styles.section}>
      <div aria-hidden="true" className={styles.decoration} />

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowMark} />
              {translate('Testimonials')}
            </p>
            <h2 id="testimonials-heading" className={styles.title}>
              {translate('What Our Partners Say About Us')}
            </h2>
            <p className={styles.intro}>
              {translate('Discover how Anidev Technologies empowers developers to thrive and helps businesses build the products they envision.')}
            </p>
          </div>

          <div className={styles.headerAside}>
            <div className={styles.ratingSummary}>
              <div className={styles.ratingTop}>
                <span className={styles.ratingNumber}>5.0</span>
                <span className={styles.summaryStars} role="img" aria-label={`${translate('Rating')}: 5/5`}>
                  {Array.from({ length: 5 }, (_, i) => <Star key={i} aria-hidden="true" />)}
                </span>
              </div>
              <span className={styles.storyCount}>{testimonials.length} {translate('stories')}</span>
            </div>
            <Link to="/testimonials" className={styles.allStories}>
              {translate('Read all stories')}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <figure
              key={testimonial.id}
              className={`${styles.card} ${index === 1 ? styles.featured : ''}`}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardStars} role="img" aria-label={`${translate('Rating')}: ${testimonial.rating}/5`}>
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star key={i} aria-hidden="true" />
                  ))}
                </span>
                <Quote className={styles.quoteMark} aria-hidden="true" />
              </div>

              <blockquote className={styles.quote}>
                <p className={styles.quoteText}>{translate(testimonial.quote)}</p>
                <Link to="/testimonials" className={styles.storyLink}>
                  {translate('Read the full story')}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </blockquote>

              <figcaption className={styles.author}>
                <span className={styles.avatar} aria-hidden="true">
                  {testimonial.author.split(' ').map((name) => name[0]).join('')}
                </span>
                <span className={styles.authorDetails}>
                  <span className={styles.authorName}>{testimonial.author}</span>
                  <span className={styles.authorRole}>{translate(testimonial.role)}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
