export interface ITodo{
    _id:string;
    content:string;
    completed:string;
    createdAt:string;
    createdBy:{
        id:string;
        name:string
    }
}
export const defaultTodo:ITodo = {
    _id: "",
    content: "",
    completed: "",
    createdAt: "",
    createdBy: {
        id: "",
        name: ""
    }
}