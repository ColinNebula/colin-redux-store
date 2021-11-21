import React, { createContext, useContext } from "react";
// import { useProductReducer } from './reducers';
import { Provider } from 'react-redux';
import store from './store';


//instantiate the global state object
// const StoreContext = createContext();
// const { Provider } = StoreContext;

// const StoreProvider = ({ value = [], ...props }) => {
//     const [state, dispatch] = useProductReducer({
//       products: [],
//       cart: [],
//       cartOpen: false,
//       categories: [],
//       currentCategory: '',
//     });
//     // use this to confirm it works!
//     console.log(state);
//     return <Provider value={[state, dispatch]} {...props} />;
// };

// const useStoreContext = () => {
//     return useContext(StoreContext);
// };

// Export
// export { StoreProvider, useStoreContext };
export default function StoreProvider(props) {
  return <Provider store={store} {...props} />;
}