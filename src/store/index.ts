import {
  Action,
  AnyAction,
  combineReducers,
  configureStore,
  Reducer,
  ThunkAction,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const initialState = {
  books: [],
};

type IBooksAction =
  | AnyAction
  | {
      type: string;
      data: any;
    };

const booksReducer: Reducer<any, IBooksAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'PUSH_BOOKS':
      return { ...state, books: action.data.data.books };
    default:
      return state;
  }
};

export const rootReducer: Reducer = combineReducers({
  booksReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnT = void> = ThunkAction<
  ReturnT,
  RootStore,
  unknown,
  Action<string>
>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
