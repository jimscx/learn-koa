var register = require('babel-core/register');

/**
 *用Babel转码时，需要指定presets和plugins。
 *presets是规则,plugins可以指定插件来定制转码过程，一个preset就包含了一组指定的plugin.
*/

register({
    presets: ['stage-3']
});

require('./app.js');