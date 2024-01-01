import React, { ReactNode, useEffect, useMemo, useState } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'

import { useGlobalTheme } from './theming'

import CodeMockup from '../src/CodeMockup'
import Navbar from '../src/Navbar'
import Tabs from '../src/Tabs'
import Theme from '../src/Theme'

type Props = {
  children: ReactNode | ReactNode[]
  title: string
  description: string
  source: string
}

const StoryLayout = ({ children, title, description, source }: Props) => {
  const globalTheme = useGlobalTheme()

  useEffect(() => {
    document
      .getElementsByTagName('html')[0]
      .setAttribute('data-theme', globalTheme)
  }, [globalTheme])

  const Code = () =>
    useMemo(
      () => (
        <Highlight {...defaultProps} theme={theme} code={source} language="jsx">
          {({ tokens, getLineProps, getTokenProps }) => (
            <pre slot="html">
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      ),
      [theme, source]
    )

  return (
    <Theme dataTheme={globalTheme} className="w-full h-screen p-8 bg-base-100">
      <Navbar className="p-0 border-b border-neutral text-base-content">
        <Navbar.Start>
          <span className="text-lg font-bold">react-daisyui</span>
        </Navbar.Start>
      </Navbar>

      <div className="w-full h-full my-4">
        <h1 className="text-4xl text-base-content font-bold">{title}</h1>
        <p className="text-base-content">{description}</p>
        <div className="my-4">
          {/* Mobile view */}
          <div className="block sm:hidden">
            {children}
            <CodeMockup className="w-full mb-8 mt-3">
              <Code />
            </CodeMockup>
          </div>

          {/* Desktop view */}
          <div className="hidden sm:grid">
            <Tabs className="z-10 -mb-px" variant="lifted">
              <Tabs.RadioTab
                name="content"
                label="Preview"
                defaultChecked={true}
                className="checked:[--tab-bg:var(--fallback-b1,oklch(var(--b1)))] checked:!border-base-300  
                          [--tab-border-color:transparent]"
                contentClassName="overflow-x-auto"
              >
                <div
                  className="preview border-base-300 bg-base-100 rounded-se-box rounded-b-box
                            flex min-h-[6rem] min-w-[18rem] flex-wrap items-center justify-center gap-2
                            overflow-x-hidden overflow-y-hidden border bg-cover bg-top p-4"
                >
                  {children}
                </div>
              </Tabs.RadioTab>
              <Tabs.RadioTab
                name="content"
                label="HTML"
                className="[--tab-border-color:transparent] [--tab-bg:var(--fallback-n,oklch(var(--n)))] 
                checked:[--tab-color:var(--fallback-nc,oklch(var(--nc)))]
                checked:[--tab-border-color:var(--fallback-n,oklch(var(--n)))]"
                contentClassName="overflow-x-auto"
              >
                <CodeMockup className="w-full mb-8">
                  <Code />
                </CodeMockup>
              </Tabs.RadioTab>
            </Tabs>
          </div>
        </div>
      </div>
    </Theme>
  )
}

export default StoryLayout
