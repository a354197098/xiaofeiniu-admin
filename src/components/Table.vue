<template>
    <div class="xfn-table-info">
        <el-card shadow="hover">
            <div class="xfn-table" :style="{background:getTableColor(data.status)}">{{data.tid}}号:{{data.status|tableStatus}}</div>
            <el-button type="success" size="mini" plain @click="showTableDetail">详情</el-button>
            <el-button type="danger" size="mini" plain>修改</el-button>
        </el-card>

        <!--桌台详情-->
        <el-dialog :title="data.tid+'号桌台详情'" :visible="dialogTableDetailVisible" :before-close="closeDialogTableDetail">
            <!--对话框主体-->
            <el-tabs type="border-card" @tab-click="makeQrCode">
                <el-tab-pane label="桌台详情">状态加载中ing</el-tab-pane>
                <el-tab-pane label="桌台二维码">
                    <img :src="qrcodeData">
                </el-tab-pane>
            </el-tabs>
            <!--对话框尾部-->
            <div slot="footer">
                <el-button type="primary" @click="dialogTableDetailVisible=false">关闭</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dialogTableDetailVisible:false,
            qrcodeData:''
        }
    },
    props:['data'],
    methods:{
        getTableColor(status){
            if(status==1) return '#67C23A'
            else if(status==2) return '#E6A23C'
            else if(status==3) return '#F56C6C'
            else return '#909399'
        },
        showTableDetail(){
            //console.log(this.data)
            this.dialogTableDetailVisible = true
        },
        closeDialogTableDetail(){
            this.dialogTableDetailVisible = false
        },
        makeQrCode(){
            //创建二维码 不能在组件mounted中调用
            var qrcode = require('qrcode')
            var tableUrl = this.$store.state.globalSettings.appUrl + '/#/'+this.data.tid

            qrcode.toDataURL(tableUrl,{
                width:300,
                errorCorrectionLevel:'H'
            },(err,url)=>{
                //console.log('二维码图片绘制完成')
                //console.log(url)
                this.qrcodeData = url;
            })
        }
    }
}
</script>

<style lang="scss">
.xfn-table-info {
  padding: 3px;
  text-align: center;

  .xfn-table {
    width: 90%;
    height: 120px;
    line-height: 120px;
    border: 1px solid #aaa;
    border-radius: 50%;
    box-shadow: 3px -4px 5px #666;
    margin: 5px auto;
  }
}
</style>