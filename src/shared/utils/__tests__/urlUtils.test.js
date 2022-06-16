import { resolveApiUrl } from '../urlUtils'

describe('urlUtils', () => {
	describe('resolveApiUrl', () => {
		it('should throw an error if the key does not exist in env variables', () => {
			const key = 'foo'
			const err = new Error(`${key} not found in env variables`)

			expect.assertions(2)
			try {
				resolveApiUrl(key)
			} catch (error) {
				expect(error).toBeInstanceOf(Error)
				expect(error).toEqual(err)
			}
		})

		it('returns url', () => {
			const url = 'http://localhost:3004/auth/login'
			expect(resolveApiUrl('REACT_APP_LOGIN_ROUTE')).toBe(url)
		})

		it('returns dynamic url', () => {
			const url = 'http://localhost:3004/projects/1/stats/items'
			expect(resolveApiUrl('REACT_APP_PROJECT_STATS_ITEMS_ROUTE', { projectId: 1 })).toBe(url)
		})

		it('returns same dynamic url as no options are provided', () => {
			const url = `http://localhost:3004/projects/{{projectId}}/stats/items`
			expect(resolveApiUrl('REACT_APP_PROJECT_STATS_ITEMS_ROUTE')).toBe(url)
		})

		it('returns same dynamic url as option key does not match regex', () => {
			const url = `http://localhost:3004/projects/{{projectId}}/stats/items`
			expect(resolveApiUrl('REACT_APP_PROJECT_STATS_ITEMS_ROUTE', { foo: 'bar' })).toBe(url)
		})
	})
})
