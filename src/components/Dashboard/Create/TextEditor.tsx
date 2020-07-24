import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
const importJodit = () => import('jodit-react');

const JoditEditor = dynamic(importJodit, {
  ssr: false,
});
interface TextEditorProps {
  description: string;
  setDescription: any;
}
export const TextEditor: React.FunctionComponent<TextEditorProps> = ({
  setDescription,
  description,
}) => {
  const editor = useRef(null);

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
    showCharsCounter: false,
    showWordsCounter: false,
    direction: 'ltr',
    defaultActionOnPaste: 'insert_only_text',
    askBeforePasteHTML: false,
    buttons:
      ',,,,italic,|,ul,ol,|,font,,image,file,video,table,link,align,|,hr,symbol,fullsize,print,about',
    buttonsMD: 'bold,link,image,|,paragraph,\n,align,|,dots',
    buttonsXS: 'bold,link,align,undo,redo,|',
    buttonsSM: 'bold,link,image,|,paragraph,,\n,align,|',
  };

  return (
    <JoditEditor
      ref={editor}
      value={description}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={(newContent) => setDescription(newContent)} // preferred to use only this option to update the content for performance reasons
    />
  );
};
