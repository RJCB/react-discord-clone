import { DownloadIcon } from '@heroicons/react/outline'
import React from 'react'
import { ReactComponent as BgMountains } from '../assets/discord-bg-mountains.svg';
import { ReactComponent as BgImage1 } from '../assets/discord-bg-1.svg';
import { ReactComponent as BgImage2 } from '../assets/discord-bg-2.svg';

const Hero = () => {
  return (
      <div className="bg-discord_blue pb-8 md:pb-0">
          <div className="p-7 py-9 md:h-[80vh] md:flex relative lg:justify-center">
              <div className="flex flex-col gap-7 md:max-w-md lg:max-w-none lg:justify-center">
                  <h1 className="text-6xl text-white font-extrabold">IMAGINE A PLACE...</h1>
                  <h2 className="text-white text-lg font-light tracking-wide lg:max-w-3xl w-full">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</h2>
                  <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row md:items-start sm:items-center gap-6">
                      <button className="homepage-btns bg-white w-60 hover:text-discord_blurple"><DownloadIcon className="w-6 mr-2" />Download for Mac</button>
                      <button className="homepage-btns bg-gray-900 text-white w-72 hover:shadow-2xl hover:bg-gray-800 ">Open Discord in your browser</button>
                  </div>
              </div>
              <div className="relative md:absolute md:top-0 md:left-0 md:h-full md:w-full z-0 overflow-hidden">
                  <BgMountains className="hidden absolute md:block left-1/2 top-auto bottom-0 md:-ml-[1320px] lg:-ml-[1280px]"/>
                  <BgImage1 className="relative block max-w-[880px] w-full z-1 -ml-[80px] md:hidden lg:absolute lg:bottom-0 lg:left-1/2 lg:h-auto lg:w-auto lg:max-w-none lg:-ml-[1030px] lg:transform-none lg:block"/>
                  <BgImage2 className="absolute bottom-0 hidden md:block left-1/2 -ml-[70px] lg:ml-[370px]"/>
              </div>
          </div>
      </div>
  )
}

export default Hero