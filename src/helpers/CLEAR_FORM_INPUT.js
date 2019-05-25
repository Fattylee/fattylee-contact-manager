export default (dispatch ) => {
  dispatch({
    type: 'CLEAR_FORM_INPUT',
    payload: {
      name: '',
      email: '',
      phone: '',
      errors: {}
    },
  });
}