<template>
  <div class="dnd-list-page">
    <i18n path="componentPage.dndList" tag="p" class="tips">
      <template slot="link">
        <el-link href="https://github.com/SortableJS/Vue.Draggable" type="primary" target="_blank">
          vuedraggable
        </el-link>
      </template>
    </i18n>

    <dnd-list :left-list="leftList" :right-list="rightList">
      <h3 slot="left-header">{{ $t('componentPage.list') }}</h3>
      <h3 slot="right-header">{{ $t('componentPage.articlePool') }}</h3>
    </dnd-list>
  </div>
</template>

<script>
import DndList from '@/components/DndList'

export default {
  name: 'DndListPage',
  components: { DndList },
  data() {
    return {
      leftList: [
        {
          id: 1,
          author: 'Carol',
          title: 'Qegrzaa Idsbg Mutq Itdjptly Fbkktxsb',
        },
        {
          id: 2,
          author: 'Jessica',
          title: 'Otmt Fkww Foyiqftr Iebgj Nsfleb Drytgr Ehjqr Lbdoe',
        },
        {
          id: 3,
          author: 'Donald',
          title: 'Dgtmjc Mpxpxqvn Mdcsldh Fegkdhhy Bfh Gwvh',
        },
        {
          id: 4,
          author: 'Helen',
          title: 'Nioaexmw Fjexc Jsmvknfui Rin Dpslgficx Lkggmm Roexufc Ruvbmsjsd Kvwgsjkof',
        },
        {
          id: 5,
          author: 'Timothy',
          title: 'Rnttin Rbrugu Ssstvmyb Qizmbkj Kcfs Hlt Xwzkiwo Mfyek Yquwrmd',
        },
      ],
      rightList: [
        {
          id: 6,
          author: 'Brenda',
          title: 'Gpm Spkage Tkwnz Eoepfr Vxcocnqbuj Jzj Arehfnnw Nrrcv Ewy',
        },
        {
          id: 7,
          author: 'Edward',
          title: 'Uqgxvwyuq Mespec Zmzvz Uon Ilknqhl Jyiddoso Bdrir Xtkwiylc Uued',
        },
        {
          id: 8,
          author: 'David',
          title: 'Jerrrt Xgmtmgxge Kvij Eivnkjjj Ehfir Luznt Vksbpls Huqjltklg Tkghchvqds',
        },
        {
          id: 9,
          author: 'Melissa',
          title: 'Zvfthudw Lpdt Ohhbclk Ocgdvkm Oxvmr Ufcovgndj Zfspf Pgftn Uucge',
        },
        {
          id: 10,
          author: 'Ruth',
          title: 'Zbaoipmsn Vwtqxhdjv Wehutqn Jid Qtsx Erypqwfuq Ngji',
        },
        {
          id: 11,
          author: 'Matthew',
          title: 'Qndte Uhkgooc Kjyhjlmx Qmsciopblu Ukske Jcimusid Iwsuyn',
        },
        {
          id: 12,
          author: 'James',
          title: 'Gnqpoez Hubhlypiqj Ramif Wkmezre Hugmufo',
        },
        {
          id: 13,
          author: 'Helen',
          title: 'Jlsc Trg Wflioqbg Xgkluigtd Libeefite Optib Hptf Hlykc Xpajyl',
        },
        {
          id: 14,
          author: 'Michelle',
          title: 'Oqwxwawger Bbxatnjz Vqlmwfep Bkdjw Abce Ntdkutn',
        },
        {
          id: 15,
          author: 'Amy',
          title: 'Onnhh Wqey Gutjxjlr Ymuhjplq Nnpgtnh Nylx Iypkpm',
        },
        {
          id: 16,
          author: 'Lisa',
          title: 'Cgsgfjjf Kcykcptt Owhi Ixdhqtuu Ndixikwjk Kkqqcfi Sgxhj Ifqmqk',
        },
        {
          id: 17,
          author: 'Larry',
          title: 'Jkry Plzpx Gujk Udj Uwdbltnwm Xifpyevx',
        },
        {
          id: 18,
          author: 'William',
          title: 'Imntqg Viddkuxo Okvqsjbvc Tkykjv Gujni Ygldgz Eucmuqocs Eecx',
        },
        {
          id: 19,
          author: 'Donna',
          title: 'Wwsqajpzvj Qanuq Lst Qtgfam Gwfal Abeur',
        },
        {
          id: 20,
          author: 'Christopher',
          title: 'Situ Ermotj Ctjhrfxu Iil Zaqp Jcawa Zhgnqaht',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.dnd-list-page {
  padding: 20px;
}

.tips {
  padding: 8px 24px;
  margin: 0 0 20px;
  border-radius: 2px;
  font-size: 16px;
  color: #2c3e50;
  line-height: 32px;
  background-color: #eef1f6;
}
</style>
