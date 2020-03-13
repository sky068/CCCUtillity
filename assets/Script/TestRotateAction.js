/**
 * Created by xujiawei on 2020-03-13 19:36:25
 */

cc.Class({
    extends: cc.Component,

    properties: {
       testNode: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    onBtnRun () {
        let be = cc.bezierTo(3, [cc.v2(-150, 600), cc.v2(150, -600), cc.v2(500,380)]);
        this.testNode.runAction(cc.rotateAciton(be));
    },

    onBtnReset () {
        this.testNode.stopAllActions();
        this.testNode.position = cc.v2(-530, -206);
        this.testNode.angle = 0;
    }

    // update (dt) {},
});
