import { promises as fsp } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { parseChangelogMarkdown } from '../src'

describe('markdown', () => {
  it('should parse markdown', async () => {
    const contents = await fsp.readFile(
      new URL('fixtures/CHANGELOG.md', import.meta.url),
      'utf8',
    )
    expect(parseChangelogMarkdown(contents)).toMatchInlineSnapshot(`
      {
        "releases": [
          {
            "body": "[compare changes](https://github.com/phojie/changegear/compare/v0.4.0...v0.4.1)

      ### 🩹 Fixes

      - Bump by patch by default ([7e38438](https://github.com/phojie/changegear/commit/7e38438))

      ### 🏡 Chore

      - Update renovate config ([#54](https://github.com/phojie/changegear/pull/54))
      - Update dependencies ([4216bc6](https://github.com/phojie/changegear/commit/4216bc6))
      - Update repo ([83c349f](https://github.com/phojie/changegear/commit/83c349f))

      ### ❤️ Contributors

      - Pooya Parsa <pooya@pi0.io>
      - Nozomu Ikuta <nick.0508.nick@gmail.com>",
            "version": "0.4.1",
          },
          {
            "body": "[compare changes](https://github.com/phojie/changegear/compare/v0.3.5...v0.4.0)

      ### 🚀 Enhancements

      - ⚠️ Resolve github usernames using \`ungh/ungh\` ([#46](https://github.com/phojie/changegear/pull/46))

      ### 🩹 Fixes

      - **markdown:** Avoid rendering \`noreply.github.com\` emails ([4871721](https://github.com/phojie/changegear/commit/4871721))
      - Avoid rendering authors with \`[bot]\` in their name ([4f3f644](https://github.com/phojie/changegear/commit/4f3f644))
      - Format name to avoid duplicates ([f74a988](https://github.com/phojie/changegear/commit/f74a988))

      #### ⚠️ Breaking Changes

      - ⚠️ Resolve github usernames using \`ungh/ungh\` ([#46](https://github.com/phojie/changegear/pull/46))

      ### ❤️ Contributors

      - Pooya Parsa ([@pi0](http://github.com/pi0))",
            "version": "0.4.0",
          },
        ],
      }
    `)
  })
})
