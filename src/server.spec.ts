import sayHelloWorld from '@/server';

describe('First Test of my life', () => {
  test('should call sayHelloWorld and return the message', () => {
    const message = sayHelloWorld('Hello World');

    expect(message).toBe('Hello World');
  });
});
