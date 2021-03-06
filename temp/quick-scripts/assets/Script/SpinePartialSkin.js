(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/SpinePartialSkin.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7e1d4I6WVZKQZwMTUjlMCS+', 'SpinePartialSkin', __filename);
// Script/SpinePartialSkin.js

'use strict';

/**
 * Created by xujiawei on 2020-03-13 19:53:30
 */

cc.Class({
    extends: cc.Component,

    properties: {
        taotao: sp.Skeleton,
        tailGroup: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        this.initSkin();
    },
    initSkin: function initSkin() {
        // todo: 根据保存的数据初始化皮肤
        var tailTag = 1;
        var tailName = 'weiba-zhi' + (tailTag != 1 ? '-' + tailTag : '');
        this.onTailBeSelected(null, tailName);

        var toggle = this.tailGroup.getChildByName('toggle' + tailTag).getComponent(cc.Toggle);
        toggle.isChecked = true;
    },
    onTailBeSelected: function onTailBeSelected(target, data) {
        cc.log('tail:', data);
        this.changePartialCloth(this.taotao, 'weiba-zhi', 'default', data);

        if (target) {
            // zy.audio.playEffect(zy.audio.Effect.CommonClick);
        }
    },


    // 局部换装
    changePartialCloth: function changePartialCloth(skeleton, slotName, targetSkinName, targetAttaName) {
        console.log('change cloth:', slotName, targetSkinName, targetAttaName);
        var slot = skeleton.findSlot(slotName);
        var skeletonData = skeleton.skeletonData.getRuntimeData();
        var skin = skeletonData.findSkin(targetSkinName);
        var slotIndex = skeletonData.findSlotIndex(slotName);
        var atta = skin.getAttachment(slotIndex, targetAttaName);
        slot.setAttachment(atta);
    }
}

// update (dt) {},
);

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
        //# sourceMappingURL=SpinePartialSkin.js.map
        