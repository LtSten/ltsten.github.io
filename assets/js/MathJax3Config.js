// c.f. https://stackoverflow.com/questions/59141529/mathjax-equation-numbers-do-not-show-using-jekyll-on-github-pages
MathJax = {
	tex: {
		tags: 'ams',
		inlineMath: [['$', '$'], ['\\(', '\\)']],
		displayMath: [['$$', '$$'], ['\\[', '\\]']],
		processEscapes: true
	}
};