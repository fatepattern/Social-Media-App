import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how r u?', likesCount: 3},
                {id: 2, message: 'First post', likesCount: 7},
                {id: 3, message: 'Shiet', likesCount: 4},
                {id: 4, message: 'Loss', likesCount: 11}
            ],
            newPostText: 'fate'
        },
        dialogsPage: {
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

        },

        sidebar: {}
    },
    _callSubscriber() {
        console.log('State is changed')
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}



window.store = store;

export default store;
