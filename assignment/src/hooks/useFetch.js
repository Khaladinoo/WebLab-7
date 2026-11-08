import { useReducer, useEffect } from 'react';

const initialState = {
  data: null,
  loading: true,
  error: null,
};

function fetchReducer(state, action) {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload, error: null };
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
export default function useFetch(fetchFunction, dependencies = []) {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    let isMounted = true;

    async function executeFetch() {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const result = await fetchFunction(signal);
        
        if (isMounted) {
          dispatch({ type: 'FETCH_SUCCESS', payload: result });
        }
      } catch (err) {
        if (err.name === 'AbortError') return;

        if (isMounted) {
          dispatch({ type: 'FETCH_FAILURE', payload: err.message || 'An error occurred' });
        }
      }
    }

    executeFetch();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, dependencies);

  return { data: state.data, loading: state.loading, error: state.error };
}
