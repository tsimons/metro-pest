import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import classNames from 'classnames'

import Figure from './figure'
import Slideshow from './slideshow'

import typography from '../typography.module.css'

const serializers = {
  marks: {
    link (props) {
      return (
        <a className={typography.a} href={props.mark.href} key={props.mark._key}>
          {props.children}
        </a>
      )
    }
  },
  list ({ children }) {
    return <ul className={typography.list}>{children}</ul>
  },
  listItem ({ listItem, children }) {
    return <li className={typography.li}>{children}</li>
  },
  types: {
    block (props) {
      switch (props.node.style) {
        case 'h1':
          return <h1 className={typography.title1}>{props.children}</h1>

        case 'h2':
          return <h2 className={typography.title2}>{props.children}</h2>

        case 'h3':
          return <h3 className={typography.title3}>{props.children}</h3>

        case 'h4':
          return <h4 className={typography.title4}>{props.children}</h4>

        case 'blockquote':
          return <blockquote className={typography.blockQuote}>{props.children}</blockquote>

        case 'large':
          return <p className={typography.large}>{props.children}</p>

        default:
          return <p className={typography.paragraph}>{props.children}</p>
      }
    },
    figure (props) {
      return <Figure {...props.node} />
    },
    slideshow (props) {
      return <Slideshow {...props.node} />
    }
  }
}

const BlockContent = ({ blocks, className }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} />
)

export default BlockContent
