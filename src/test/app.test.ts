import { describe, test, expect } from 'bun:test'

import app from '../app/app'

describe('App tests', () => {
  test('app should have a port number', () => {
    expect(app.get('port')).toBe(8000)
  })
})
