(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Component/RotateAction.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '97ae57nsoFNMoPSPQgYAvQp', 'RotateAction', __filename);
// Script/RotateAction.js

"use strict";

/**
 * Created by xujiawei on 2020-03-13 12:08:52
 * 包装动作，用来包装move，besizer等动作, 用来在执行动作过程中更新节点角度
 */

var RotateAction = cc.Class({
    extends: cc.ActionInterval,

    __ctor__: function __ctor__(action) {
        this._elapsed = 0;
        this._innerAction = null;
        this._innerTarget = null;
        action && this.initWithAction(action);
    },
    initWithAction: function initWithAction(action) {
        if (!action) {
            cc.errorID(1026);
            return false;
        }

        this._innerAction = action;
        return true;
    },
    clone: function clone() {
        var action = new RotateAction();
        this._cloneDecoration(action);
        action.initWithAction(this._innerAction.clone());
        return action;
    },
    startWithTarget: function startWithTarget(target) {
        this._innerTarget = target;
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this._innerAction.startWithTarget(target);
    },
    step: function step(dt) {
        var prePos = this._innerTarget.getPosition();
        this._innerAction.step(dt);
        var curPos = this._innerTarget.getPosition();

        // 更新角度
        var dis = curPos.subSelf(prePos);
        dis = dis.normalizeSelf();
        // 默认方向为（0，1）即y轴朝上为0度
        var origin = cc.v2(0, 1);

        var r = origin.signAngle(dis);
        var angle = cc.misc.radiansToDegrees(r);
        // cc.log("angle:", angle);
        this._innerTarget.angle = angle;

        this._elapsed += dt;
    },


    /*
     * Set inner action.
     * @param {ActionInterval} action
     */
    setInnerAction: function setInnerAction(action) {
        if (this._innerAction !== action) {
            this._innerAction = action;
        }
    },

    /*
     * Get inner action.
     * @return {ActionInterval}
     */
    getInnerAction: function getInnerAction() {
        return this._innerAction;
    },

    isDone: function isDone() {
        return this._elapsed >= this._innerAction._duration;
    }
});

/**
 * @method rotateAciton
 * @param {ActionInterval} action
 * @return {ActionInterval}
 */
cc.rotateAciton = function (action) {
    return new RotateAction(action);
};

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
        //# sourceMappingURL=RotateAction.js.map
        