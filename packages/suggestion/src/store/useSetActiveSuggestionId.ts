import type { PlateEditor, Value } from '@udecode/plate-common/server';

import { useEditorRef } from '@udecode/plate-common';

import type { SuggestionEditorProps } from '../types';

import { useSuggestionActions } from './SuggestionProvider';

export const useSetActiveSuggestionId = () => {
  const editor = useEditorRef<Value, PlateEditor & SuggestionEditorProps>();
  const setActiveSuggestionId = useSuggestionActions().activeSuggestionId();

  return (value: null | string) => {
    setActiveSuggestionId(value);
    editor.activeSuggestionId = value;
  };
};
