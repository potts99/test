export const LayoutSetting = {
  TOGGLE_NAV_COLLAPSED: 'TOGGLE_NAV_COLLAPSED',
};

export function contextReducer(state, action) {
  switch (action.type) {
    case LayoutSetting.TOGGLE_NAV_COLLAPSED: {
      return {
        ...state,
        navCollapsed: !state.navCollapsed,
      };
    }
    default:
      return state;
  }
}
