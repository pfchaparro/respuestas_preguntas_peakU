let freq = {}
const mostFrequentSum = (t) => {
	const getAllSums = (tree) => {
		if(!tree) {
			return 0
		}
		const sum = getAllSums(tree.left) + getAllSums(tree.right) + tree.value
		freq[sum] = (freq[sum] || 0) + 1
		return sum
	}

	getAllSums(t)
	const maxFreq = Object.values(freq).reduce((mx, cur) => Math.max(mx, cur), 0)
	return Object.keys(freq)
				 .filter(key => freq[key] === maxFreq)
				 .map(key => parseInt(key))
				 .sort((a, b) => a -b)
}

var t = { "value": 1, "left": { "value": 2, "left": null, "right": null }, "right": { "value": 3, "left": null, "right": null } }

mostFrequentSum(t)