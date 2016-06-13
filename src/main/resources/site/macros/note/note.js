var portal = require('/lib/xp/portal');
var common = require('/lib/panel-common');

exports.macro = function (context) {
    return common.renderPanel(context, portal, 'macro-panel-note');
};