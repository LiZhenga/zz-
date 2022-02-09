const users = {
    state:{
        users:[
            {useAccount:'',password:''}
        ],
        mark: false
    },
    mutations:{
        Register(state,user){
            // console.log(user);
            state.users.push(user)
            console.log(state.users);
        },
        Login(state){
            state.mark = true
        }
    },
    actions:{},
}
export default users