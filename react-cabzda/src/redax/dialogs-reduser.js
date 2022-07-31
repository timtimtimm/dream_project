const ADD_DIALOGS_POST = 'dialogs/ADD-DIALOGS-POST';

export const addDialogsPostActionCreater = (data) => ({ type: ADD_DIALOGS_POST, data });

let initialState = {
  usersArr: [
    { name: 'Tima', id: 1 },
    { name: 'Tania', id: 2 },
    { name: 'Sofia', id: 3 },
    { name: 'Maria', id: 4 },
    { name: 'Galia', id: 5 }
  ],

  dilogsArr: [
    { message: 'Helo', id: 1 },
    { message: 'How is yuor it-kamasutra', id: 2 },
    { message: 'Bay mi frend', id: 3 },
  ],
};

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {

    case ADD_DIALOGS_POST:
      let text = action.data.message;
      return {
        ...state,
        dilogsArr: [...state.dilogsArr, { message: text, id: 5 }]
      };

    default:
      return state;
  }
}

export default dialogsReduser;