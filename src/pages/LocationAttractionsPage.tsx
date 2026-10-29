import PageMetadata from '../components/PageMetadata'
import { useRef, useState } from 'react'
import './LocationAttractionsPage.css'

interface Attraction {
  name: string
  description: string
  address?: string
}

interface AttractionCategory {
  name: string
  items: Attraction[]
}

const categories: AttractionCategory[] = [
  {
    name: 'Restaurants',
    items: [
      { name: "Crawdaddy’s", description: 'A gourmet restaurant and wine lover’s dream, known for its cognac-flambéed steak with garlic and herb butter and other sophisticated dishes.', address: '570 Fehrsen Street, Brooklyn' },
      { name: 'The Village', description: 'A quaint street with an assortment of delightful restaurants and coffee shops in a relaxed neighbourhood setting.', address: '16th Street, Hazelwood' },
      { name: 'Design Square', description: 'A dining and shopping destination with Col’Cacchio, Mugg & Bean, Mythos, Ocean Basket, Tasha’s and Moo Moo’s all in one place.', address: 'Brooklyn, Pretoria' },
      { name: 'Aroma Coffee Roasters', description: 'A natty little coffee shop and roastery serving freshly roasted coffee, good food and excellent coffee only a short walk from Brooks Cottage.', address: 'Corner Pienaar and Lynwood Road, Brooklyn' },
    ],
  },
  {
    name: 'Schools & Universities',
    items: [
      { name: 'Crawford College' },
      { name: 'Pretoria Boys High' },
      { name: 'Menlo Park High School' },
      { name: 'Afrikaanse Hoër Seunskool' },
      { name: 'Afrikaanse Hoër Meisieskool' },
      { name: 'St Mary’s Diocesan School for Girls' },
      { name: 'University of Pretoria', description: 'One of South Africa’s leading research universities, with multiple campuses and more than 1,800 academic programmes across its faculties.' },
      { name: 'Tshwane University of Technology', description: 'A major university of technology formed in 2004 and enrolling more than 50,000 students across South Africa.' },
      { name: 'Unisa', description: 'Africa’s leading open distance-learning institution, offering internationally accredited qualifications and flexible study programmes.' },
    ].map((item) => ({ ...item, description: item.description ?? 'An established learning institution serving the Pretoria community.' })),
  },
  {
    name: 'Shopping',
    items: [
      { name: 'Brooklyn Mall', description: 'Located in the heart of Pretoria’s eastern suburbs, Brooklyn Mall offers more than 170 stores, including fashion, speciality retail, restaurants and entertainment.', address: 'Brooklyn, Pretoria' },
      { name: 'Menlyn Park Shopping Centre', description: 'A major shopping destination with over 300 stores, 37 restaurants and a wide selection of entertainment under one roof.', address: 'Menlyn, Pretoria East' },
      { name: 'Design Square', description: 'An extension of Brooklyn Mall offering restaurants, shopping and everyday dining choices in a convenient location.', address: 'Brooklyn, Pretoria' },
    ],
  },
  {
    name: 'Museums',
    items: [
      { name: 'Sammy Marks Museum', description: 'Visit a preserved Victorian mansion dating back to 1884 and explore its historic garden for an atmospheric day out.', address: 'Old Bronkhorstspruit Road, Pretoria' },
      { name: 'Smuts House Museum', description: 'Discover the home of General Jan Smuts and learn about the life and legacy of this influential South African statesman.', address: 'Jan Smuts Avenue, Irene' },
      { name: 'South African Air Force Museum', description: 'View historic aircraft and trace the development of South African military aviation, with exhibits including a Mirage F1 and Angolan MiG-21.', address: 'Zwartkop Air Force Base, Route 101, Valhalla' },
      { name: 'National Museum of Natural History', description: 'Explore extensive displays of hominid fossils, Karoo fossils and natural history collections in a historic sandstone building.', address: '432 Paul Kruger Street, Pretoria' },
      { name: 'Correctional Services Museum', description: 'Learn about life and history inside Pretoria Prison through exhibits presented by the Department of Correctional Services.', address: 'Corner Bosman and Visagie Streets, Pretoria' },
      { name: 'Post Office Museum', description: 'Discover the history of South Africa’s postal, stamp, telephone and telegraph services.', address: 'Church Square, Pretoria' },
    ],
  },
  {
    name: 'Monuments',
    items: [
      { name: 'Freedom Park', description: 'A national and international landmark celebrating South Africa’s struggle for liberation and humanity’s shared story of freedom.', address: 'Corner Koch Street and 7th Avenue, Pretoria' },
      { name: 'The Union Buildings', description: 'The historic South African parliament buildings designed in 1913 by Sir Herbert Baker, with panoramic views of the city.', address: 'Government Avenue, Pretoria' },
      { name: 'Voortrekker Monument', description: 'A distinctive landmark commemorating the pioneer history of Southern Africa and the history of the Afrikaner people.', address: 'Eeufees Road, Groenkloof' },
    ],
  },
  {
    name: 'Sports',
    items: [
      { name: 'University of Pretoria High Performance Centre', description: 'A world-class sports facility just a short walk from Brooks Cottage, used during the 2010 FIFA World Cup by the Argentina national team.', address: 'University of Pretoria, Hatfield' },
      { name: 'Loftus Versfeld', description: 'The famous home of Pretoria rugby and the Blue Bulls, located just a few blocks from Brooks Cottage.', address: 'Loftus Versfeld, Pretoria' },
    ],
  },
  {
    name: 'Gardens',
    items: [
      { name: 'National Zoological Gardens', description: 'South Africa’s largest national zoo, also home to an aquarium and reptile park with extensive animal and marine displays.', address: 'Boom Street, Pretoria' },
      { name: 'Pretoria National Botanical Garden', description: 'A beautiful natural attraction featuring approximately half of South Africa’s tree species and nearly 200 bird species.', address: '2 Cussonia Avenue, Brummeria, Pretoria' },
    ],
  },
  {
    name: 'Art',
    items: [
      { name: 'Anton Smit Sculpture Park', description: 'Explore the work of renowned Pretoria sculptor and artist Anton Smit at his sculpture park outside the city.', address: '44 Black Eagle Lane, Bronkhorstspruit, 1020' },
    ],
  },
  {
    name: 'Seasonal Attractions',
    items: [
      { name: 'Jacaranda Trees in Bloom', description: 'Visit Brooks Street and the Brooklyn neighbourhood in spring to see Pretoria’s Jacaranda trees covered in spectacular purple blossoms.' },
      { name: 'Our Beautiful Neighbourhood', description: 'Take a relaxed walk around the Brooklyn streets surrounding Brooks Cottage as the seasonal trees come into full bloom.', address: 'Brooks Street, Brooklyn, Pretoria' },
    ],
  },
]

function LocationAttractionsPage() {
  const [activeCategory, setActiveCategory] = useState('All Attractions')
  const contentRef = useRef<HTMLDivElement>(null)
  const visibleCategories = activeCategory === 'All Attractions'
    ? categories
    : categories.filter((category) => category.name === activeCategory)

  const selectCategory = (category: string) => {
    setActiveCategory(category)
    window.requestAnimationFrame(() => {
      const contentTop = contentRef.current?.getBoundingClientRect().top
      if (contentTop !== undefined) {
        window.scrollTo({
          top: Math.max(0, window.scrollY + contentTop - 118),
          behavior: 'smooth',
        })
      }
    })
  }

  return (
    <>
      <PageMetadata title="Location & Attractions" path="/location-attractions" />
      <main id="location-attractions-page" className="location-attractions-page">
        <span className="location-attractions-page__watermark" aria-hidden="true">
          Local
        </span>

        <header className="location-attractions-page__header">
          <img src="/heading_decor.svg" alt="" aria-hidden="true" />
          <h1>
            LOCATION &
            <br />
            ATTRACTIONS
          </h1>
        </header>

        <aside className="location-attractions-page__sidebar" aria-label="Attraction categories">
          <p className="location-attractions-page__sidebar-label">EXPLORE BY CATEGORY</p>
          <div className="location-attractions-page__category-list">
            {['All Attractions', ...categories.map((category) => category.name)].map((category) => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? 'is-active' : ''}
                onClick={() => selectCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </aside>

        <div className="location-attractions-page__mobile-filter">
          <label htmlFor="attraction-category">EXPLORE BY CATEGORY</label>
          <select
            id="attraction-category"
            value={activeCategory}
            onChange={(event) => selectCategory(event.target.value)}
          >
            {['All Attractions', ...categories.map((category) => category.name)].map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div ref={contentRef} className="location-attractions-page__content">
          {visibleCategories.map((category) => (
            <section className="location-attractions-page__category" key={category.name}>
              <h2>{category.name}</h2>
              <div className="location-attractions-page__list">
                {category.items.map((item) => (
                  <article className="location-attractions-page__item" key={item.name}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    {item.address && (
                      <address>
                        <i className="fa-solid fa-location-dot" aria-hidden="true" />
                        {item.address}
                      </address>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  )
}

export default LocationAttractionsPage
