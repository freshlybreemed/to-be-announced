import React from 'react';
import { convertFromRaw, convertToRaw } from 'draft-js';
import { convertToHTML, convertFromHTML } from 'draft-convert';
import {
  DraftailEditor,
  BLOCK_TYPE,
  INLINE_STYLE,
  ENTITY_TYPE,
} from 'draftail';

interface EventProps {
  description: string;
  setDescription: any;
}
export const Editor: React.FunctionComponent<EventProps> = ({
  setDescription,
  description,
}) => {
  if (process.browser) {
    console.log(JSON.parse(sessionStorage.getItem('draftail:content')));
  }
  const onSave = (content) => {
    setDescription(toHTML(content));
    window.sessionStorage.setItem('draftail:content', JSON.stringify(content));
  };

  console.log(description);

  const exporterConfig = {
    blockToHTML: (block) => {
      if (block.type === BLOCK_TYPE.BLOCKQUOTE) {
        return <blockquote />;
      }

      // Discard atomic blocks, as they get converted based on their entity.
      if (block.type === BLOCK_TYPE.ATOMIC) {
        return {
          start: '',
          end: '',
        };
      }

      return null;
    },

    entityToHTML: (entity, originalText) => {
      if (entity.type === ENTITY_TYPE.LINK) {
        return <a href={entity.data.url}>{originalText}</a>;
      }

      if (entity.type === ENTITY_TYPE.IMAGE) {
        return <img src={entity.data.src} alt={entity.data.alt} />;
      }

      if (entity.type === ENTITY_TYPE.HORIZONTAL_RULE) {
        return <hr />;
      }

      return originalText;
    },
  };
  const importerConfig = {
    htmlToEntity: (nodeName, node, createEntity) => {
      // a tags will become LINK entities, marked as mutable, with only the URL as data.
      if (nodeName === 'a') {
        return createEntity(ENTITY_TYPE.LINK, 'MUTABLE', { url: node.href });
      }

      if (nodeName === 'img') {
        return createEntity(ENTITY_TYPE.IMAGE, 'IMMUTABLE', {
          src: node.src,
        });
      }

      if (nodeName === 'hr') {
        return createEntity(ENTITY_TYPE.HORIZONTAL_RULE, 'IMMUTABLE', {});
      }

      return null;
    },
    htmlToBlock: (nodeName) => {
      if (nodeName === 'hr' || nodeName === 'img') {
        // "atomic" blocks is how Draft.js structures block-level entities.
        return 'atomic';
      }

      return null;
    },
  };

  const toHTML = (raw) =>
    raw ? convertToHTML(exporterConfig)(convertFromRaw(raw)) : '';

  const fromHTML = (html) =>
    convertToRaw(convertFromHTML(importerConfig)(html));

  return (
    <DraftailEditor
      rawContentState={description.length > 0 ? fromHTML(description) : null}
      onSave={onSave}
      blockTypes={[
        { type: BLOCK_TYPE.HEADER_THREE },
        { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
      ]}
      inlineStyles={[
        { type: INLINE_STYLE.BOLD },
        { type: INLINE_STYLE.ITALIC },
      ]}
    />
  );
};
