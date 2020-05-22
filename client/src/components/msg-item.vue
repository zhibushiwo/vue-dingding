<script>
import imgUrl from "@/assets/avatar.jpg";
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
    }
  },
  render() {
    return (
      <div class={`msg-item  ${this.isSend === 0 ? "mine" : ""}`}>
        <div class="time">{this.time}</div>
        <div class="avatarWrap">
          <img src={this.avatar} />
        </div>
        <div class="content">
          <div> {this.content} </div>
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
  }
  &.mine {
    flex-direction: row-reverse;
    .time {
      left: auto;
      right: 50px;
    }
    .content {
      background: $theme-color;
      color: #fff;
      border-radius: 8px 3px 8px 8px;
    }
  }
}
</style>