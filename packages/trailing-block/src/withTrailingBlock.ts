import {
  ELEMENT_DEFAULT,
  type PlateEditor,
  type Value,
  type WithPlatePlugin,
  getLastNodeByLevel,
  getPluginType,
  insertElements,
  queryNode,
} from '@udecode/plate-common/server';
import { Path } from 'slate';

import type { TrailingBlockPlugin } from './createTrailingBlockPlugin';

/**
 * Add a trailing block when the last node type is not `type` and when the
 * editor has .
 */
export const withTrailingBlock = <
  V extends Value = Value,
  E extends PlateEditor<V> = PlateEditor<V>,
>(
  editor: E,
  {
    options: { level, type = getPluginType(editor, ELEMENT_DEFAULT), ...query },
  }: WithPlatePlugin<TrailingBlockPlugin, V, E>
) => {
  const { normalizeNode } = editor;

  editor.normalizeNode = ([currentNode, currentPath]) => {
    if (currentPath.length === 0) {
      const lastChild = getLastNodeByLevel(editor, level!);

      const lastChildNode = lastChild?.[0];

      if (
        !lastChildNode ||
        (lastChildNode.type !== type && queryNode(lastChild, query))
      ) {
        const at = lastChild ? Path.next(lastChild[1]) : [0];

        insertElements(editor, editor.blockFactory({}, at), { at });

        return;
      }
    }

    return normalizeNode([currentNode, currentPath]);
  };

  return editor;
};
