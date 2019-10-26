const initialState = []
const users = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_USER':
            return state.concat([
                {
                    id: (state.length - 1) +1 , 
                    firstname: action.firstname,
                    lastname: action.lastname,
                    birthday: action.birthday,
                    age: action.age,
                    hobby: action.hobby
                }
            ])
        default:
            return state
    }
}
export default users
