import React from 'react';

type IContextComposerProps = {
  contexts: React.ReactElement[];
};

const ContextComposer: React.FC<IContextComposerProps> = ({ contexts, children }) => {
  return (
    <>
      {contexts.reduce((child, parent) => {
        return React.cloneElement(parent,{},child);
      }, children)}
    </>
  );
};

export default ContextComposer;
