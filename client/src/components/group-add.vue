<template>
  <el-dialog class="dialog" title="添加新成员" :visible.sync="dialogVisible" width="40%">
    <div class="content">
      <div class="left">
        <div class="groupmenber">
          <span v-for="(item, index) in members" :key="index">{{item}}</span>
        </div>
        <div class="info">
          <div class="groupname">
            <h3 class="title">群名称</h3>
            <el-input v-model="groupname" placeholder="取个群名字吧"></el-input>
          </div>
          <div class="grouptype">
            <h3 class="title">群类型</h3>
            <el-select v-model="grouptype" placeholder>
              <el-option v-for="item in grouptypes" :key="item" :label="item" :value="item"></el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="addtype types">
          <div class="incoWrap">
            <Icon type="calendar_fill" :size="22" />
          </div>
          <span>分类建群</span>
        </div>
        <div class="friends types">
          <div class="incoWrap">
            <Icon type="signal" :size="22" />
          </div>
          <span>我的好友</span>
        </div>
        <div class="list">
          <van-checkbox-group v-model="selectFriend" ref="checkboxGroup">
            <van-checkbox
              class="checkbox"
              v-for="(item, index) in friends"
              :key="index"
              :name="item"
            >
              <div class="fri">
                <img :src="imgUrl" alt srcset />
                <div class="info">
                  <div class="name">{{item}}</div>
                  <div class="tags">
                    <van-tag round>普通朋友</van-tag>
                    <van-tag round  type="success">朋友</van-tag>
                  </div>
                </div>
              </div>
            </van-checkbox>
          </van-checkbox-group>

          <!-- <van-checkbox-group v-model="selectFriend">
            <van-cell-group>
              <van-cell
                v-for="(item, index) in friends"
                clickable
                :key="item"
                :title="`复选框 ${item}`"
                @click="toggle(index)"
              >
                <template #right-icon>
                  <van-checkbox :name="item" ref="checkboxes" />
                </template>
              </van-cell>
            </van-cell-group>
          </van-checkbox-group>-->
        </div>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="ToggleGroupAddDialog">取 消</el-button>
      <el-button type="primary">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import imgUrl from "@/assets/avatar.jpg";
export default {
  props: {},
  data() {
    return {
      members: ["葛先生", "赵小姐"],
      groupname: "",
      grouptype: "",
      grouptypes: ["普通群", "公司群", "朋友群"],
      friends: ["路人A", "这是谁", "尼玛还", "小盆宇"],
      selectFriend: [],
      imgUrl
    };
  },
  computed: {
    ...mapGetters(["GroupAddDialog"]),
    dialogVisible: {
      get() {
        return this.GroupAddDialog;
      },
      set() {
        this.ToggleGroupAddDialog();
      }
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
    ...mapMutations(["ToggleGroupAddDialog"])
  },
  components: {}
};
</script>

<style scoped lang="scss">
.content {
  display: flex;
  .left {
    width: 50%;
    padding-top: 20px;
    padding: 12px;
    border-right: 1px solid #ccc;
    .groupmenber {
      border-bottom: 1px solid #ccc;
      height: 200px;
      span {
        color: #aaa;
        border: 1px dotted #ccc;
        padding: 5px;
        margin: 7px;
      }
    }
    .info {
      .title {
        margin: 13px 0;
      }
    }
  }
  .right {
    width: 50%;
    padding-top: 12px;
    .types {
      padding: 10px;
      padding-left: 18px;
      display: flex;
      align-items: center;
      .incoWrap {
        display: flex;
        align-content: center;
        margin-right: 10px;
        .iconfont {
          color: #fff;
        }
        display: inline-block;
        @include round(40px);
        @include flex-center();
      }
    }
    .addtype {
      border-bottom: 1px solid #ccc;
      .incoWrap {
        background: #fe7d06;
      }
    }
    .friends {
      .incoWrap {
        background: #3c9ffa;
      }
    }
    .list {
      padding-left: 18px;
      .checkbox {
        margin: 13px 0;
        .fri {
          display: flex;
          align-items: center;
          img {
            margin-right: 5px;
            @include round(30px);
          }
          .info {
            display: flex;
            flex-direction: column;
            ::v-deep.van-tag{
              margin-right: 4px;
            }
          }
        }
      }
    }
  }
}
::v-deep.dialog .el-dialog__body {
  padding-top: 0;
}
</style>
