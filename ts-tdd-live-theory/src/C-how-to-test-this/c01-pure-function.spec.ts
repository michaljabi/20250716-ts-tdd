
function makeTheEmail(name = 'name', domain = 'fake.com') {
	return [name, domain].join('@');
}

describe('[c001] how to test Pure Function? (makeTheEmail)', () => {

	it('should return mike@domain.com for given name mike and domain.com', () => {
		const name = 'mike';
		const domain = 'domain.com';

		const email = makeTheEmail(name, domain);

		expect(email).toBe('mike@domain.com')
	})

	it('should return ana@fake.com when no domain just name: ana given', () => {
		const name = 'ana';

		const email = makeTheEmail(name);

		expect(email).toBe('ana@fake.com')
	})

	it('should return name@fake.com when no data given', () => {
		const email = makeTheEmail();

		expect(email).toBe('name@fake.com')
	})
})
