<script>
import { toRem } from "@/utils";
export default {
  name: "Icon",
  props: {
    siez: {
      type: Number,
      default: 16
    },
    type: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: ""
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
    getIconClas() {
      let cls = ` icon-icon_${this.type} `;
      if (this.color) {
        cls += ` icon-color-${this.color} `;
      }
      console.log(cls)
      return cls;
    },
    getIconStyle() {
      const chromeMinSize = 12;
      const retStyle = { fontSize: toRem(this.size) };
      if (this.size < chromeMinSize) {
        const ratio = this.size / chromeMinSize;
        retStyle.transform = `scale(${ratio})`;
      }
      return retStyle;
    }
  },
  render() {
    const Icon = (
      <i
        onClick={this.onClick}
        class={`iconfont  ${this.getIconClas()}`}
        style={this.getIconStyle()}
      ></i>
    );
    return Icon;
  }
};
</script>