import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

function Header() {
  const { resolvedTheme, setTheme, theme } = useTheme()
  const [mounted, mountedSet] = useState<boolean>(false)
  useEffect(() => {
    mountedSet(true)
  }, [])
  return (
    <header className="w-full border-b dark:border-gray-500">
      <div className=" mx-auto flex max-w-7xl justify-between p-5">
        <h1 className="cursor-pointer text-lg font-bold">Sublog</h1>
        <div className="flex items-center justify-center">
          <div className="flex cursor-pointer items-center justify-center">
            {mounted && (
              <>
                <div
                  className={`darkModeContainer ${
                    resolvedTheme === 'dark' && 'hidden'
                  }`}
                  onClick={() => setTheme('dark')}
                >
                  <p>🌞</p>
                </div>
                <div
                  className={`darkModeContainer ${
                    resolvedTheme === 'light' && 'hidden'
                  } dark:border-gray-500`}
                  onClick={() => setTheme('light')}
                >
                  <p>🌙</p>
                </div>
              </>
            )}
          </div>
          <div className="ml-5 flex cursor-pointer items-center justify-center rounded-2xl border border-gray-300 p-2 dark:border-gray-500">
            <p>Sign up</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
