const throwError = {
  notFound(message: string) {
    const err = new Error(message);
    err.name = 'NotFoundError';
    throw err;
  },

  doesntExist(message: string) {
    const err = new Error(message);
    err.name = 'DoenstExist';
    throw err;
  },

  invalidUser(message: string) {
    const err = new Error(message);
    err.name = 'UnauthorizedError';
    console.log(err.name);
    throw err;
  },
  unathorized(message = 'Invalid token') {
    const err = new Error(message);
    err.name = 'UnauthorizedError';
    throw err;
  },

};
export default throwError;