import React from 'react';

import { DraftailEditor, BLOCK_TYPE, INLINE_STYLE } from 'draftail';

export const Editor: React.FunctionComponent = () => {
  const initial = JSON.parse(window.sessionStorage.getItem('draftail:content'));

  const onSave = (content) => {
    console.log('saving', content);
    window.sessionStorage.setItem('draftail:content', JSON.stringify(content));
  };

  return (
    <DraftailEditor
      rawContentState={initial || null}
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
