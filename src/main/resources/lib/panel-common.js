function renderPanel(context, portal, panelStyle) {
    var panelHeader = context.params['header'],
        panelBody = context.body;

    var config = portal.getSiteConfig();
    var custom = config && config['custom'];

    var contributions;
    if (!custom) {
        contributions = {
            headEnd: [
                '<link rel="stylesheet" href="' + portal.assetUrl({path: 'css/panel.css', application: app.name}) + '" type="text/css" />'
            ]
        };
    }

    var stylingClass = !custom ? 'macro-panel-styled' : '';
    var headerEl = panelHeader && panelHeader.trim().length > 0 ? ('<strong>' + panelHeader + '</strong>') : '';

    return {
        body: '<div class="macro-panel ' + panelStyle + ' ' + stylingClass + '"><i class="icon"></i>' + headerEl + panelBody + '</div>',
        pageContributions: contributions
    }
}


exports.renderPanel = renderPanel;