import {configureStore} from "@reduxjs/toolkit"
import TaskReducer from "./Reducer"


const store = configureStore({
    reducer : {

        Tasks : TaskReducer

    }
})

export default store