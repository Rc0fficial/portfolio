import Head from 'next/head'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import SpeakingSection from '../speaking'
import Image from 'next/image'
import stellarstack from '@/images/logos/stellarstack.webp'
import logoCosmos from '@/images/logos/cosmos.svg'
import codeband from '@/images/logos/codeband.png'
import fiverr from '@/images/logos/fiverr.svg'
import arsol from '@/images/logos/arsol.png'

const History = [
  {
    name: 'Freelance',
    description:
      "Throughout my freelance career on platforms like Fiverr, I've had the opportunity to work on a multitude of projects individually, leveraging a wide array of technologies. These experiences have honed my skills in front-end development, back-end integration, and content management. Here are some of the key technologies and projects I've worked on",
    // link: { href: 'http://planetaria.tech', label: 'planetaria.tech' },
    logo: fiverr,
  },
  {
    name: 'StellarStack',
    description:
      "At Stellar Stack, I was Full Stack Front-End Developer, specialize in building dynamic web applications using modern technologies, particularly the React ecosystem. My expertise lies in integrating and creating headless CMS solutions to develop seamless front-end and back-end experiences. I'm passionate about innovative web development and delivering impactful, efficient solutions. During my time here, I've worked on multiple web apps and projects, some of which are listed below",
    // link: { href: 'http://planetaria.tech', label: 'planetaria.tech' },
    logo: stellarstack,
  },
  {
    name: 'CodeBand',
    description:
      "Contributed as a front-end developer with expertise in Next.js, React.js, Strapi.js, and Tailwind CSS. Focused on enhancing user experience and delivering high-quality projects on time and within budget. Dedicated to staying current with the latest technologies and industry best practices. Some of the projects I've worked on with Codeband are listed below.",
    logo: codeband,
  },
  {
    name: 'Arsol',
    description:
      'Gained hands-on experience in front-end development using React.js, Next.js, HTML, CSS, Tailwind CSS, and MySQL. Developed responsive web applications, collaborated with cross-functional teams, and contributed to optimizing the user interface for better performance and accessibility. Enhanced skills in modern front-end technologies and best practices.',
    logo: arsol,
  },
]

function Projects({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-4">
        <Card.Title href={`/projects/${article.slug}`}>
          {article.title}
        </Card.Title>
        {/* <Card.Eyebrow as="time" className="md:hidden" decorate>
          {article.Associated}
        </Card.Eyebrow> */}
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
    </article>
  )
}

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function ArticlesSection({ id, title, articles }) {
  return (
    <SpeakingSection id={id} title={title}>
      {articles.map((article) => (
        <Projects key={article.slug} article={article} />
      ))}
    </SpeakingSection>
  )
}

export default function ArticlesIndex({ articles }) {
  const categories = ['CodeBand', 'StellarStack', 'Arsol', 'Freelance']

  const categorizedArticles = categories.map((category) => ({
    title: category,
    articles: articles.filter((article) => article.Associated === category),
  }))

  const handleCardClick = (event, id) => {
    event.preventDefault() // Prevent default anchor behavior
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center', // Center the element vertically in the viewport
      })
    }
  }

  return (
    <>
      <Head>
        <title>Articles - Arsalan</title>
        <meta
          name="description"
          content="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
        />
      </Head>
      <SimpleLayout
        title="Writing on software design, company building, and the aerospace industry."
        intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {History.map((project) => (
            <a
              href={`#${project.name}`}
              key={project.name}
              onClick={(e) => handleCardClick(e, project.name)}
            >
              <Card as="li" key={project.name}>
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                    src={project.logo}
                    alt=""
                    className="h-8 w-8 rounded-full"
                    unoptimized
                  />
                </div>

                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  {/* <Card.Link href={project.link.href}>{project.name}</Card.Link> */}
                  {project.name}
                </h2>
                <Card.Description>{project.description}</Card.Description>
                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-yellow-500 dark:text-zinc-200">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  {/* <span className="ml-2">{project.link.label}</span> */}
                </p>
              </Card>
            </a>
          ))}
        </ul>

        {categorizedArticles.map(({ title, articles }) =>
          articles.length > 0 ? (
            <ArticlesSection
              id={title}
              key={title}
              title={title}
              articles={articles}
            />
          ) : null
        )}
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  const allArticles = await getAllArticles()
  const articles = allArticles.map(({ component, ...meta }) => meta)

  return {
    props: {
      articles,
    },
  }
}
