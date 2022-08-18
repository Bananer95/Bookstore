import axios from 'axios';
import { AppThunk } from './index';

export const getBooksThunk = (): AppThunk => async (dispatch) => {
  axios('https://api.itbook.store/1.0/new').then((data) => {
    dispatch({
      type: 'PUSH_BOOKS',
      data: data,
    });
  });
};
