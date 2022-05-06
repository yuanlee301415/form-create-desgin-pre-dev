<template>
    <div>
      <fc-designer ref="designer">
        <template slot="handle">
          <ElButton @click="getRule">GetRule</ElButton>
          <ElButton @click="getJson">GetJson</ElButton>
          <ElButton @click="getOption">GetOption</ElButton>
        </template>
      </fc-designer>
    </div>
</template>

<script>
  import FcDesigner  from '@form-create/designer'
  console.log(FcDesigner )

  export default {
    name: 'FormCreateDesignerGetData',
    components: {
      FcDesigner
    },
    data() {
      return {

      }
    },
    methods: {
      getRule() {
        const rule = this.$refs.designer.getRule()
        console.log('rule:', rule)
      },
      getJson() {
        const json = this.$refs.designer.getJson()
        console.log('json:', json)
      },
      getOption() {
        const option = this.$refs.designer.getOption()
        console.log('option:', option)
      }
    }
  }
</script>
