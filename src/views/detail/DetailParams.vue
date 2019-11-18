<template>
  <div v-if="Object.keys(paramsInfo).length>0">
    <div class="params-info">
      <table>
        <tr v-for="(item,idx) in paramsInfo.rule.tables[0]" :key="idx">
          <td v-for="(i,d) in item" :key="d">{{i}}</td>
        </tr>
      </table>
      <div>
        <dl v-for="(item,idx) in paramsInfo.info.set" :key="idx">
          <dt>{{item.key}}</dt>
          <dd>{{item.value}}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.params-info {

  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;box-sizing: border-box;}
table {
  width: 100%;
  border-collapse: collapse;
}
table tr {
  height: 42px;
}
.params-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
dl {
  display: flex;
  min-height: 42px;
  line-height: 42px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
dl dt {
  width: 95px;width: 20%;
}
dl dd {
  color: var(--color-high-text);width: 80%;
}
</style>