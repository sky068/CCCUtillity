(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/TestRotateAction.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c9f7bxR70tJ5oEysw4wOlbg', 'TestRotateAction', __filename);
// Script/TestRotateAction.js

"use strict";

/**
 * Created by xujiawei on 2020-03-13 19:36:25
 */

cc.Class({
    extends: cc.Component,

    properties: {
        testNode: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    onBtnRun: function onBtnRun() {
        var be = cc.bezierTo(3, [cc.v2(-150, 600), cc.v2(150, -600), cc.v2(500, 380)]);
        this.testNode.runAction(cc.rotateAciton(be));
    },
    onBtnReset: function onBtnReset() {
        this.testNode.stopAllActions();
        this.testNode.position = cc.v2(-530, -206);
        this.testNode.angle = 0;
    }

    // update (dt) {},

});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=TestRotateAction.js.map
        