<template>
    <div>
      <form-create v-model="fApi" :rule="rule" :option="option" :value.sync="value"></form-create>
    </div>
</template>

<script>
  import formCreate from '@form-create/element-ui'
  export default {
    name: 'Home',
    components: {
      FormCreate: formCreate.$form()
    },
    data() {
      return  {
        //实例对象
        fApi: {},
        //表单数据
        value: {},
        //表单生成规则
        rule: [
          {
            type: 'input',
            field: 'goods_name',
            title: '商品名称'
          },
          {
            type: 'datePicker',
            field: 'created_at',
            title: '创建时间'
          }
        ],
        //组件参数配置
        option: {
          //表单提交事件
          onSubmit: function (formData) {
            alert(JSON.stringify(formData))
          }
        }
      }

    }
  }
</script>
