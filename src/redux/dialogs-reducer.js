const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Howdy'},
        {id: 3, message: 'Idiot'},
        {id: 4, message: 'Sup'},
        {id: 5, message: 'My Ninja'}
    ],
    dialogs: [
        {id: 1, name: 'Olezha'},
        {id: 2, name: 'Dimas'},
        {id: 3, name: 'Zhekan'},
        {id: 4, name: 'Moe Lester'},
        {id: 5, name: 'Mike Coxlong'},
        {id: 6, name: 'Joe Momma'}
    ],

    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }

        case SEND_MESSAGE:
            let body = state.newMessageBody;

            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
                newMessageBody: ''
            }

        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer;
