import { create } from 'zustand';
import { isMobile } from 'react-device-detect';
import { FRAME_LAYOUT_PC } from '@constants/uiContants.js';

export const useUiLayoutStore = create((set) => ({
  frameLayout: FRAME_LAYOUT_PC,
  isMobile: false,
  isWeixin: false,
  updateFrameLayout: (frameLayout) => set(() => ({ frameLayout })),
  checkMobileEnv: () => set(() => {
    return {
      isMobile: isMobile,
      isWeixin: /MicroMessenger/i.test(window.navigator.userAgent),
    }
  }),
}));