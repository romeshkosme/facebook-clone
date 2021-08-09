import { ON_REGISTER_INPUT_CHANGE } from "./actionTypes";

const initialState = {
    registrationError: null,
    message: null,
    loading: false,
}

const account = (state = initialState, action) => {
    switch (action.type) {
        case ON_REGISTER_INPUT_CHANGE:
            return {...state, [action.payload.field]: action.payload.value}
        // case REGISTER_ERROR:
        //     return {...state, registrationError: action.payload, loading: false}
        // case REGISTER_USER:
        //     state = {
        //         ...state,
        //         user: null,
        //         loading: true,
        //         registrationError: null
        //     }
        //     break;
        // case REGISTER_USER_SUCCESSFUL:
        //     state = {
        //         ...state,
        //         loading: false,
        //         // user: action.payload,
        //         registrationError: null,
        //         showRegisterModal: true,
        //         registerationModalName: action.payload.firstName,
        //         registerationModalEmail: action.payload.email
        //     }
        //     break;
        // case REGISTER_USER_FAILED:
        //     state = {
        //         ...state,
        //         user: null,
        //         loading: false,
        //         registrationError: action.payload
        //     }
        //     break;
        // case TOGGLE_REGISTRATION_MODAL:
        //     state = {
        //         ...state,
        //         showRegisterModal: !state.showRegisterModal
        //     }
        //     break;
        // case RESET_REGISTER_FORM:
        //     state = initialState;
        //     break;
        default:
            state = { ...state };
            break;
    }
    return state;
}

export default account;