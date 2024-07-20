// c.f. https://stackoverflow.com/questions/59141529/mathjax-equation-numbers-do-not-show-using-jekyll-on-github-pages
MathJax = {
	loader: { load: ['[tex]/mathtools']},
	tex: {
		tags: 'ams',
		packages: {'[+]' : ['mathtools']},
		inlineMath: [['$', '$'], ['\\(', '\\)']],
		displayMath: [['$$', '$$'], ['\\[', '\\]']],
		processEscapes: true,
		macros: {
			// Moved to mathtools.pairedDelimiters
			//abs: ['\\left\\lvert #1 \\right\\rvert', 1],
			//norm: ['\\left\\lVert #1 \\right\\rVert', 1],
			//floor: ['\\left\\lfloor #1 \\right\\rfloor', 1],
			
			// Vectors
			bm: ["{\\boldsymbol #1}", 1], // Since bm package not supported
			bv: ['{\\bm{{#1}}}', 1],
			// Derivatives
			grad: ['\\nabla'],
			curl: ['\\grad \\times #1', 1], // Using boldsymbol for bv, these look better without it
			divg: ['\\grad \\cdot #1', 1],
			// Auto vector versions
			curlv: ['\\curl{\\bv{#1}}', 1],
			divgv: ['\\divg{\\bv{#1}}', 1],

			// Inner product
			//innerp: ['{\\left\\langle{#1, #2}\\right\\rangle}', 2],

			// Fraction derivatives
			deriv: ['\\frac{d{#1}}{d{#2}}', 2],
			pderiv: ['\\frac{\\partial#1}{\\partial#2}', 2],
			derivn: ['\\frac{d^{#3}{#1}}{d{#2}^{#3}}', 3],
			pderivn: ['\\frac{\\partial^{#3}#1}{\\partial{#2}^{#3}}', 3],

			// Define-equals
			defeq: ['\\coloneqq'],
			eqdef: ['\\eqqcolon'],

			// Sets
			F: ['\\mathbb{F}'],
			R: ['\\mathbb{R}'],
			C: ['\\mathbb{C}'],
			N: ['\\mathbb{N}'],
			Z: ['\\mathbb{Z}'],
			Q: ['\\mathbb{Q}'],
			P: ['\\mathbb{P}'],
			setint: ['{#1}^\\mathrm{o}', 1]
			
			//set: ['\\left\\lbrace #1 \\right\\rbrace', 1]
		},
		mathtools: {
			pairedDelimiters: {
				abs			: ['\\lvert', '\\rvert', '#1', 1, '', ''],
				norm		: ['\\lVert', '\\rVert', '#1', 1, '', ''],
				normsub		: ['\\lVert', '\\rVert', '#1', 2, '', '_{#2}'],
				floor		: ['\\lfloor', '\\rfloor', '#1', 1, '', ''],
				ceil		: ['\\lceil', '\\rceil', '#1', 1, '', ''],
				innerp		: ['\\langle', '\\rangle', '#1,#2', 2, '', ''],
				innerpsub	: ['\\langle', '\\rangle', '#1,#2', 3, '', '_{#3}'],
				set			: ['\\lbrace', '\\rbrace', '#1', 1, '', '']
			}
		}
	}
};