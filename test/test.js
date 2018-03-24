const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom ', function(){

	it('If the word ends in "ar", those two characters are removed', function() {
		const translation = platzom('programar')
		expect(translation).to.equal('program')
	})

	it('If the word starts with Z, "pe" is added at the end', function() {
		const translation = platzom('zorro')
		const translation2 = platzom('zarpar')
		expect(translation).to.equal('zorrope')
		expect(translation2).to.equal('zarppe')

		
	})

	it('If the translated word has 10 or more letters, it must be split in half and joined with a script from the middle', function() {
		const translation = platzom('abecedario')
		expect(translation).to.equal('abece-dario')
	})

	it('If the original word is a palindrome? No previous rule counts and is returned the same word interspersed with uppercase and lowercase', function() {
		const translation = platzom('sometemos')
		expect(translation).to.equal('SoMeTeMoS')
	})

	
})