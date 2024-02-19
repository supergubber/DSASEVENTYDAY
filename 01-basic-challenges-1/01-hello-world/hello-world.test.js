const helloWorld = require('./hello-world')

test("Returning 'Hell, World!' as string", () => {
  const result = helloWorld()
  expect(result).toBe('Hello World!')
})
