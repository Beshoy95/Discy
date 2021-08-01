// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly
import { HomepageState } from './../app/pages/HomePage/slice/types';

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
  homepage?: HomepageState;
}
