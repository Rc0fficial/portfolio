import Head from 'next/head'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import SpeakingSection from '../speaking'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-4">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow as="time" className="md:hidden" decorate>
          {article.Associated}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
    </article>
  )
}

function ArticlesSection({ title, articles }) {
  return (
    <SpeakingSection title={title}>
      {articles.map((article) => (
        <Article key={article.slug} article={article} />
      ))}
    </SpeakingSection>
  )
}

export default function ArticlesIndex({ articles }) {
  const categories = ['Codeband', 'Stellar Stack', 'Arsol', 'Freelance']

  const categorizedArticles = categories.map((category) => ({
    title: category,
    articles: articles.filter((article) => article.Associated === category),
  }))

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
        {categorizedArticles.map(({ title, articles }) =>
          articles.length > 0 ? (
            <ArticlesSection key={title} title={title} articles={articles} />
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
