import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  Fiverr,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import Resume from '@/components/Resume'
import Skills from './Skills'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link href={href} passHref legacyBehavior>
        <a
          className="group flex text-sm font-medium text-zinc-800 transition hover:text-yellow-500 dark:text-zinc-200 dark:hover:text-yellow-500"
          target="_blank"
        >
          <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-yellow-500" />
          <span className="ml-4">{children}</span>
        </a>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const HomeComponent = () => {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="flex items-center justify-center lg:pl-20">
            <div className="max-w-xs px-2.5 pt-6 md:pt-0 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>

          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m
              <span className="text-yellow-500"> Arsalan Ali Khattak</span>{' '}
              Software Engineer{' '}
              <span className="text-yellow-500"> Specializing </span> in
              Front-End Development
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Passionate Front-End Developer having experience crafting
                stunning user interfaces and optimizing performance.
              </p>
              <p>
                Specialized in React, Next, Vue, Gatsby, Astro and React Native,
                with expertise in AWS, headless CMS, and data manipulation.
                Skilled in GraphQL, REST API, Redux Toolkit, Zustand, and modern
                UI frameworks like Tailwind and Bootstrap.
              </p>
              <p>
                Experienced in API integrations and cloud services like AWS
                Amplify, Cognito, and S3. Continuously expanding skills to
                create impactful digital experiences that engage and inspire.
              </p>
              <p>
                A collaborative team player with a results-oriented approach,
                staying at the forefront of web development innovations.
              </p>
              <Skills />
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/Rc0fficial" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/rc0fficial/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:to.arsalanali@gmail.com"
                className="mt-3.5"
                icon={MailIcon}
              >
                to.arsalanali@gmail.com
              </SocialLink>
              <SocialLink
                href="https://www.fiverr.com/arsalanali248"
                className="mt-3.5"
                icon={Fiverr}
              >
                Fiverr
              </SocialLink>
            </ul>
            <div className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
              <Resume />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
