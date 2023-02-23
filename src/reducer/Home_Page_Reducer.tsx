

interface Intial_State_Type {
    visibility: string;
    opacity: string;
    transform: string;
    right: string;
}


const Intial_State: Intial_State_Type = {
    visibility: "hidden", 
    opacity: "0", 
    transform: "scale(0.5)",
    right: "-50px",
}


enum ACTION_TYPES {
    Visible_Menu, 
    UnVisibility_Menu,
}


interface ACTIONS {
    type: ACTION_TYPES,
    payload?: { 
        value: string;
    };
}



function Reducer(state: Intial_State_Type, action: ACTIONS) {
    
    switch(action.type) {

        case ACTION_TYPES.Visible_Menu:
            return {
                ...state,
                visibility: "visible", 
                opacity: "1",  
                transform: "scale(1)",
                right: "20px",
            };

        case ACTION_TYPES.UnVisibility_Menu:
            return {
                ...state,
                visibility: "hidden", 
                opacity: "0", 
                transform: "scale(0.5)",
                right: "-50px", 
            }


        default:
            throw new Error();
    }

}




export { Reducer, Intial_State, ACTION_TYPES }; 