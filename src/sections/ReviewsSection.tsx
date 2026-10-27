// src/sections/ReviewsSection.tsx
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import './ReviewsSection.css'

type ReviewSource = 'google' | 'tripadvisor'

interface Review {
  id: string
  name: string
  date: string // 'YYYY-MM' - used for sorting newest to oldest
  rating: number
  text: string
  source: ReviewSource
}

/*
  Real reviews from Brooks Cottage's Tripadvisor page:
  https://www.tripadvisor.co.za/Hotel_Review-g312583-d4819325-Reviews-Brooks_Cottage-Pretoria_Gauteng.html
  When you add Google reviews, set source: 'google' and the Google logo shows.
*/
const RAW_REVIEWS: Review[] = [
  {
    id: 'dorette-s',
    name: 'Dorette S',
    date: '2026-07',
    rating: 5,
    source: 'tripadvisor',
    text: "From the moment I arrived, I knew I had chosen the right place. Chris and Norma are exceptional hosts who genuinely care about their guests and go out of their way to make you feel welcome. The room was beautifully appointed, spotlessly clean and incredibly comfortable. It was the thoughtful little touches that made the stay extra special—excellent coffee, complimentary sherry and all the small details that make you feel at home rather than just another guest. The guest house is perfectly located in a quiet, safe diplomatic area, making it an ideal base while still offering a peaceful retreat after a busy day. The atmosphere is warm, welcoming and wonderfully tranquil. It's rare to find accommodation where the hospitality is every bit as memorable as the facilities, but Chris and Norma have created exactly that. I wouldn't hesitate to stay here again and highly recommend it to anyone looking for comfort, genuine hospitality and a home-away-from-home experience.",
  },
  {
    id: 'djunio718161',
    name: 'djunio718161',
    date: '2026-05',
    rating: 5,
    source: 'tripadvisor',
    text: 'Chris and Norma are very kindful and gave recomendations of restaurants and things to do. The room is also very clean and confortable, located in a very calm neighborhood. A very good choice, nothing negative which deserves mention.',
  },
  {
    id: 'shendr501708',
    name: 'shendr501708',
    date: '2026-05',
    rating: 5,
    source: 'tripadvisor',
    text: 'Brooks Cottage is a beautifully located guesthouse in one of the safest parts of Pretoria, and our stay was exceptional. The hosts were incredibly friendly, personal, and welcoming, creating a warm atmosphere from the moment we arrived. They shared plenty of useful local tips, which made our visit even more enjoyable. The pool area is lovely and relaxing, and the rooms are tastefully decorated. The entire property, including the cottages, is fully walled with its own private gate, which adds an extra sense of comfort and security. We truly enjoyed our time here and would gladly return.',
  },
  {
    id: 'phuti-l',
    name: 'Phuti L',
    date: '2026-04',
    rating: 5,
    source: 'tripadvisor',
    text: 'Chris and Norma are amazing hosts - their communication shows attention to detail. The cottage I booked is well hidden for an amazing quiet city escape.',
  },
  {
    id: 'asold212593',
    name: 'asold212593',
    date: '2025-06',
    rating: 5,
    source: 'tripadvisor',
    text: 'Good area safe, friendly guest service and clean spacious rooms. Near shops and transport easily accessible.',
  },
  {
    id: 'compass13491090178',
    name: 'Compass13491090178',
    date: '2025-03',
    rating: 5,
    source: 'tripadvisor',
    text: "This has been one of the best luxury guesthouse experiences I've had in Pretoria. I would not only recommend you stay here but I plan to return after my hosts, Chris and Norma, went out of their way to make me feel comfortable. This guesthouse has clean, spacious, self-catering rooms with a separate entrance and en-suite bathroom. While at Brooks Cottage, I stayed in room 4, also known as 'The Mahogany Room'; its beautiful wooden furniture did not disappoint. There's a braai area, a sparkling pool, Wi-Fi, and breakfast available on request. Brooks Cottage is located in the safe neighbourhood of Brooklyn, and Norma and Chris give the best recommendations for exploring local restaurants and activities.",
  },
  {
    id: 'tdrysd951697',
    name: 'tdrysd951697',
    date: '2025-02',
    rating: 5,
    source: 'tripadvisor',
    text: "You can't do better than Brooks Cottage if you stay in Pretoria. The hosts are fabulous and go out of their way to make your stay perfect. The rooms are beautifully appointed and spotless. I can't recommend Brooks Cottage highly enough",
  },
  {
    id: 'bokamosoyfd',
    name: 'bokamosoyfd',
    date: '2024-10',
    rating: 5,
    source: 'tripadvisor',
    text: 'Norma and Chris were wonderful hosts during my 5 day stay at Brooks cottage. My room was spacious with lots of amenities, and the secure grounds boast a pool, lovely veranda, and lots of birds. They serve a lovely breakfast, either just continental or with eggs and sides. They are also knowledgable of the area and can help with dinner plans.',
  },
  {
    id: 'mschmitt26',
    name: 'mschmitt26',
    date: '2024-09',
    rating: 5,
    source: 'tripadvisor',
    text: 'A very nice conclusion to our trip to South Africa at Brooks Cottage. Norma and Chris warmly welcomed us (the late arrival from Kruger Park was no problem at all) and gave us valuable tips for restaurants and sights. The Cottage itself is quietly located, in a safe area of Pretoria and the room was beautiful. The breakfast was also excellent and the special wishes of our daughter were also taken into account. Chris also helped me change my flat tire and arranged a workshop to repair the flat tire. We are super grateful for our lovely time at Brooks Cottage and will be happy to come back for any future South Africa trip. Many greetings from the Schmitt family from Germany',
  },
  {
    id: 'kennedy',
    name: 'Kennedy',
    date: '2024-06',
    rating: 5,
    source: 'tripadvisor',
    text: "What a personal experience with Uncle Chris and Auntie Norma... I arrived there after a frustrating day of failed bookings from my travel agency but they made sure my late booking is processed on time, upon arrival everything was ready. I really liked the personal time with them, their room/cottage which has everything in close proximity, internet and livestreaming of sport etc and a touch of vintage furniture. To uncle Chris and Auntie Norma, please keep it up. I'm looking forward to my next visit with my family.",
  },
  {
    id: 'lynelle-m',
    name: 'Lynelle M',
    date: '2024-03',
    rating: 5,
    source: 'tripadvisor',
    text: 'Chris and Norma were such wonderful hosts! Warm and so welcoming. I stayed with them for a week, with my daughter. They were both extremely helpful, taking the time on Sunday afternoons to help me unpack my car upon arrival and pack on departure. My room was luxurious with a large bathroom, TV, aircon and kitchenette. I had everything I needed. I will definitely be staying here again!',
  },
  {
    id: 'martin-d',
    name: 'Martin D',
    date: '2024-03',
    rating: 5,
    source: 'tripadvisor',
    text: "Very pleasant place. Excellent location. Very clean. Very individually and comfortably furnished room. Delicious breakfast. Very friendly and helpful hosts. The additional outdoor shower was fun. I'd love to come back.",
  },
  {
    id: 'guerinw2023',
    name: 'guerinw2023',
    date: '2023-02',
    rating: 5,
    source: 'tripadvisor',
    text: 'Exceptionally congenial hosts provide all kinds of nice touches: complimentary sherry, a couple of delicious biscottis wrapped with a twine bow, a refrigerator with most any kind of beverage you might desire (payment on the honor system), a wealth of information if you are a birdwatcher or just need a haircut. Breakfasts are outstanding. Rooms are large, immaculate and nicely appointed.',
  },
]

// Newest to oldest
const REVIEWS = [...RAW_REVIEWS].sort((a, b) => b.date.localeCompare(a.date))

// Extra copies at the end so the loop is seamless (2 visible + 1 cut off)
const LOOP_REVIEWS = [...REVIEWS, ...REVIEWS.slice(0, 3)]

const AUTOPLAY_MS = 5000

function formatDate(date: string) {
  return new Date(`${date}-01T00:00:00`).toLocaleDateString('en-ZA', {
    month: 'long',
    year: 'numeric',
  })
}

/* ---------- Icons (all sizes on the 8px grid) ---------- */

function FlowerIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <g fill="#D7942E">
        <ellipse cx="32" cy="16" rx="8" ry="14" />
        <ellipse cx="32" cy="48" rx="8" ry="14" />
        <ellipse cx="16" cy="32" rx="14" ry="8" />
        <ellipse cx="48" cy="32" rx="14" ry="8" />
        <ellipse cx="20.7" cy="20.7" rx="8" ry="14" transform="rotate(-45 20.7 20.7)" opacity="0.6" />
        <ellipse cx="43.3" cy="43.3" rx="8" ry="14" transform="rotate(-45 43.3 43.3)" opacity="0.6" />
        <ellipse cx="43.3" cy="20.7" rx="8" ry="14" transform="rotate(45 43.3 20.7)" opacity="0.6" />
        <ellipse cx="20.7" cy="43.3" rx="8" ry="14" transform="rotate(45 20.7 43.3)" opacity="0.6" />
      </g>
      <circle cx="32" cy="32" r="7" fill="#161616" />
    </svg>
  )
}

function GoogleLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 48 48" aria-label="Google review" role="img">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.4-.4-3.5Z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.700 8.3 6.3 14.7Z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44Z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5Z" />
    </svg>
  )
}

function TripadvisorLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 48 48" aria-label="Tripadvisor review" role="img">
      <circle cx="24" cy="24" r="24" fill="#34E0A1" />
      <circle cx="16" cy="26" r="7" fill="#fff" />
      <circle cx="32" cy="26" r="7" fill="#fff" />
      <circle cx="16" cy="26" r="3.5" fill="#000" />
      <circle cx="32" cy="26" r="3.5" fill="#000" />
      <path d="M9 18c4-3.5 9.5-5 15-5s11 1.5 15 5" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M21 33l3 4 3-4" fill="#000" />
    </svg>
  )
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="reviews__stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.52l-5.88 3.09 1.12-6.55L2.48 9.42l6.58-.96L12 2.5Z"
            fill={i < rating ? '#D7942E' : 'rgba(255,255,255,0.2)'}
          />
        </svg>
      ))}
    </div>
  )
}

/* ---------- Single review card ---------- */

function ReviewCard({ review }: { review: Review }) {
  const textRef = useRef<HTMLParagraphElement>(null)
  const [expanded, setExpanded] = useState(false)
  const [canExpand, setCanExpand] = useState(false)

  // Show "View more" only if the text is longer than 4 lines
  useLayoutEffect(() => {
    const el = textRef.current
    if (!el || expanded) return

    const check = () => setCanExpand(el.scrollHeight > el.clientHeight + 1)
    check()

    document.fonts?.ready.then(check)
    const observer = new ResizeObserver(check)
    observer.observe(el)
    return () => observer.disconnect()
  }, [expanded])

  return (
    <article className="reviews__card">
      <div className="reviews__card-top">
        <div className="reviews__author">
          <div className="reviews__avatar" aria-hidden="true">
            {review.name.charAt(0).toUpperCase()}
          </div>
          <div className="reviews__author-info">
            <p className="reviews__name">{review.name}</p>
            <p className="reviews__date">{formatDate(review.date)}</p>
          </div>
        </div>
        {review.source === 'google' ? <GoogleLogo /> : <TripadvisorLogo />}
      </div>

      <Stars rating={review.rating} />

      <p ref={textRef} className={`reviews__text${expanded ? ' is-expanded' : ''}`}>
        {review.text}
      </p>

      {canExpand && (
        <button
          type="button"
          className="reviews__more"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? 'View less' : 'View more'}
        </button>
      )}
    </article>
  )
}

/* ---------- Section ---------- */

function ReviewsSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [animate, setAnimate] = useState(true)
  const [paused, setPaused] = useState(false)
  const [step, setStep] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  // Card width + gap
  const measure = useCallback(() => {
    const track = trackRef.current
    const card = track?.querySelector<HTMLElement>('.reviews__card')
    if (!track || !card) return
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    setStep(card.offsetWidth + gap)
  }, [])

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Autoplay
  useEffect(() => {
    if (paused || reducedMotion) return
    const timer = window.setInterval(() => setIndex((i) => i + 1), AUTOPLAY_MS)
    return () => window.clearInterval(timer)
  }, [paused, reducedMotion])

  // After sliding onto the copies, jump back to the start without animation
  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget || e.propertyName !== 'transform') return
    if (index >= REVIEWS.length) {
      setAnimate(false)
      setIndex(0)
    }
  }

  // Re-enable animation on the next frame after the silent jump
  useEffect(() => {
    if (animate) return
    let raf2 = 0
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setAnimate(true))
    })
    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
    }
  }, [animate])

  return (
    <section id="reviews" className="reviews">
      {/* Left: title */}
      <div className="reviews__intro">
        <div className="reviews__header">
          <div className="reviews__flower">
            <FlowerIcon />
          </div>
          <p className="reviews__title">
            WHAT OUR
            <br />
            GUESTS SAY
          </p>
        </div>
        <p className="reviews__summary">Rated 4.8 out of 5 by our guests</p>
      </div>

      {/* Right: carousel (2 visible + 1 cut off) */}
      <div
        className="reviews__carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        aria-roledescription="carousel"
        aria-label="Guest reviews"
      >
        <div
          ref={trackRef}
          className="reviews__track"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${index * step}px)`,
            transition: animate ? 'transform 0.8s ease' : 'none',
          }}
        >
          {LOOP_REVIEWS.map((review, i) => (
            <ReviewCard key={`${review.id}-${i}`} review={review} />
          ))}
        </div>

        {/* Gradient overlay - blends the far-right card into the background */}
        <div className="reviews__fade" aria-hidden="true" />
      </div>
    </section>
  )
}

export default ReviewsSection