/**
 * Created by xujiawei on 2020-03-13 12:08:52
 * 包装动作，用来包装move，besizer等动作, 用来在执行动作过程中更新节点角度
 */

let RotateAction = cc.Class({
    extends: cc.ActionInterval,

    __ctor__ (action) {
        this._elapsed = 0;
        this._innerAction = null;
        this._innerTarget = null;
        action && this.initWithAction(action);
    },

    initWithAction (action) {
        if (!action) {
            cc.errorID(1026);
            return false;
        }

        this._innerAction = action;
        return true;
    },

    clone () {
        let action = new RotateAction();
        this._cloneDecoration(action);
        action.initWithAction(this._innerAction.clone());
        return action;
    },

    startWithTarget (target) {
        this._innerTarget = target;
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this._innerAction.startWithTarget(target);
    },

    step (dt) {
        let prePos = this._innerTarget.getPosition();
        this._innerAction.step(dt);
        let curPos = this._innerTarget.getPosition();
        
        // 更新角度
        let dis = curPos.subSelf(prePos);
        dis = dis.normalizeSelf();
        // 默认方向为（0，1）即y轴朝上为0度
        let origin = cc.v2(0, 1);

        let r = origin.signAngle(dis);
        let angle = cc.misc.radiansToDegrees(r);
        // cc.log("angle:", angle);
        this._innerTarget.angle = angle;

        this._elapsed += dt;
    },

    /*
     * Set inner action.
     * @param {ActionInterval} action
     */
    setInnerAction:function (action) {
        if (this._innerAction !== action) {
            this._innerAction = action;
        }
    },

    /*
     * Get inner action.
     * @return {ActionInterval}
     */
    getInnerAction:function () {
        return this._innerAction;
    },

    isDone:function () {
        return (this._elapsed >= this._innerAction._duration);
    },
});

/**
 * @method rotateAciton
 * @param {ActionInterval} action
 * @return {ActionInterval}
 */
cc.rotateAciton = function (action) {
    return new RotateAction(action);
}