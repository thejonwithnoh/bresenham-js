(function(root, propertyName)
{
	root[propertyName] = function(pos1, pos2)
	{
		var delta = pos2.map(function(value, index) { return value - pos1[index]; });
		var increment = delta.map(Math.sign);
		var absDelta = delta.map(Math.abs);
		var absDelta2 = absDelta.map(function(value) { return 2 * value; });
		var maxIndex = absDelta.reduce(function(accumulator, value, index) { return value > absDelta[accumulator] ? index : accumulator; }, 0);
		var error = absDelta2.map(function(value) { return value - absDelta[maxIndex]; });

		var result = [];
		var current = pos1.slice();
		for (var j = 0; j < absDelta[maxIndex]; j++)
		{
			result.push(current.slice());
			for (var i = 0; i < error.length; i++)
			{
				if (error[i] > 0)
				{
					current[i] += increment[i];
					error[i] -= absDelta2[maxIndex];
				}
				error[i] += absDelta2[i];
			}
		}
		result.push(current.slice());
		return result;
	};
}).apply(this, typeof module === 'undefined' ? [this, 'bresenham'] : [module, 'exports']);