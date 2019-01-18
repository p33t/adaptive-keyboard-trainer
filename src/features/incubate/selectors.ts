
import { IncubateState } from './reducer';

export const historyLength = (state: IncubateState) => state.keystrokeHistory.length;

// TODO: Can calculate score here
// export const getFilteredTodos = createSelector(
//   getTodos,
//   getTodosFilter,
//   (todos, todosFilter) => {
//     switch (todosFilter) {
//       case 'completed':
//         return todos.filter(t => t.completed);
//       case 'active':
//         return todos.filter(t => !t.completed);
//
//       default:
//         return todos;
//     }
//   }
// );
