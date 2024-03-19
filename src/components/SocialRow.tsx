import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaSpotify } from 'react-icons/fa'
import Icon from './Icon'

function SocialRow () {
  return (
    <div className="absolute top-9 right-32 flex bg-zinc-900 gap-3 p-2 rounded-lg opacity-50">
      <a
        href="https://github.com/Erik-Johansson-Barlund"
        target="_blank"
        rel="noopener noreferrer"
        >
        <Icon
        icon={<FaGithub />}
        isLarge={false}
        navigate={(): void => { }}
      />
      </a>
      <a
        href="https://www.linkedin.com/in/erik-johansson-bärlund/"
        target="_blank"
        rel="noopener noreferrer"
        >
        <Icon
        icon={<FaLinkedin />}
        isLarge={false}
        navigate={(): void => { }}
      />
      </a>
      <a
        href="https://open.spotify.com/playlist/34dO8YKcdLeCAfrfvknPqM?si=f611dd9bca634540"
        target="_blank"
        rel="noopener noreferrer"
        >
        <Icon
        icon={<FaSpotify className="text-green-500" />}
        isLarge={false}
        navigate={(): void => { }}
      />
      </a>
    </div>
  )
}

export default SocialRow
