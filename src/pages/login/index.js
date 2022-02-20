export const CheckRole = () =>{
    const role = localStorage.getItem('keyUser');
    if(role === "admin" ){
        return 1;
    }
    else{
        return 0;
    }
};

export const checkLogin = () => {
    const role = localStorage.getItem('keyUser');
    if(role == null){
        return 0;
    }else{
        return 1;
    }
}