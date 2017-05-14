import {TOOGLE_TT_LOGO} from '../actions/types';
let tooltips = {
    tooltipLogo: false
}
export default(state = tooltips, action = {}) => {
    switch (action.type) {
        case TOOGLE_TT_LOGO:
            return {
                tooltipLogo: !state.tooltipLogo
            };
        default:
            return state;
    }
}
