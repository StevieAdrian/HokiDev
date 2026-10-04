import { Fragment, type ReactNode } from 'react';
import Link from 'next/link';

import { headingId, type Block } from '@/features/blog/data';

const inlinePattern = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;

function Inline({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let cursor = 0;
  for (const match of text.matchAll(inlinePattern)) {
    const [whole, label, href, bold] = match;
    const index = match.index ?? 0;
    if (index > cursor) parts.push(text.slice(cursor, index));
    if (bold) {
      parts.push(<strong key={index}>{bold}</strong>);
    } else if (href.startsWith('/')) {
      parts.push(
        <Link key={index} href={href}>
          {label}
        </Link>,
      );
    } else {
      parts.push(
        <a key={index} href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>,
      );
    }
    cursor = index + whole.length;
  }
  if (cursor < text.length) parts.push(text.slice(cursor));
  return <>{parts}</>;
}

export function RichText({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2 key={index} id={headingId(block.text)}>
                <Inline text={block.text} />
              </h2>
            );
          case 'h3':
            return (
              <h3 key={index}>
                <Inline text={block.text} />
              </h3>
            );
          case 'p':
            return (
              <p key={index}>
                <Inline text={block.text} />
              </p>
            );
          case 'callout':
            return (
              <aside key={index} className="blog-callout">
                <Inline text={block.text} />
              </aside>
            );
          case 'ul':
          case 'ol': {
            const List = block.type;
            return (
              <List key={index}>
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Inline text={item} />
                  </li>
                ))}
              </List>
            );
          }
          default:
            return <Fragment key={index} />;
        }
      })}
    </>
  );
}
