var portal = require('/lib/xp/portal');

exports.macro = function (context) {
    var stylingParam = context.params['styling'],
        applyStyling = !stylingParam || stylingParam == 'true',
        typeParam = context.params['type'],
        macroBody = context.body;

    var contributions;
    if (applyStyling) {
        contributions = {
            headEnd: [
                '<link rel="stylesheet" href="' + portal.assetUrl({path: 'css/panel.css', application: app.name}) + '" type="text/css" />',
                '<link rel="stylesheet" href="' + portal.assetUrl({path: 'css/icons.css', application: app.name}) + '" type="text/css" />'
            ]
        };
    }

    var stylingClass = applyStyling ? 'macro-panel-styled' : '',
        typeClass = 'macro-panel-' + ((!typeParam || typeParam.trim().length == 0) ? 'default' : typeParam);

    return {
        body: '<div class="macro-panel ' + typeClass + ' ' + stylingClass + '"><i class="icon"></i>' + macroBody + '</div>',
        pageContributions: contributions
    }
};