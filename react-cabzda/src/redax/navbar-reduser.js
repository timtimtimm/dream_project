
let initialState = {
    frends: [
      { name: 'Tania', id: 1},
      { name: 'Sonia', id: 2 },
      { name: 'Maria' , id: 3},
    ],
  };

const navbarReduser = (state = initialState, action) => {
    return {...state};
}

export default navbarReduser;