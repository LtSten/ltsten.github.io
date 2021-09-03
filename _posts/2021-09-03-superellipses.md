---
title: "Superellipses"
date: 2021-09-03T18:45:56-00:00
categories:
  - blog
tags:
  - Mathematics
---

This post is inspired by Matt Parker's "[What is the area of a Squircle?](https://youtu.be/gjtTcyWL0NA)" video.
{: .notice}

# Definitions
A superellipse is defined by the equation

$$\left\lvert \frac{x}{a} \right\rvert^n + \left\lvert \frac{y}{b} \right\rvert^n = 1$$

where $$a$$ and $$b$$ are the semi-major axes (as with an ellipse), and the power $$n \in (0, \infty)$$.

The standard ellipse is given by the case $$n = 2$$, and in what follows we'll take $$a = b = 1$$, since the general case can be recovered by noting the area must scale by $$ab$$ (rigorously, as the Jacobian of the transformation $$x \mapsto ax$$, $$y \mapsto by$$).

# Area
We wish to compute the area of the region

$$R = \lbrace (x, y) \in \mathbb  R^2 : |x|^n + |y|^n \leq 1 \rbrace$$

That is,

$$A = \int_R dx dy$$

With reference to the previous post on [n-spheres]({% post_url 2021-01-30-n-sphere-jacobians %}), note that the trick to computing the area was to find a suitable change of coordinates. In order to deal more easily with the absolute values, note that we can simply integrate over the intersection of $$R$$ with the positive quadrant and multiply up by $$4$$,

$$A = 4 \int_{R'} dx dy$$

where $$R' = R \cap \lbrace (x, y) : x, y \geq 0 \rbrace$$.

Then, with the standard $$n = 2$$ case in mind, let's substitute

$$x^\frac{n}{2} = r \cos\theta, \quad y^\frac{n}{2} = r \sin\theta$$

We can compute the Jacobian for this change of coordinates if we write $$p = \frac{2}{n}$$ so that $$x = r^p \cos^p \theta$$ and similarly for $$y$$, giving

$$J = \frac{\partial(x, y)}{\partial(r, \theta)} =
\begin{pmatrix}
\partial_r x & \partial_\theta x \\
\partial_r y & \partial_\theta y
\end{pmatrix}
= 
\begin{pmatrix}
pr^{p-1} \cos^p \theta & -pr^p \cos^{p-1} \theta \sin \theta\\
pr^{p-1} \sin^p \theta & pr^p \sin^{p-1} \theta \cos \theta
\end{pmatrix}
$$

When taking the determinant, there is a common factor of $$p$$ in both rows, $$\cos^{p-1} \theta$$ in the first row, $$\sin^{p-1} \theta$$ in the second row, $$r^{p-1}$$ in the first column, and $$r^p$$ in the second column. Hence,

$$
\det J = p^2 r^{2p-1} \cos^{p-1} \theta \sin^{p-1} \theta
\begin{pmatrix}
\cos \theta & -\sin \theta \\
\sin \theta & \cos \theta
\end{pmatrix}
= p^2 r^{2p-1} \cos^{p-1} \theta \sin^{p-1} \theta
$$

Our desired area is therefore given by

$$A = 4 \int_0^{\frac{\pi}{2}} \int_0^1 p^2 r^{2p-1} \cos^{p-1} \theta \sin^{p-1} \theta \; dr d\theta = 4p^2 \cdot \left[ \frac{1}{2p} r^{2p} \right]_0^1 \int_0^{\frac{\pi}{2}} \cos^{p-1} \theta \sin^{p-1} \theta \; d\theta$$

The second integral looks somewhat problematic, but this is immediately observed to be a multiple the Beta function (see the post on [special functions]({% post_url 2021-02-09-special-functions %})) with $$z = w = \frac{p}{2}$$,

$$\frac{1}{2} B\left(\frac{p}{2}, \frac{p}{2}\right) = \int_0^{\frac{\pi}{2}} \sin^{p-1} \theta \cos^{p-1} \theta \; d\theta = \frac{1}{2} \cdot \frac{\Gamma\left(\frac{p}{2}\right)^2}{\Gamma(p)}$$

Combining these results together and substituting some instances of $$p$$ in terms of $$n$$, we have

$$A = \frac{4p^2}{2p} \cdot \frac{1}{2} \frac{\Gamma\left(\frac{1}{n}\right)^2}{\Gamma\left(\frac{2}{n}\right)} = \frac{2}{n} \cdot \frac{\Gamma\left(\frac{1}{n}\right)^2}{\Gamma\left(\frac{2}{n}\right)}$$

## Gamma Manipulations

We can tidy this up into a slightly simpler form by applying some Gamma function manipulations. Write $$x = \frac{1}{n}$$ and consider

$$A(x) = 2x \cdot \frac{\Gamma(x)^2}{\Gamma(2x)}$$

Firstly, we use $$z \Gamma(z) = \Gamma(z+1)$$ to rewrite the numerator as

$$\Gamma(x)^2 = \frac{\Gamma(x+1)^2}{x^2}$$

giving

$$A(x) = \frac{2 \Gamma(x+1)^2}{x \Gamma(2x)}$$

Then, multiply through by $$\frac{2}{2}$$ and combine the denominator,

$$A(x) = 4 \cdot \frac{\Gamma(x+1)^2}{2x\Gamma(2x)} = 4 \cdot \frac{\Gamma(x+1)^2}{\Gamma(2x+1)}$$

# Higher Dimensions
The superellipse presented above is simply the unit disc of the $$\ell^p$$ norm on $$\mathbb R^2$$, which is defined for $$\mathbf x \in \mathbb R^d$$ as

$$\| \mathbf x \|_p = \left(\sum_{i=1}^d x_i^p\right)^{\frac{1}{p}}$$

Hence we can immediately generalise to higher dimensions by considering the volume of the unit ball in $$\mathbb R^d$$ with respect to this norm - that is, of

$$R = \left\lbrace \| \mathbf x \|_p \leq 1 \right\rbrace \iff R = \left\lbrace \sum \left|x_i\right|^p \leq 1 \right\rbrace$$

The desired integral is then given by

$$V = \int_R dV$$

where $$dV = dx_1 \dots dx_d$$ is the volume element on $$\mathbb R^d$$. As before, we restrict to only the non-negative subspace where each $$x_i \geq 0$$ by making $$d$$ sequential bisections on the volume,

$$V = 2^d \int_{R_{\geq 0}} dV$$

This coordinate transformation is best done in two stages. Firstly, we reduce from the powers-of-$$p$$ to new coordinates where we can consider the usual $$\ell^2$$ (i.e. reduction to a hypersphere), and then perform the usual change of coordinates as derived in the [n-spheres]({% post_url 2021-01-30-n-sphere-jacobians %}) post to give uniform limits of integration.

To begin, introduce coordinates $$\mathbf y$$ such that $$y_i^2 = x_i^p$$. For notational convenience, introduce $$k = \frac{2}{p}$$ so that $$x_i = y_i^k$$. The Jacobian is trivially diagonal, with

$$\frac{\partial x_i}{\partial y_i} = k y_i^{k-1}$$

so that

$$V = 2^d \int_{B^2_{\geq 0}} k^d (y_1 \dots y_d)^{k-1} dV_{y}$$

where $$B^2$$ is the unit ball $$\left\lbrace \mathbf y : \| \mathbf y \|_2 \leq 1 \right\rbrace$$ and $$dV_y = dy_1 \dots dy_d$$ is the usual volume element in $$\mathbf y$$-space.

Now we perform the spherical change of coordinates, introducing

$$\begin{align*}
y_1 &= r\cos \phi_1 \\
y_2 &= r\sin \phi_1 \cos \phi_2 \\
y_3 &= r\sin \phi_1 \sin \phi_2 \cos \phi_3 \\
&\vdots \\
y_{d-2} &= r\sin \phi_1 \dots \sin \phi_{d-3} \cos \phi_{d-2} \\
y_{d-1} &= r\sin \phi_1 \dots \sin \phi_{d-3} \sin \phi_{d-2} \cos \phi_{d-1} \\
y_d &= r\sin \phi_1 \dots \sin \phi_{d-3} \sin \phi_{d-2} \sin \phi_{d-1}
\end{align*}
$$

As shown in the corresponding post, the Jacobian for this change of coordinates is given by

$$\det J_d = r^{d-1} (\sin \phi_1)^{d-2} (\sin \phi_2)^{d-3} \dots \sin \phi_{d-2} = r^{d-1} \prod_{i=1}^{d-2} (\sin \phi_i)^{(d-1)-i}$$

where it should be noted that we can extend the upper index to $$d-1$$ since this introduces only a multiplication by $$1$$.

Considering the integrand, we have

$$y_1 y_2 \dots y_d = r^d (\sin \phi_1)^{d-1} (\sin \phi_2)^{d-2} \dots \sin \phi_{d-1} \cdot \cos \phi_1 \dots \cos \phi_{d-1} = r^d \prod_{i=1}^{d-1} \left[ (\sin \phi_i)^{d-i} \cos \phi_i \right]$$

so that

$$(y_1 y_2 \dots y_d)^{k-1} = r^{(k-1)d} \prod_{i=1}^{d-1} \left[ (\sin \phi_i)^{(k-1)(d-i)} \cos^{k-1} \phi_i \right]$$

Combining these two observations, and using the note about the upper index on the former to combine the products, the integral becomes

$$V = (2k)^d \int_0^{\frac{\pi}{2}} \dots \int_0^{\frac{\pi}{2}} \int_0^1 r^{kd-1} \prod_{i=1}^{d-1} (\sin \phi_i)^{k(d-i)-1} \cos^{k-1} \phi_i \; dV$$

which is separable, and can be written as

$$V = (2k)^d \int_0^1 r^{kd-1} \; dr \cdot \prod_{i=1}^{d-1} \int_0^{\frac{\pi}{2}} (\sin \phi_i)^{k(d-i)-1} \cos^{k-1} \phi_i \; d\phi_i$$

The radial integral is trivial, and we obtain a Beta function for each angular integral,

$$\int_0^1 r^{kd-1} \; dr = \frac{1}{kd}, \qquad \int_0^{\frac{\pi}{2}} (\sin \phi_i)^{k(d-i)-1} \cos^{k-1} \phi_i \; d\phi_i = \frac{1}{2} B\left(\frac{k(d-i)}{2}, \frac{k}{2}\right)$$

giving

$$V = \frac{2 k^{d-1}}{d} \prod_{i=1}^{d-1} B\left(\frac{k(d-i)}{2}, \frac{k}{2}\right)$$

Writing in terms of $$p$$ by recalling that we set $$k = \frac{2}{p}$$, this becomes

$$V = \frac{2^d}{d} \cdot \prod_{i=1}^{d-1} \left[ \frac{1}{p} \cdot B\left(\frac{d-i}{p}, \frac{1}{p}\right) \right]$$

We can rewrite each term in the product in terms of the Gamma function as

$$\frac{1}{p} B\left(\frac{d-i}{p}, \frac{1}{p}\right) = \frac{1}{p} \cdot \frac{\Gamma\left(\frac{d-i}{p}\right) \Gamma\left(\frac{1}{p}\right)}{\Gamma\left(\frac{d-i+1}{p}\right)} = \frac{1}{p} \Gamma\left(\frac{1}{p}\right) \cdot \frac{\Gamma\left(\frac{d-i}{p}\right)}{\Gamma\left(\frac{d-i+1}{p}\right)}$$

Note that if we let $$\gamma_i = \Gamma\left(\frac{d-i}{p}\right)$$, then

$$\prod_{i=1}^{d-1} \frac{\Gamma\left(\frac{d-i}{p}\right)}{\Gamma\left(\frac{d-i+1}{p}\right)} = \prod_{i=1}^{d-1} \frac{\gamma_i}{\gamma_{i-1}} = \frac{\prod_{i=1}^{d-1} \gamma_i}{\prod_{i=0}^{d-2} \gamma_i} = \frac{\gamma_{d-1}}{\gamma_0} = \frac{\Gamma\left(\frac{1}{p}\right)}{\Gamma\left(\frac{d}{p}\right)}$$

Hence

$$V = \frac{2^d}{d} \cdot \left[ \frac{1}{p} \Gamma\left(\frac{1}{p}\right) \right]^{d-1} \cdot \frac{\Gamma\left(\frac{1}{p}\right)}{\Gamma\left(\frac{d}{p}\right)} = \left(\frac{2}{p}\right)^{d-1} \cdot \frac{2}{d} \cdot \frac{\Gamma\left(\frac{1}{p}\right)^d}{\Gamma\left(\frac{d}{p}\right)}$$

Or equivalently, combining the $$\frac{1}{p} \Gamma\left(\frac{1}{p}\right)$$ terms, we have

$$V = \frac{2^d}{d} \Gamma\left(\frac{1}{p}+1\right)^{d-1} \cdot \frac{\Gamma\left(\frac{1}{p}\right)}{\Gamma\left(\frac{d}{p}\right)}$$

Both of these forms provide a suitable extension of the formula into suitable regions of $$(p, d) \in \mathbb C^2$$.

# Summary
The volume of the region $$\left\lbrace \| \mathbf x \|_p \leq 1 \right\rbrace \subset \mathbb R^d$$ is given by

$$V(p, d) = \left(\frac{2}{p}\right)^{d-1} \cdot \frac{2}{d} \cdot \frac{\Gamma\left(\frac{1}{p}\right)^d}{\Gamma\left(\frac{d}{p}\right)}$$

The case $$d = 2$$ gives the superellipse,

$$V(p, 2) = \frac{2}{p} \cdot \frac{\Gamma\left(\frac{1}{p}\right)^2}{\Gamma\left(\frac{2}{p}\right)}$$

and this reduces to the area of a circle in the case $$p = 2$$,

$$V(2, 2) = \frac{\Gamma\left(\frac{1}{2}\right)^2}{\Gamma(1)} = \frac{\sqrt{\pi}^2}{1} = \pi$$