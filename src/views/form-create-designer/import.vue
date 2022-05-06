<template>
    <div>
      <fc-designer ref="designer"/>
    </div>
</template>

<script>
  import FcDesigner  from '@form-create/designer'
  console.log(FcDesigner )

  export default {
    name: 'FormCreateDesignerImport',
    components: {
      FcDesigner
    },
    data() {
      return {

      }
    }
  }
</script>
