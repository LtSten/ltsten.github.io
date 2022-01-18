// c.f. https://stackoverflow.com/questions/59141529/mathjax-equation-numbers-do-not-show-using-jekyll-on-github-pages
MathJax = {
	tex: {
		tags: 'ams',
		inlineMath: [['$', '$'], ['\\(', '\\)']],
		displayMath: [['$$', '$$'], ['\\[', '\\]']],
		processEscapes: true,
		macros: {
			abs: ['\\left\\lvert #1 \\right\\rvert', 1],
			norm: ['\\left\\| #1 \\right\\|', 1],
			floor: ['\\left\\lfloor #1 \\right\\rfloor', 1],
			
			// Vectors
			bm: ["{\\boldsymbol #1}", 1], // since bm package not supported
			bv: ['{\\bm{{#1}}}', 1],
			// Derivatives
			grad: ['\\nabla'],
			curl: ['\\grad \\times #1', 1], // Using boldsymbol for bv, these look better without it
			divg: ['\\grad \\cdot #1', 1],
			// Auto vector versions
			curlv: ['\\curl{\\bv{#1}}', 1],
			divgv: ['\\divg{\\bv{#1}}', 1],

			// Fraction derivatives
			deriv: ['\\frac{d{#1}}{d{#2}}', 2],
			pderiv: ['\\frac{\\partial#1}{\\partial#2}', 2],
			derivn: ['\\frac{d^{#3}{#1}}{d{#2}^{#3}}', 3],
			pderivn: ['\\frac{\\partial^{#3}#1}{\\partial{#2}^{#3}}', 3],

			// Define-equals
			defeq: ['{:=}'],
			eqdef: ['{=:}'],

			// Sets
			F: ['\\mathbb{F}'],
			R: ['\\mathbb{R}'],
			C: ['\\mathbb{C}'],
			N: ['\\mathbb{N}'],
			Z: ['\\mathbb{Z}'],
			Q: ['\\mathbb{Q}'],
			
			set: ['\\left\\lbrace #1 \\right\\rbrace', 1]
		}
	}
};