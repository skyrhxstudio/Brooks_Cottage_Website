import PageMetadata from '../components/PageMetadata'
import { useRef, useState } from 'react'
import './LocationAttractionsPage.css'

interface Attraction {
  name: string
  description?: string
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
      {
        name: 'Crawdaddy’s',
        description: 'A gourmet restaurant and a wine lover’s dream. Try the cognac-flambéed steak with garlic and herb butter, alongside many other sophisticated dishes.',
        address: '570 Fehrsen Street, Brooklyn, Tel: +27 12 346 4642',
      },
      {
        name: 'The Village',
        description: 'A quaint little street with an assortment of delightful restaurants and coffee shops.',
        address: '16th Street, Hazelwood',
      },
      {
        name: 'Design Square',
        description: 'A convenient variety of restaurants in one place: Col’Cacchio (012 346 7048), Mugg & Bean (012 346 7696), Mythos (012 346 5659), Ocean Basket (012 460 1103), Tasha’s (012 460 2951) and Moo Moo’s (012 346 8888).',
      },
      {
        name: 'Aroma',
        description: 'Freshly roasted coffee and excellent food, only about a three-minute walk from Brooks Cottage. The coffee beans are roasted onsite and packaged fresh.',
        address: 'Corner Pienaar and Lynwood Road, Brooklyn',
      },
    ],
  },
  {
    name: 'Schools & Universities',
    items: [
      { name: 'Crawford College' },
      { name: 'Pretoria Boys High' },
      { name: 'Menlo Park Hoërskool' },
      { name: 'Afrikaanse Hoër Seunskool' },
      { name: 'Afrikaanse Hoër Meisieskool' },
      { name: 'St Mary’s Diocesan School for Girls' },
      {
        name: 'University of Pretoria',
        description: 'The University of Pretoria is South Africa’s leading research university and one of the largest in the country. It has six campuses and several other locations, including Pretoria Academic Hospital, while central administration is based at the Hatfield Campus. It offers more than 1,800 programmes across nine faculties, its business school, 140 departments and 85 centres, institutes and bureaus.',
      },
      {
        name: 'Tshwane University of Technology',
        description: 'TUT is the leading university of technology in Africa. Established in 2004 through the merger of Technikon Northern Gauteng, Technikon North-West and Technikon Pretoria, the institution enrolls more than 50,000 students.',
      },
      {
        name: 'Unisa',
        description: 'Unisa is Africa’s leading distance-learning institution, nurturing inspiring leaders of tomorrow. Its internationally accredited qualifications and world-class resources offer accessible, flexible and meaningful learning.',
      },
    ],
  },
  {
    name: 'Shopping',
    items: [
      { name: 'Brooklyn Mall', description: 'Brooklyn Mall is situated in the heart of Pretoria’s eastern suburbs and is the dynamic hub of this diplomatic area. With more than 170 stores, it offers a comprehensive shopping choice. Spacious and elegant, the mall provides relaxed shopping, an enticing range of merchandise, entertainment, restaurants and speciality stores.', address: 'Brooklyn, Pretoria' },
      { name: 'Menlyn Park Shopping Centre', description: 'Menlyn Park Shopping Centre is situated in the east of Pretoria and is conveniently close to the N1 highway. More than 300 stores, 37 restaurants and a wide variety of entertainment are available under one roof.', address: 'Menlyn, Pretoria East' },
    ],
  },
  {
    name: 'Museums',
    items: [
      { name: 'Sammy Marks Museum', description: 'Return to a bygone era with a visit to the Victorian mansion dating back to 1884, and enjoy its historic garden for a day out with a difference.', address: 'Old Bronkhorstspruit Road, Pretoria' },
      { name: 'Smuts House Museum', description: 'Home to General Jan Smuts for over 40 years, Doornkloof in Irene is a unique museum revealing much about his life and the spirit of this great statesman.', address: 'Jan Smuts Avenue, Irene' },
      { name: 'South African Air Force Museum', description: 'View historic aircraft and trace the development of South African military aviation, with exhibits including a Mirage F1 and Angolan MiG-21.', address: 'Zwartkop Air Force Base, Route 101, Valhalla' },
      { name: 'National Museum of Natural History', description: 'Formerly the Transvaal Museum of Natural History, the collection was founded in 1892. Today it is housed in a magnificent sandstone building with exhibits of hominid fossils from the Cradle of Humankind, Karoo fossils of amphibians, fish, reptiles and plants, and more.', address: '432 Paul Kruger Street, Pretoria' },
      { name: 'Correctional Services Museum', description: 'Visit the Department of Correctional Services Museum and take a look at life inside the walls of Pretoria Prison.', address: 'Corner Bosman and Visagie Streets, Pretoria' },
      { name: 'Post Office Museum', description: 'Discover the history of South Africa’s postal, stamp, telephone and telegraph services.', address: 'Church Square, Pretoria' },
    ],
  },
  {
    name: 'Monuments',
    items: [
      { name: 'Freedom Park', description: 'A national and international landmark celebrating South Africa’s struggle for liberation and humanity’s shared story of freedom.', address: 'Corner Koch Street and 7th Avenue, Pretoria' },
      { name: 'Union Buildings', description: 'South Africa’s parliament buildings, designed in 1913 by Sir Herbert Baker. Enjoy a panoramic view of the city from this magnificent crescent-shaped red sandstone edifice.', address: 'Government Road, Pretoria' },
      { name: 'Voortrekker Monument', description: 'A unique monument commemorating the pioneer history of Southern Africa and the history of the Afrikaner people.', address: 'Eeufees Road, Groenkloof' },
    ],
  },
  {
    name: 'Sports',
    items: [
      { name: 'University of Pretoria High Performance Centre', description: 'Brooks Cottage is only a 15-minute walk from the University of Pretoria High Performance Centre.', address: 'University of Pretoria, Pretoria' },
      { name: 'Loftus Versfeld', description: 'The hallowed home of Pretoria’s favourite rugby team, the Blue Bulls, and host to some of the most exciting teams and players.', },
    ],
  },
  {
    name: 'Gardens',
    items: [
      { name: 'National Zoological Gardens', description: 'The National Zoological Gardens of South Africa is the largest zoo in the country and the only zoo with national status. An aquarium and reptile park are also located here, with the Aquarium as the largest inland marine aquarium in South Africa.' },
      {
        name: 'Pretoria National Botanical Garden',
        description: 'Home to about half of South Africa’s tree species and almost 200 bird species, the Pretoria National Botanical Garden is a must-see for anyone visiting Brooks Cottage. Hours: Daily from 08:00 to 18:00. Phone: +27 (0)12 843 5194.',
        address: '2 Cussonia Avenue, Brummeria, Pretoria',
      },
    ],
  },
  {
    name: 'Art',
    items: [
      { name: 'Anton Smit Sculpture Park', description: 'Pretoria is home to world-renowned artists and art galleries. Anton Smit’s sculpture park just outside Pretoria is a must-see for art lovers.', address: '44 Black Eagle Lane, Bronkhorstspruit Dam, Bronkhorstspruit, 1020 | Tel: 013 590 9074' },
    ],
  },
  {
    name: 'Seasonal Attractions',
    items: [
      { name: 'Jacaranda Trees in Bloom', description: 'Stroll around our neighbourhood in spring and enjoy the spectacular jacaranda trees in full bloom. There is a reason Pretoria is called the Jacaranda City — these bright purple trees are simply gorgeous and visible right outside the front door.' },
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
      <PageMetadata
        title="Location & Attractions"
        path="/location-attractions"
        description="Explore Brooks Cottage in Brooklyn, Pretoria, and discover nearby embassies, shopping, restaurants, universities, and attractions."
      />
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
                    {item.description && <p>{item.description}</p>}
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
