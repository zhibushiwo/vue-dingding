<script>
import imgUrl from "@/assets/avatar.jpg";
import { formatDate } from "@/utils";
export default {
  props: {
    avatar: {
      type: String,
      default: imgUrl
    },
    content: {
      type: String,
      default: ""
    },
    time: {
      type: String,
      default: ""
    },
    isSend: {
      validator: function(value) {
        return [0, 1].indexOf(value) !== -1;
      }
    },
    sendState: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: "text"
    }
  },
  render() {
    // TODO 点击查看大图
    let msgcontent = <div>{this.content}</div>;
    switch (this.type) {
      case "image":
        msgcontent = (
          <div>
            <img src={this.content} /> 
          </div>
        );
        break;
      default:
        break;
    }
    return (
      <div class={`msg-item  ${this.isSend === 0 ? "mine" : ""}`}>
        <div class="time">{formatDate(this.time, "hh:mm")}</div>
        <div class="avatarWrap">
          <img src={this.avatar} />
        </div>
        <div class="content">
          <div> {msgcontent} </div>
        </div>
      </div>
    );
  }
};
</script>

<style lang="scss" scoped>
.msg-item {
  min-height: 40px;
  display: flex;
  position: relative;
  .time {
    position: absolute;
    top: -20px;
    color: #ccc;
    left: 50px;
  }
  .avatarWrap {
    margin: 0 5px;
    img {
      @include round(40px);
    }
  }
  .content {
    background: #fff;
    color: black;
    border-radius: 3px 8px 8px 8px;
    line-height: 30px;
    padding: 5px 10px;
    font-size: $font-size-lg;
    max-width: 60%;
    word-wrap: break-word;
    word-break: break-all;
    img {
      max-width: 300px;
    }
  }
  &.mine {
    flex-direction: row-reverse;
    .time {
      left: auto;
      right: 50px;
    }
    .content {
      background: $my-msg-bg-color;
      color: $my-msg-color;
      border-radius: 8px 3px 8px 8px;
    }
  }
}
</style>