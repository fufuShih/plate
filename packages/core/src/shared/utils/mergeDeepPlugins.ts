import type { Value } from '@udecode/slate';

import defaultsDeep from 'lodash/defaultsDeep.js';
import keyBy from 'lodash/keyBy.js';
import merge from 'lodash/merge.js';
import values from 'lodash/values.js';

import type { PlateEditor } from '../types/PlateEditor';
import type { WithPlatePlugin } from '../types/plugin/PlatePlugin';

/** Recursively merge nested plugins into the root plugins */
export const mergeDeepPlugins = <
  V extends Value = Value,
  E extends PlateEditor<V> = PlateEditor<V>,
  P extends WithPlatePlugin<{}, V, E> = WithPlatePlugin<{}, V, E>,
>(
  editor: E,
  _plugin: P
): P => {
  const plugin = { ..._plugin };

  const { then } = plugin;

  if (then) {
    delete plugin.then;

    const { plugins: pluginPlugins } = plugin;

    const pluginThen = mergeDeepPlugins<V, E, P>(
      editor,
      defaultsDeep(then(editor, plugin), plugin)
    );

    // merge plugins by key
    if (pluginPlugins && pluginThen.plugins) {
      const merged = merge(
        keyBy(pluginPlugins, 'key'),
        keyBy(pluginThen.plugins, 'key')
      );

      pluginThen.plugins = values(merged);
    }

    return pluginThen;
  }

  return plugin;
};
