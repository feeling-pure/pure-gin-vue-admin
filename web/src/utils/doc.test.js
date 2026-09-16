import assert from 'node:assert/strict'
import test from 'node:test'

import { toDoc } from './doc.js'

test('opens external links in an isolated browser tab', () => {
  const calls = []
  globalThis.window = {
    open: (...args) => calls.push(args)
  }

  try {
    toDoc('https://example.com')
    assert.deepEqual(calls, [
      ['https://example.com', '_blank', 'noopener,noreferrer']
    ])
  } finally {
    delete globalThis.window
  }
})
