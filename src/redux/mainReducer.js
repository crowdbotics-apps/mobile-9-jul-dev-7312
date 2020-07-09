import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView8657Reducer from '../features/CalendarView8657/redux/reducers';
import EmailAuth8656Reducer from '../features/EmailAuth8656/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView8657: CalendarView8657Reducer,
EmailAuth8656: EmailAuth8656Reducer,

});