import {
    PageContributions,
    Response,
} from '@enonic-types/core';
import {assetUrl} from '/lib/enonic/asset';
import {getSiteConfig} from '/lib/xp/portal';


interface PanelMacrosSiteConfig {
    custom?: boolean
}

export interface MacroContext {
    params: {
        header: string
    }
    body: string
}

type PanelStyle =
    | 'macro-panel-default'
    | 'macro-panel-error'
    | 'macro-panel-info'
    | 'macro-panel-note'
    | 'macro-panel-success'
    | 'macro-panel-warning';


export function renderPanel(context: MacroContext, panelStyle: PanelStyle): Response {
    const panelHeader = context.params['header'];
    const panelBody = context.body;

    const config = getSiteConfig<PanelMacrosSiteConfig>() ?? {};
    const {custom} = config;

    let contributions: PageContributions;
    if (!custom) {
        contributions = {
            headEnd: [
                `<link rel="stylesheet" href="${assetUrl({path: 'css/panel.css'})}" type="text/css" />`
            ]
        };
    }

    const stylingClass = !custom ? 'macro-panel-styled' : '';
    const headerEl = panelHeader && panelHeader.trim().length > 0 ? (`<strong>${panelHeader}</strong>`) : '';

    return {
        body: `<div class="macro-panel ${panelStyle} ${stylingClass}"><i class="icon"></i>${headerEl}${panelBody}</div>`,
        pageContributions: contributions
    }
}
