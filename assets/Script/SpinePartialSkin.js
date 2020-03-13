/**
 * Created by xujiawei on 2020-03-13 19:53:30
 */

cc.Class({
    extends: cc.Component,

    properties: {
        taotao: sp.Skeleton,
        tailGroup: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.initSkin();
    },

    initSkin () {
        // todo: 根据保存的数据初始化皮肤
        let tailTag = 1;
        let tailName = 'weiba-zhi' + (tailTag != 1 ? ('-' + tailTag) : '');
        this.onTailBeSelected(null, tailName);

        let toggle = this.tailGroup.getChildByName('toggle'+tailTag).getComponent(cc.Toggle);
        toggle.isChecked = true;
    },

    onTailBeSelected (target, data) {
        cc.log('tail:', data);
        this.changePartialCloth(this.taotao, 'weiba-zhi', 'default', data);

        if (target) {
            // zy.audio.playEffect(zy.audio.Effect.CommonClick);
        }
    },

    // 局部换装
    changePartialCloth(skeleton, slotName, targetSkinName, targetAttaName){
        console.log('change cloth:', slotName, targetSkinName, targetAttaName);
        const slot = skeleton.findSlot(slotName);
        const skeletonData = skeleton.skeletonData.getRuntimeData();
        const skin = skeletonData.findSkin(targetSkinName);
        const slotIndex = skeletonData.findSlotIndex(slotName);
        const atta = skin.getAttachment(slotIndex, targetAttaName);
        slot.setAttachment(atta);
    },


    // update (dt) {},
});
