<template>
  <div class="rich-text-editor">
    <h2>新闻通知编辑器</h2>
    <!-- 富文本编辑器组件 -->
    <mavon-editor
        v-model="content"
        :toolbars="markdownOption"
        @change="handleChange"
        :ishljs="true"
    />
    <!-- 操作按钮 -->
    <el-button type="primary" @click="saveContent">保存内容</el-button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { mavonEditor, MDEnum } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import { ElButton } from 'element-plus';

export default {
  name: 'RichTextEditor',
  components: {
    mavonEditor,
    ElButton
  },
  setup() {
    const content = ref(''); // 编辑器内容
    const markdownOption = ref({
      // 工具栏配置，根据mavonEditor的文档配置你需要的工具
      bold: true,
      // ... 其他工具配置
    });

    const handleChange = (value, render) => {
      // 编辑器内容变化时的逻辑
      console.log('内容改变:', value);
    };

    // 图片上传处理
    const handleImageUpload = (pos, $file) => {
      console.log('图片上传触发:', pos, $file);
      // 实现图片上传的逻辑，通常需要调用后端API
      // 这里以一个示例函数代替实际的上传逻辑
      imageUploadApi($file).then((url) => {
        // 假设上传成功后，将图片URL插入到编辑器中
        const img = `![图片描述](${url})\n`;
        document.execCommand('insertText', false, img);
      });
    };

    // 保存编辑器内容
    const saveContent = () => {
      // 执行保存操作，通常需要调用后端API
      console.log('保存内容:', content.value);
      // 这里可以调用API保存内容
    };

    return {
      content,
      markdownOption,
      handleChange,
      handleImageUpload,
      saveContent,
    };
  },
};
</script>

<style scoped>
.rich-text-editor {
  max-width: 700px;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
}
h2 {
  text-align: center;
  margin-bottom: 20px;
}
/* 可以根据需要添加更多样式 */
</style>