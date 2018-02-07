import ErrorBadRequest from '../ErrorBadRequest';

const statusCode = 400;
const statusText = 'Bad Request';


test('Error should be thrown', () => {
  expect(() => {
    throw new ErrorBadRequest();
  }).toThrow();
});


test('Error should properly transfer status code', () => {
  try {
    throw new ErrorBadRequest();
  } catch (error) {
    expect(error.statusCode).toBe(statusCode);
  }
});

test('Error should properly transfer status text', () => {
  try {
    throw new ErrorBadRequest();
  } catch (error) {
    expect(error.statusText).toBe(statusText);
  }
});


test('Error should show stack trace', () => {
  try {
    throw new ErrorBadRequest();
  } catch (error) {
    expect(error.stack).not.toBe(undefined);
  }
});


test('Error should show stack trace if captureStackTrace unavailable', () => {
  try {
    Error.captureStackTrace = undefined;
    throw new ErrorBadRequest();
  } catch (error) {
    expect(error.stack).not.toBe(undefined);
  }
});

