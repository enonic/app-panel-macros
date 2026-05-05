import type {MacroContext} from '/lib/panel-common';

import {renderPanel} from '/lib/panel-common';

export const macro = (context: MacroContext) => renderPanel(context, 'macro-panel-error');