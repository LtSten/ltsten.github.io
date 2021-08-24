---
title: "Parametrisation and Integration over $$n$$-spheres"
date: 2021-01-29T21:09:17-00:00
categories:
  - blog
tags:
  - Mathematics
---

In this post, we begin by considering how we can parametrise points on a circle, and exploit this to perform a change of variables in 2D. Then, we perform the same analysis for spheres, before moving on to the general case of $$n$$-spheres. We compute the Jacobian in the general case, and use this to compute the surface area and volume of these shapes.

# Circles
Circles are often referred to as two dimensional, since they can be naturally embedded in 2D space with the equation

$$x^2 + y^2 = r^2$$

where $$r$$ is the radius of the circle. However, for a fixed radius (say $$r = 1$$, the unit circle), we require only one parameter, $$\theta$$, to describe it:

$$x = \cos \theta, \; y = \sin \theta$$

Since this is a one-parameter family of points, we name it $$S^1$$, where the one indicates that there is a single degree of freedom.

## A Seemingly Unrelated Problem
Suppose we're experimenting with one-dimensional integrals, and we want to evalute

$$I = \int_{-\infty}^\infty e^{-x^2} \, dx$$

This, at first sight, might look somewhat intimidating. $$e^{-x^2}$$ has no elementary antiderivative, so we're not going to be able to perform the indefinite integral and substitute our limits.

There is, however, a well-known trick. We begin by squaring $$I$$, and suggestively choose the variable $$y$$ for our second version of this integral, so that

$$I^2 = \left( \int_{-\infty}^\infty e^{-x^2} \, dx \right) \cdot \left( \int_{-\infty}^\infty e^{-y^2} \, dy \right)$$

We can then combine these two integrals into one, writing

$$I^2 = \int_{-\infty}^\infty \int_{-\infty}^\infty e^{-x^2} \cdot e^{-y^2} \, dx dy = \int_{\mathbb R^2} e^{-(x^2+y^2)} \, dx dy$$

At first glance, this does not look any simpler. However, we note now that the integrand depends only on the (square of the) distance from the origin,

$$r^2 = x^2 + y^2$$

If we could parametrise $$\mathbb R^2$$ by a radius and an angle, perhaps the integral would simplify, since then the angular part of the integral would be trivial. This is where considering the circle helps - we need a two-dimensional analogue of a change of variable rule for integration, specifically for

$$x = r \cos \theta, \; y = r \sin \theta$$

## Jacobians
Suppose we have two sets of coordinates $$\mathbf x = (x_1, \dots, x_n)$$ and $$\mathbf u = (u_1, \dots u_n)$$, where there is an invertible mapping

$$\mathbf x \leftrightarrow \mathbf u$$

We define the _Jacobian matrix_ of this transformation by

$$J_{ij} = \frac{\partial x_i}{\partial u_j}$$

and furthermore, one finds that

$$dx_1 \dots dx_n = \lvert \det J \rvert du_1 \dots du_n$$

where $$\det J$$ is often also referred to simply as the Jacobian.

In particular, for plane polar coordinates, we have

$$x(r, \theta) = r \cos \theta,  \; y(r, \theta) = r \sin \theta$$

giving a map $$(x, y) \leftrightarrow (r, \theta)$$ such that

$$J = \begin{pmatrix} \frac{\partial x}{\partial r} & \frac{\partial x}{\partial \theta} \\ \frac{\partial y}{\partial r} & \frac{\partial y}{\partial \theta} \end{pmatrix} = \begin{pmatrix} \cos \theta & -r\sin \theta \\ \sin \theta & r \cos \theta \end{pmatrix}$$

so that we subsequently obtain

$$\det J = r \cos^2 \theta + r \sin^2 \theta = r \implies dx \, dy = r \, dr \, d\theta$$

## Plane Polar Integrals
We can now perform the desired change of variables in our integral for $$I^2$$,

$$I^2 = \int_0^{2\pi} \int_0^\infty r e^{-r^2} \; dr d\theta = 2 \pi \cdot \left[ -\frac{1}{2} e^{-r^2} \right]_0^\infty = \pi \implies I = \sqrt{\pi}$$

Similarly, the "surface area" (really, arc length) of $$S^1$$ is given by

$$\int_0^{2 \pi}  d\theta = 2 \pi$$

and the "volume" (really, area) is given by

$$\int_0^{2 \pi} \int_0^1 r \, dr d\theta = 2 \pi \cdot \left[ \frac{1}{2} r^2 \right]_0^1 = \pi$$

where we can recover the usual perimeter and area formulae for circles by noting they must scale as $$r$$ and $$r^2$$ respectively.

# Spheres
We now advance to one higher dimension - following the same steps as we did for the circle, we consider $$S^2$$, which can be parametrised by

$$x = r \sin \theta \cos \phi, \; y = r \sin \theta \sin \phi, \; z = r \cos \theta \\ \quad \theta \in [0, \pi], \, \phi \in [0, 2\pi]$$

Computing the Jacobian, we find

$$
J = \frac{\partial(x, y, z)}{\partial(r, \theta, \phi)} =
\begin{pmatrix}
\sin \theta \cos \phi & r \cos \theta \cos \phi & -r \sin \theta \sin \phi \\
\sin \theta \sin \phi & r \cos \theta \sin \phi & r \sin \theta \cos \phi \\
\cos \theta & -r \sin \theta & 0
\end{pmatrix}
$$

To compute the determinant, we exploit the usual column/row properties of the determinant to immediately extract two factors of $$r$$ (one each from the second and third columns), and a factor of $$\sin \theta$$ from the final column:

$$
\det J = r^2 \sin \theta
\begin{vmatrix}
\sin \theta \cos \phi & \cos \theta \cos \phi & - \sin \phi \\
\sin \theta \sin \phi & \cos \theta \sin \phi & \cos \phi \\
\cos \theta & -\sin \theta & 0
\end{vmatrix}
$$

Expanding about the final row, we have

$$
\begin{align}
\det J &= r^2 \sin \theta \left( \cos \theta \begin{vmatrix} \cos \theta \cos \phi & -\sin \phi \\ \cos \theta \sin \phi & \cos \phi \end{vmatrix} + \sin \theta \begin{vmatrix} \sin \theta \cos \phi & -\sin \phi \\ \sin \theta \sin \phi & \cos \phi \end{vmatrix} \right) \\
&= r^2 \sin \theta \cdot \underbrace{(\cos^2 \theta + \sin^2 \theta)}_{1} \cdot \underbrace{\begin{vmatrix} \cos \phi & -\sin \phi \\ \sin \phi & \cos \phi \end{vmatrix}}_{1} \\
&= r^2 \sin \theta
\end{align}
$$

so that $$dx \, dy \, dz = r^2 \sin \theta \; dr \, d\theta \, d\phi$$. The surface area of $$S^2$$ is given by fixing $$r = 1$$, so that

$$A = \int_0^{2 \pi} \int_0^\pi \sin \theta \, d\theta \, d\phi = 2 \pi \cdot \left[ -\cos \theta \right]_0^\pi = 4 \pi$$

whereas the volume enclosed by $$S^2$$ is given by

$$V = \int_0^{2 \pi} \int_0^\pi \int_0^1 r^2 \sin \theta \; dr \, d\theta \, d\phi = 4 \pi \cdot \left[ \frac{r^3}{3} \right]_0^1 = \frac{4\pi}{3}$$

# Higher Dimensions
With two complete examples out of the way, we can now turn our attention to the $$n$$-sphere. Such a sphere can be embedded in an $$(n+1)$$ dimensional space as

$$\lvert \mathbf x \rvert = r$$

where $$\mathbf x = (x_1, \dots, x_{n+1})$$. For convenience, let's define $$m = n+1$$ as the dimension of the space, so that our equation is

$$x_1^2 + \dots + x_m^2 = r^2$$

In order to parametrise the $$n$$-sphere, fix $$r = 1$$ and consider

$$x_1^2 + \dots + x_m^2 = 1$$

where we're expecting to have to introduce $$n = m - 1$$ degrees of freedom. Taking inspiration from the $$\cos^2 \theta + \sin^2 \theta = 1$$ case of $$S^1$$, let's suggestively group our defining equation as

$$(x_1^2) + (x_2^2 + \dots + x_m^2) = 1$$

Since $$x_2^2 + \dots + x_m^2 \geq 0$$, we can write

$$x_2^2 + \dots + x_m^2 = X^2$$

for some $$X \geq 0$$. Our equation then becomes

$$x_1^2 + X^2 = 1$$

at which point we introduce an angle $$\phi_1$$ such that

$$x_1 = \cos \phi_1, \; X = \sin \phi_1$$

Observe that $$X$$ is non-negative, so we restrict $$\phi_1$$ to the range $$[0, \pi]$$. Moreover, since $$X$$ is the sum of squares, it is zero iff each $$x_i$$ for $$i \geq 2$$ is zero, so we can factor $$\sin \phi_1$$ out of $$x_2, x_3, \dots, x_m$$, writing

$$x_i = \sin \phi_1 X_i, \quad i \geq 2$$

where we've introduced $$m-1$$ new coordinates $$X_i$$. Then, observe that

$$\sin \phi_1 = X = \sqrt{\sin^2 \phi_1 X_2^2 + \dots + \sin^2 \phi_1 X_m^2} = \sin \phi_1 \sqrt{X_2^2 + \dots + X_m^2}$$

where we've exploited the fact that $$\sin \phi_1$$ is necessarily non-negative. We subsequently obtain the equation

$$X_2^2 + \dots + X_m^2 = 1$$

which is precisely the defining equation we started from but reduced by one dimension. This lets us inductively parametrise each of our dimensions, where at each step, we use $$\phi_i$$ to eliminate the (scaled) version of $$x_i$$. If we introduce the angles $$\phi_2, \dots, \phi_{m-1}$$, then we have

$$
\begin{align}
x_1 &= \cos \phi_1 \\
x_2 &= \sin \phi_1 \cos \phi_2 \\
x_3 &= \sin \phi_1 \sin \phi_2 \cos \phi_3 \\
&\vdots \\
x_{m-2} &= \sin \phi_1 \dots \sin \phi_{m-3} \cos \phi_{m-2} \\
x_{m-1} &= \sin \phi_1 \dots \sin \phi_{m-3} \sin \phi_{m-2} \cos \phi_{m-1} \\
x_m &= \sin \phi_1 \dots \sin \phi_{m-3} \sin \phi_{m-2} \sin \phi_{m-1}
\end{align}
$$

For each of the angles $$\phi_1, \dots, \phi_{m-2}$$, we can introduce them as being in the range $$[0, \pi]$$ in order to choose $$\sin \phi_i \geq 0$$. Observe, however, that this means

$$x_m = \underbrace{\sin \phi_1 \dots \sin \phi_{m-3} \sin \phi_{m-2}}_{\geq 0} \cdot \sin \phi_{m-1}$$

and hence the correct range for the _final_ angle $$\phi_{m-1}$$ is $$[0, 2\pi]$$.

To introduce a change of coordinates on $$\mathbb R^m$$, we need only add in our radial parameter $$r$$:

$$\begin{align}
x_1 &= r\cos \phi_1 \\
x_2 &= r\sin \phi_1 \cos \phi_2 \\
x_3 &= r\sin \phi_1 \sin \phi_2 \cos \phi_3 \\
&\vdots \\
x_{m-2} &= r\sin \phi_1 \dots \sin \phi_{m-3} \cos \phi_{m-2} \\
x_{m-1} &= r\sin \phi_1 \dots \sin \phi_{m-3} \sin \phi_{m-2} \cos \phi_{m-1} \\
x_m &= r\sin \phi_1 \dots \sin \phi_{m-3} \sin \phi_{m-2} \sin \phi_{m-1}
\end{align}
$$

## Jacobian
To make use of this change of variable in an integral, we need the Jacobian. Initially, this may seem daunting:

$$J_m = \frac{\partial(x_1, \dots, x_m)}{\partial(r, \phi_1, \dots, \phi_{m-1})} =
\begin{pmatrix}
\partial_r x_1 & \partial_{\phi_1} x_1 & \partial_{\phi_2} x_1 & \dots \\
\partial_r x_2 & \partial_{\phi_1} x_2 & \partial_{\phi_2} x_2 & \dots \\
\vdots & \vdots & \vdots \\
\partial_r x_m & \partial_{\phi_1} x_m & \partial_{\phi_2} x_m & \dots
\end{pmatrix}
$$

The way to make progress is to proceed by induction - in particular, we wish to form an equation relating $$J_m$$ to $$J_{m+1}$$. To do so, we introduce an additional angle $$\phi_m$$ and define $$(y_1, \dots, y_{m+1})$$ in the same manner as the $$x_i$$:

$$\begin{align}
y_1 &= r\cos \phi_1 \\
y_2 &= r\sin \phi_1 \cos \phi_2 \\
y_3 &= r\sin \phi_1 \sin \phi_2 \cos \phi_3 \\
&\vdots \\
y_{m-2} &= r\sin \phi_1 \dots \sin \phi_{m-3} \cos \phi_{m-2} \\
y_{m-1} &= r\sin \phi_1 \dots \sin \phi_{m-3} \sin \phi_{m-2} \cos \phi_{m-1} \\
y_m &= r\sin \phi_1 \dots \sin \phi_{m-3} \sin \phi_{m-2} \sin \phi_{m-1} \cos \phi_m \\
y_{m+1} &= r\sin \phi_1 \dots \sin \phi_{m-3} \sin \phi_{m-2} \sin \phi_{m-1} \sin \phi_m \\
\end{align}
$$

and it is these coordinates that we will use to consider $$J_{m+1}$$.

Denote also

$$\partial_i = \begin{cases} \partial_r & i = 1 \\ \partial_{\phi_{i-1}} & \text{otherwise} \end{cases}$$

This means we can write our Jacobian $$J_m$$ concisely as

$$J_{ij} = \partial_j x_i$$

Observe that the only dependence on $$\phi_m$$ is in $$y_m$$ and $$y_{m+1}$$, and that for $$i < m$$, we have

$$x_i \equiv y_i$$

and hence, for $$i, j < m$$,

$$\partial_j x_i = \partial_j y_i$$

This means that the upper-left $$(m-1) \times (m-1)$$ submatrix of $$J_m$$ agrees with that of $$J_{m+1}$$. Let this common submatrix be denoted $$M$$, so that

$$
\begin{align}
J_m &= \begin{pmatrix} M & \begin{matrix} \partial_m x_1 \\ \partial_m x_2 \\ \vdots \end{matrix} \\ \begin{matrix} \partial_1 x_m & \partial_2 x_m & \dots \end{matrix} & \partial_m x_m \end{pmatrix} \\
J_{m+1} &= \begin{pmatrix} M & \begin{matrix} \partial_m y_1 & \partial_{m+1} y_1 \\ \partial_m y_2 & \partial_{m+1} y_2 \\ \vdots & \vdots \end{matrix} \\ \begin{matrix} \partial_1 y_m & \partial_2 y_m & \dots \\ \partial_1 y_{m+1} & \partial_2 y_{m+1} & \dots \end{matrix} & \begin{matrix} \partial_m y_m & \partial_{m+1} y_m \\ \partial_m y_{m+1} & \partial_{m+1} y_{m+1} \end{matrix} \end{pmatrix} \\
\end{align}
$$

We can now work on evaluating terms in $$J_{m+1}$$ - begin by observing that:

$$y_m = x_m \cos \phi_m, \quad y_{m+1} = x_m \sin \phi_m$$

Looking first at the final two rows of $$J_{m+1}$$, we use the above relation to conclude that for $$i \leq m$$, we have

$$\partial_i y_m = \cos \phi_m \partial_i x_m, \quad \partial_i y_{m+1} = \sin \phi_m \partial_i x_m$$

and that in the remaining case $$i = m+1$$, we have

$$\partial_{m+1} y_m = -x_m \sin \phi_m, \quad \partial_{m+1} y_{m+1} = x_m \cos \phi_m$$

Considering now the final two columns, it remains to evaluate $$\partial_m y_i$$ and $$\partial_{m+1} y_i$$ for $$i \leq m-1$$.

Since $$x_i \equiv y_i$$ for $$i \leq m-1$$, we necessarily have $$\partial_{m+1} y_i = \partial_{m+1} x_i = 0$$ as the $$x_i$$ have no dependence on $$\phi_m$$. Putting all this together, we observe that

$$
\begin{align}
J_{m+1} &=
\begin{pmatrix}
M & \begin{matrix} \partial_m x_1 \\ \partial_m x_2 \\ \vdots \\ \partial_m x_{m-1} \end{matrix} & \begin{matrix} 0 \\ 0 \\ \vdots \\ 0 \end{matrix} \\
\begin{matrix} \cos \phi_m \partial_1 x_m & \cos \phi_m \partial_2 x_m & \dots \end{matrix} & \cos \phi_m \partial_m x_m & -\sin \phi_m x_m \\
\begin{matrix} \sin \phi_m \partial_1 x_m & \sin \phi_m \partial_2 x_m & \dots \end{matrix} & \sin \phi_m \partial_m x_m & \cos \phi_m x_m
\end{pmatrix} \\
\end{align}
$$

Taking the determinant by expanding about the final column, we have

$$
\begin{align}
\det J_{m+1} = \cos \phi_m x_m
	&\begin{vmatrix}
	M & \begin{matrix} \partial_m x_1 \\ \partial_m x_2 \\ \vdots \\ \partial_m x_{m-1} \end{matrix} \\
	\begin{matrix} \cos \phi_m \partial_1 x_m & \cos \phi_m \partial_2 x_m & \dots \end{matrix} & \cos \phi_m \partial_m x_m
	\end{vmatrix} \\

+ \sin\phi_m x_m

	&\begin{vmatrix}
	M & \begin{matrix} \partial_m x_1 \\ \partial_m x_2 \\ \vdots \\ \partial_m x_{m-1} \end{matrix} \\
	\begin{matrix} \sin \phi_m \partial_1 x_m & \sin \phi_m \partial_2 x_m & \dots \end{matrix} & \sin \phi_m \partial_m x_m
	\end{vmatrix}
\end{align}
$$

Note that we can now take out a common factor of $$\cos \phi_m$$ from the first determinant, and $$\sin \phi_m$$ from the second, at which point we are left with

$$
\begin{align}
\det J_{m+1} &= (\cos^2 \phi_m + \sin^2 \phi_m) x_m
\begin{vmatrix}
M & \begin{matrix} \partial_m x_1 \\ \partial_m x_2 \\ \vdots \\ \partial_m x_{m-1} \end{matrix} \\
\begin{matrix} \partial_1 x_m & \partial_2 x_m & \dots \end{matrix} & \partial_m x_m
\end{vmatrix} \\
&= x_m \left\lvert \Bigg( \partial_j x_i \Bigg)_{1 \leq i, j \leq m} \right\rvert \\
&= x_m \det J_m
\end{align}
$$

From the definition of $$x_m$$, we conclude that

$$\det J_{m+1} = r \sin \phi_1 \dots \sin \phi_{m-1} \det J_m$$

Recalling our base case of the circle $$n = 1 \iff m = 2$$, where we had $$\det J_2 = r$$, we can apply this recursively in order to obtain our final Jacobian determinant,

$$\det J_m = r^{m-1} (\sin \phi_1)^{m-2} (\sin \phi_2)^{m-3} \dots \sin \phi_{m-2}$$

## Surface Area and Volume
The surface area of an $$n$$-sphere is therefore given by

$$
\begin{align}
A_n &= \int_0^{2\pi} \int_0^\pi \dots \int_0^\pi (\sin \phi_1)^{n-1} \dots \sin \phi_{n-1} \, d\phi_1 \dots d\phi_n \\
&= 2 \pi \prod_{i=1}^{n-1} \int_0^\pi \sin^i \phi \, d\phi
\end{align}
$$

which gives the recurrence relation

$$A_{n+1} = A_n \int_0^\pi \sin^n \phi \, d\phi, \quad A_1 = 2 \pi, \, A_2 = 4 \pi$$

This integral can be rewritten as a Beta function, which can then be evaluated in terms of the Gamma function - see the post on [special functions]({% post_url 2021-02-09-special-functions %}). Using the linked result, we obtain

$$A_{n+1} = A_n \cdot \sqrt{\pi} \cdot \frac{\Gamma\left(\frac{n}{2}+\frac{1}{2}\right)}{\Gamma\left(\frac{n}{2}+1\right)}$$

Since the arguments of the gamma functions differ by a half, to make progress, we write $$A_{n+2}$$ in terms of $$A_n$$ by applying the recurrence relation twice, giving

$$
\begin{align}
A_{n+2} &= \pi \cdot \frac{\Gamma\left(\frac{n+1}{2}+\frac{1}{2}\right)}{\Gamma\left(\frac{n+1}{2}+1\right)} \cdot \frac{\Gamma\left(\frac{n}{2}+\frac{1}{2}\right)}{\Gamma\left(\frac{n}{2}+1\right)} A_n \\
&= \pi \cdot \frac{\Gamma\left(\frac{n}{2}+\frac{1}{2}\right)}{\Gamma\left(\frac{n}{2}+\frac{3}{2}\right)} A_n \\
&= \frac{\pi}{\frac{n}{2}+\frac{1}{2}} A_n
\end{align}
$$

where in going from the first to the second line we've cancelled the numerator of the first term with the denominator of the second, and in the second to third, used $$\Gamma(z+1) = z \Gamma(z)$$ on the denominator. This property of the gamma function will be exploited multiple times in the following proof.

Offsetting the indices by $$2$$, we find that

$$A_n = \frac{\pi}{\frac{n}{2}-\frac{1}{2}} A_{n-2}$$

Applying this recursively, we obtain

$$
\begin{align}
A_n &= \frac{\pi}{\frac{n}{2}-\frac{1}{2}} \cdot \frac{\pi}{\frac{n}{2}-\left(1+\frac{1}{2}\right)} A_{n-4} \\
&= \frac{\pi}{\frac{n}{2}-\frac{1}{2}} \cdot \frac{\pi}{\frac{n}{2}-\left(1+\frac{1}{2}\right)} \dots \frac{\pi}{\frac{n}{2}-\left((k-1)+\frac{1}{2}\right)} A_{n-2k} \\
&= \pi^k A_{n-2k} \left[\prod_{j=0}^{k-1} \left( \left(\frac{n}{2}-\frac{1}{2}\right) - j \right)\right]^{-1}
\end{align}
$$

This may look like a more complicated expression, but the trick now is to make the following observation:

$$
\begin{align}
\prod_{j=0}^{m} (x-j) &= x(x-1)(x-2) \dots (x-m) \\
&= \frac{x(x-1)(x-2) \dots (x-m) \cdot \Gamma(x-m)}{\Gamma(x-m)} &&\text{multiplying by } 1 \\
&= \frac{\Gamma(x+1)}{\Gamma(x-m)}
\end{align}
$$

where we've transformed the numerator by repeatedly using $$\Gamma(z+1) = z \Gamma(z)$$, working right to left.

We can use this in our expression for $$A_n$$ if we substitute $$x = \frac{n}{2}-\frac{1}{2}$$ and $$m = k-1$$, to give

$$A_n = \pi^k A_{n-2k} \frac{\Gamma\left(\frac{n}{2}+\frac{1}{2} - k \right)}{\Gamma\left(\frac{n}{2}+\frac{1}{2}\right)}$$

Finally, we can now substitute specific values of $$k$$ to deduce $$A_n$$.

If $$n \geq 2$$ is even, we let $$k = \frac{n}{2} - 1$$ to give

$$
\begin{align}
A_n &= \pi^{\frac{n}{2} - 1} A_2 \frac{\Gamma\left(\frac{n}{2}+\frac{1}{2} - \left(\frac{n}{2} - 1\right) \right)}{\Gamma\left(\frac{n}{2}+\frac{1}{2}\right)} \\
&= \pi^{\frac{n}{2} - 1} \cdot 4 \pi \cdot \frac{\Gamma\left(\frac{3}{2}\right)}{\Gamma\left(\frac{n}{2}+\frac{1}{2}\right)} \\
&= \frac{2\pi^{\frac{n}{2}+\frac{1}{2}}}{\Gamma\left(\frac{n}{2}+\frac{1}{2}\right)}
\end{align}
$$

where we've used the fact that $$A_2 = 4 \pi$$ and $$\Gamma\left(\frac{3}{2}\right) = \frac{\sqrt{\pi}}{2}$$.

Similarly, if $$n \geq 3$$ is odd, we can let $$k = \frac{n-1}{2}$$ to give

$$
\begin{align}
A_n &= \pi^{\frac{n-1}{2}} A_1 \frac{\Gamma\left(\frac{n}{2}+\frac{1}{2} - \frac{n-1}{2} \right)}{\Gamma\left(\frac{n}{2}+\frac{1}{2}\right)} \\
&= \pi^{\frac{n-1}{2}} \cdot 2 \pi \cdot \frac{\Gamma(1)}{\Gamma\left(\frac{n}{2}+\frac{1}{2}\right)} \\
&= \frac{2\pi^{\frac{n}{2}+\frac{1}{2}}}{\Gamma\left(\frac{n}{2}+\frac{1}{2}\right)}
\end{align}
$$

Observe that both odd and even cases give the same formula. Moreover, this formula holds for $$n \in \lbrace 1, 2 \rbrace$$, allowing us to conclude

$$A_n = \frac{2\pi^{\frac{n}{2}+\frac{1}{2}}}{\Gamma\left(\frac{n}{2}+\frac{1}{2}\right)} \quad \forall n \in \mathbb N$$

The volume of an $$n$$-sphere follows almost immediately. It is given by

$$
\begin{align}
V_n &= \int_0^{2\pi} \int_0^\pi \dots \int_0^\pi \int_0^1 r^n (\sin \phi_1)^{n-1} \dots \sin \phi_{n-1} \, dr d\phi_1 \dots d\phi_n \\
&= A_n \int_0^1 r^n \, dr \\
&= \frac{2\pi^{\frac{n}{2}+\frac{1}{2}}}{(n+1) \Gamma\left(\frac{n}{2}+\frac{1}{2}\right)}
\end{align}
$$

This can be rewritten slightly more neatly by noting that

$$\frac{2}{(n+1) \Gamma\left(\frac{n}{2}+\frac{1}{2}\right)} = \left(\frac{\Gamma\left(\frac{n}{2}+\frac{1}{2}\right)}{\frac{n}{2}+\frac{1}{2}}\right)^{-1} = \Gamma\left(\frac{n}{2}+\frac{3}{2}\right)^{-1}$$

so that

$$V_n = \frac{\pi^{\frac{n}{2}+\frac{1}{2}}}{\Gamma\left(\frac{n}{2}+\frac{3}{2}\right)}$$

Finally, observe that these formulae become particularly simple when written in terms of the dimension of the space in which an $$n$$-sphere can be embedded, i.e. $$d = n + 1$$. Performing this substitution, we have

$$A_n = \frac{2\pi^{\frac{d}{2}}}{\Gamma\left(\frac{d}{2}\right)}, \quad V_n = \frac{\pi^{\frac{d}{2}}}{\Gamma\left(\frac{d}{2} + 1\right)}$$

as the "area" and "volume" of hyperspheres in $$\mathbb R^d$$.