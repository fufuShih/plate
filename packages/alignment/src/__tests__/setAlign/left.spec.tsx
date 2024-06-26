/** @jsx jsx */

import { type PlateEditor, createPlateEditor } from '@udecode/plate-common';
import { jsx } from '@udecode/plate-test-utils';

import { createAlignPlugin } from '../../shared/createAlignPlugin';
import { setAlign } from '../../shared/transforms/index';

jsx;

const input = (
  <editor>
    <hp align="center">
      test
      <cursor />
    </hp>
  </editor>
) as any as PlateEditor;

const output = (
  <editor>
    <hp>test</hp>
  </editor>
) as any as PlateEditor;

it('should remove align prop', () => {
  const editor = createPlateEditor({
    editor: input,
    plugins: [createAlignPlugin()],
  });

  setAlign(editor, { value: 'start' });

  expect(editor.children).toEqual(output.children);
});
