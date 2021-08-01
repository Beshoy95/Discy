import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit'; // Importing from `utils` makes them more type-safe ✅
import { HomepageState } from './types';

// The initial state of the Homepage
export const initialState: HomepageState = {
  username: 'Initial username for my state',
};

const slice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    changeUsername(state, action: PayloadAction<string>) {
      // Here we say lets change the username in my homepage state when changeUsername actions fires
      // Type-safe: It will expect `string` when firing the action. ✅
      state.username = action.payload;
    },
  },
});

// ... code from above

/**
 * Let's turn this into a hook style usage. This will inject the slice to redux store and return actions in case you want to use in the component
 */

/**
 * `actions` will be used to trigger change in the state from where ever you want
 */
export const { actions: homepageActions } = slice;
