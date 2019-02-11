<template>
  <div class="xfn-category-list">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>菜品类别管理</el-breadcrumb-item>
      <el-breadcrumb-item>菜品列表</el-breadcrumb-item>
    </el-breadcrumb>

    <br/>
    <el-button type="primary">添加新的菜品类别</el-button>
    <br/>
    <el-table :data="categoryList" stripe border>
      <el-table-column label="编号" prop="cid"></el-table-column>
      <el-table-column label="名称" prop="cname"></el-table-column>
      <el-table-column label="操作">

        <template slot-scope="c">
        <el-button size="mini" @click="deleteCategory(c.cid)" type="success">修改</el-button>
        <el-button size="mini" @click="updateCategory(c.cid)" type="error">删除</el-button>
        </template>

      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data(){
    return {
      categoryList:[]
    }
  },
  methods:{
    deleteCategory(cid){
      console.log(cid)
    },
    updateCategory(cid){

    }
  },
  mounted(){
    var url = this.$store.state.globalSettings.apiUrl + '/admin/category'
    this.$axios.get(url).then((res)=>{
      this.categoryList = res.data
    }).catch((err)=>{
      console.log(err)
    })
  }
}
</script>
