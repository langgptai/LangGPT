import React from 'react'
import Link from 'next/link'

import { COLORS } from '../lib/constants'

const Footer = () => (
  <footer role="contentinfo" className="mt3">
    <nav className="mt3">
      <Link href="https://www.langgpt.ai" prefetch={false}>
        <a className="link" href="/about">
          About
        </a>
      </Link>
      <a className="link" href="https://github.com/langgptai/PromptShow">
        Source
      </a>
      <a className="link" href="https://github.com/langgptai/PromptShow">
        Terms
      </a>
      <a className="link" href="/privacy">
        Privacy
      </a>
      <a className="link" href="/offsets">
        Offsets
      </a>
      {/* <span className="new">New</span> */}
    </nav>

    <div className="mt2 mb2">
      Created by{' '}
      <a className="author-link" href="https://github.com/langgptai">
        @LangGPT.ai
      </a>{' '}
      ¬
    </div>
    <style jsx>
      {`
        footer {
          font-size: 18px;
          text-align: center;
        }

        footer > div {
          text-align: center;
          color: ${COLORS.GRAY};
        }

        nav {
          margin: 0 auto;
        }

        a {
          margin-right: 1rem;
        }

        a:last-child {
          margin-right: 0;
        }

        .new {
          position: absolute;
          margin: -4px 0 0 -12px;
          padding: 1px 3px;
          color: ${COLORS.SECONDARY};
          background: #cd3f45; /* COLORS.DARK_RED? */
          border-radius: 3px;
          font-size: 8px;
          font-weight: 600;
          line-height: 1.3;
          text-transform: uppercase;
          user-select: none;
        }

        .author-link {
          color: ${COLORS.PRIMARY};
          text-decoration: none;
        }

        .author-link:hover {
          color: #fff;
        }
      `}
    </style>
  </footer>
)

export default Footer
