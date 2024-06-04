/**
 * 整体框架布局有四种类型。
 * 1: 左侧与右侧分离，Pc
 * 2: 左侧重叠在右侧上层, pad 模式
 * 10: 手机端 mobile 模式
 */
export const FRAME_LAYOUT_PC = 1;
export const FRAME_LAYOUT_PAD = 2;
export const FRAME_LAYOUT_MOBILE = 10;

/**
 * 整体框架布局主要通过外侧容器的宽度设置
 */
export const FRAME_LAYOUT_PC_WIDTH = 1080;
export const FRAME_LAYOUT_MOBILE_WIDTH = 430;

export const calcFrameLayout = (selector) => {
  const elem = document.querySelector(selector);
  if (!elem) {
    return FRAME_LAYOUT_PC;
  }

  const w = elem.clientWidth;

  if (w > FRAME_LAYOUT_PC_WIDTH) {
    return FRAME_LAYOUT_PC;
  } else if (w > FRAME_LAYOUT_MOBILE_WIDTH) {
    return FRAME_LAYOUT_PAD;
  } else {
    return FRAME_LAYOUT_MOBILE;
  }
}

/**
 * 主题
 */
export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';
