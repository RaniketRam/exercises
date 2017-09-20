module.exports = class Bob {
	hey (input) {
		if (/^.*[a-z0-9].*\?\W*$/.test(input)) { // if every statement ends with '?' mark but not with uppercase letters.
			return 'Sure.'
		} else if (/[a-zA-Z]/.test(input) && input === input.toUpperCase()) { // if every letters of the statement are uppercase
			return 'Whoa, chill out!'
		} else if (/^\W*$/.test(input)) { // if the statement contains only the white spaces or special characters.
			return 'Fine. Be that way!'
		}
		return 'Whatever.' // if non of the conditions matches.
	}
}