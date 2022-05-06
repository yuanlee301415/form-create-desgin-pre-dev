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
    name: 'GetData',
    components: {
      FcDesigner
    },
    data() {
      return {

      }
    },
    methods: {
      /**
       * 获取表单规则对象
       */
      getRule() {
        const rule = this.$refs.designer.getRule()
        console.log('rule:', rule)
      },

      /**
       * 获取表单规则对象序列化字符串
       */
      getJson() {
        const json = this.$refs.designer.getJson()
        console.log('json:', json)
      },

      /**
       * 获取表单全局匹配对象
       */
      getOption() {
        const option = this.$refs.designer.getOption()
        console.log('option:', option)
      }
    }
  }
</script>
