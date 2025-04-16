import Image from 'next/image';

import Heading from '../components/Heading';
import HighlightText from '../components/HighlightText';

import usesBanner from '../public/images/uses/banner.jpg';

export default function uses() {
  return (
    <div className='dark:bg-darker'>
      <main className='lg:max-w-[80%] mx-auto p-2 dark:text-white'>
        <div className='p-4'>
          <Image
            height={550}
            objectFit='cover'
            src={usesBanner}
            alt='user-banner'
          />
          <div className='mt-7'>
            <div className='w-full flex justify-start items-center'>
              <Heading headingText='Uses' />
            </div>
            <div className='font-lobsterTwo text-gray-700 flex justify-start items-center space-x-12 mt-3'>
              <p className='text-lg'>December 12, 2019</p>
              <p>Other</p>
            </div>

            <ul className='uses-container'>
              <li>
                I have getting question about what I use for coding, apps I use
                and so much.
              </li>
              <li>
                I mostly change my settings to fit my current work depending on
                what I am doing. If if I am creating a website or creating a
                mobile app or even web scrapping.
              </li>
              <li>
                And if you have something you want to know just let me know{' '}
                <a href='mailto:chrispydev.owusu@gmail.com'>
                  <HighlightText highlightText='chrispydev.owusu@gmail.com .' />
                </a>
              </li>
            </ul>
            <div className='mt-8'>
              <div className='w-full flex justify-start items-center'>
                <Heading headingText='Machine & OS' />
              </div>
              <ul className='uses-container'>
                <li>
                  My machine of choice is{' '}
                  <HighlightText highlightText='Dell Latitude E7240 00 .' />{' '}
                  Which runs on a ubuntu Ubuntu 20.04.4 LTS x86_64 since I am a
                  linux user. I prefer linux or unix over windows because of
                  some past experience with windows.
                </li>
                <li>
                  I also started using garuda linux which is arch based linux
                  and awesome for coding and gaming.
                  <a href='https://garudalinux.org/'>
                    <HighlightText highlightText='Garuda Linux  .' />{' '}
                  </a>
                  Plus you get any application you want to install with their
                  AUR and there is nothing like bloatware. Just like what you
                  get on other operating systems.
                </li>
              </ul>
              <div className='w-full flex justify-start items-center'>
                <Heading headingText='Desktop App' />
              </div>
              <ul className='uses-container'>
                <li>
                  <a href='https://code.visualstudio.com/'>
                    <HighlightText highlightText='Vscode' /> is my day to day
                    app
                  </a>
                  for coding. I do almost everything with vscode. With the
                  exception of python heavy app which I use pycharm for. I use
                  this because it has a lot of extensions for any kind of
                  project you are doing whether it is Web, Mobile, AI or even
                  Data Science.
                </li>
                <li>
                  For terminal I
                  <a href='https://hyper.is/'>
                    <HighlightText highlightText='HyperTerminal .' />
                  </a>
                  Which is great and boost productivity. I get this immediately
                  when I install a new OS.
                </li>
                <li>
                  <a href='https://github.com/alacritty/alacritty'>
                    <HighlightText highlightText='Alacrity .' />
                  </a>
                  The best terminal emulator for arch linux on my point of view.
                  It is a fast, cross-platform, OpenGL terminal emulator.
                </li>
                <li>
                  <a href='https://developer.android.com/studio/intro'>
                    <HighlightText highlightText='Android Studio Code .' />
                  </a>
                  As everyone know this is used for building app. I use this
                  mainly for flutter applications. I thank God that flutter is
                  so popular and that I can use it for church projects.
                </li>
                <li>
                  I also use{' '}
                  <a href='https://albertlauncher.github.io/installing/'>
                    <HighlightText highlightText='Albert Search' />
                  </a>
                  for searching apps and on the web and sometimes use it for
                  calculations.
                </li>
                <li>
                  My browser of choice is{' '}
                  <a href='https://www.google.com/chrome/?brand=BNSD&gclid=Cj0KCQiAmeKQBhDvARIsAHJ7mF4Gde837R05zmnze00ChHTZ9gKEkYSP3SPhPc0Igt-hWueYVAqYET0aAnaZEALw_wcB&gclsrc=aw.ds'>
                    <HighlightText highlightText=' google chrome' />
                  </a>{' '}
                  and{' '}
                  <a href='https://www.mozilla.org/en-US/firefox/new/'>
                    <HighlightText highlightText='firefox .' />
                  </a>
                  They all have their own props👍 and cons👎 in terms of
                  developments. One can do things better than other so I keep
                  these two all the time.
                </li>
                <li>
                  <a href='https://discord.com/'>
                    <HighlightText highlightText='Discord' />
                  </a>{' '}
                  app is my way of keeping up to date with the community I am
                  connected to.
                </li>
              </ul>
              <div className='w-full flex justify-start items-center'>
                <Heading headingText='Services for Hosting' />
              </div>
              <ul className='uses-container'>
                <li>
                  <a href='https://docs.github.com/en/pages/quickstart'>
                    <HighlightText highlightText='Github Pages' />
                  </a>
                  Github pages is free and allows everyone to host their static
                  websites for free and even add a domain name as well. And I
                  have being using this for more two days before moving to
                  vercel and netlify.
                </li>
                <li>
                  <a href='https://www.netlify.com/'>
                    <HighlightText highlightText='Netlify' />
                  </a>
                  is very popular when it comes to web hosting and free services
                  up to some point. Even though some know them as static web
                  hosting, they offer a wide rages of functions which are known
                  as serverless functions. They do all the hardwork and the
                  logic for you.
                </li>
                {/* correct the spell of favorite */}
                <li>
                  My favorite web hosting services now is
                  <a href='https://vercel.com/'>
                    <HighlightText highlightText='Vercel' />
                  </a>
                  and they are already configured for nextjs and its easy to use
                  with easy user interface.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
