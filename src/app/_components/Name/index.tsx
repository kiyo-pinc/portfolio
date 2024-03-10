'use client'

import Image from 'next/image'

export default function Name() {
  return (
    <div className="flex">
      <div className="w-[calc(100%_-_30px)]">
        <p className="text-[24px] font-medium tracking-[.25rem]">清田 響介</p>
        <p className="text-[12px] font-[400] tracking-[.1rem]">
          Kyosuke Kiyota
        </p>
      </div>
      <div className="w-[30px]">
        <a
          href="https://github.com/kiyo-pinc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icon-github.png"
            alt="Github"
            width={30}
            height={30}
            className="h-auto w-full"
          ></Image>
        </a>
      </div>
    </div>
  )
}
