function renderPanel(context, portal, panelStyle) {
    var stylingParam = context.params['styling'],
        applyStyling = !stylingParam || stylingParam == 'true',
        panelBody = context.body;

    var contributions;
    if (applyStyling) {
        contributions = {
            headEnd: [
                '<link rel="stylesheet" href="' + portal.assetUrl({path: 'css/panel.css', application: app.name}) + '" type="text/css" />'
            ]
        };
    }

    var stylingClass = applyStyling ? 'macro-panel-styled' : '';

    return {
        body: '<div class="macro-panel ' + panelStyle + ' ' + stylingClass + '"><i class="icon"></i>' + panelBody + '</div>',
        pageContributions: contributions
    }
}


exports.renderPanel = renderPanel;