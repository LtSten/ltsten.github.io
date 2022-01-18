---
title: "Fourier Transforms"
date: 2022-01-18 18:00:00 +0000
categories:
  - blog
tags:
  - Mathematics
---

This post is inspired by a lecture series given by [David Skinner](http://www.damtp.cam.ac.uk/user/dbs26/) in 2016. In particular, for further reading on Fourier transformations, see [chapter 8](http://www.damtp.cam.ac.uk/user/dbs26/1BMethods/FourierT.pdf) of the Mathematical Methods lecture notes.
{: .notice}

# The Fourier Transformation and its Properties
Given a suitably well-behaved function $$f : \mathbb R \to \mathbb C$$, define the Fourier transform $$\tilde f(k)$$ of $$f(x)$$ as

$$\tilde f(k) = \int_{-\infty}^\infty e^{-ikx} f(x) \; dx$$

We can denote this operation on functions (_functional_) as $$\tilde f = \mathcal{F}[f]$$. It follows immediately from the definition that this is linear, so that $$\mathcal{F}[\alpha f + \beta g] = \alpha \tilde f + \beta \tilde g$$ for all $$\alpha, \beta \in \mathbb C$$. Moreover, we can show a number of simple properties:

* \$$\mathcal{F}[f(x-c)] = e^{-ikc} \tilde f(k)$$
* \$$\mathcal{F}[e^{icx} f(x)] = \tilde f(k-c)$$
* For $$c \neq 0$$, we have $$\mathcal{F}[f(cx)] = \frac{1}{\lvert c \rvert} \tilde f \left( \frac{k}{c} \right)$$

For the first, we substitute $$u = x - c$$ in the integral to give

$$\mathcal{F}[f(x-c)] = \int_{-\infty}^\infty e^{-ikx} f(x-c) \; dx = \int_{-\infty}^\infty e^{-ik(u+c)} f(u) \; du = e^{-ikc} \tilde f(k)$$

The second follows immediately from combining the exponentials in the integral,

$$\mathcal{F}[e^{icx} f(x)] = \int_{-\infty}^\infty e^{-i(k-c)x} f(x) \; dx = \tilde f (k-c)$$

The third follows similarly from substituting $$u = cx$$, taking care with regards to the sign of $$c$$ (note the interchanging of limits in the case of $$c < 0$$)

$$\mathcal{F}[f(cx)] = \int_{-\infty}^\infty e^{-ikx} f(cx) \; dx = \int_{-c\infty}^{c\infty} e^{-\frac{iku}{c}} f(u) \; \frac{du}{c} = \frac{1}{\lvert c \rvert} \tilde f\left( \frac{k}{c} \right)$$

There are a further three properties which are useful in the context of Fourier transforms. Firstly, define the convolution of two functions $$f$$ and $$g$$ as

$$(f \ast g)(x) = \int_{\mathbb R} f(t) g(x - t) \; dt$$

We can now take the Fourier transform of a convlution,

$$
\begin{align*}
\mathcal{F}[(f \ast g)(x)] &= \int_{-\infty}^\infty e^{-ikx} \left[\int_{-\infty}^\infty f(t) g(x-t) \; dt\right] dx \\
&= \int_{\mathbb R^2} e^{-ik(x-t)} g(x-t) \cdot e^{-ikt} f(t) \; dx dt && \text{Exchanging the order of integration} \\
&= \int_{-\infty}^\infty \left[\int_{-\infty}^\infty e^{-iks} g(s) ds\right] e^{-ikt} f(t) \; dt && \text{Substituting } s = x-t \text{ for } x \\
&= \left[ \int_{-\infty}^\infty e^{-ikt} f(t) \; dt \right] \cdot \left[ \int_{-\infty}^\infty e^{-iks} g(s) \; ds \right] && \text{As the integral is separable} \\
&= \tilde f(k) \cdot \tilde g(k)
\end{align*}
$$

Secondly, we have the Fourier transform of a derivative,

$$
\begin{align*}
\mathcal{F}[f'(x)] &= \int_{\mathbb R} e^{-ikx} f'(x) \; dx
\\ &= -\int_{\mathbb R} -ik e^{-ikx} \cdot f(x) \; dx && \text{Integrating by parts and assuming a vanishing boundary term} \\
&= ik \tilde f(k)
\end{align*}
$$

Lastly, there is the derivative of a Fourier transform,

$$
\begin{align*}
{\tilde f}'(k) &= \frac{d}{dk} \int_{\mathbb R} e^{-ikx} f(x) \; dx \\
&= -i \int_{\mathbb R} e^{-ikx} \cdot x f(x) \; dx \\
&= -i \mathcal{F}[xf(x)]
\end{align*}
$$

Note that this is often used to deduce the Fourier transform of $$x f(x)$$ as $$i \tilde f'$$.

# Fourier Transforms of Common Functions
The Fourier transform of $$e^{-x^2}$$ is given by $$\sqrt{\pi} e^{-\frac{k^2}{4}}$$.
{: .lemma}

$$
\begin{align*}
\mathcal{F}\left[e^{-x^2}\right] &= \int_{-\infty}^\infty e^{-ikx}e^{-x^2} \; dx \\
&= \int_{-\infty}^\infty \exp \left[-x(x+ik)\right] \; dx \\
&= \int_{-\infty+ik/2}^{\infty+ik/2} \exp\left[-\left(z^2+\frac{k^2}{4}\right) \right] dz && \text{Substituting } x = z-\frac{ik}{2} \\
&= \sqrt{\pi} e^{-\frac{k^2}{4}}
\end{align*}
$$

where one should choose a rectangular contour $$\gamma$$ with corners at $$\pm R$$, $$\pm R + \frac{ik}{2}$$ to show that

$$0 = \int_\gamma e^{-z^2} \; dz \to \int_{-\infty}^\infty e^{-z^2} dz + \int_{\infty+ik/2}^{-\infty+ik/2} e^{-z^2} \text{ as } R \to \infty$$

in order to deduce that

$$\int_{-\infty+ik/2}^{\infty+ik/2} e^{-z^2} dz = \sqrt{\pi}$$

The Fourier transform of $$H(x) e^{-x}$$ (where $$H(x)$$ is the Heaviside step function) is given by $$\frac{1-ik}{1+k^2}$$
{: .lemma}

$$
\begin{align*}
\mathcal{F}\left[H(x)e^{-x}\right] &= \int_0^\infty e^{-ikx} e^{-x} \; dx \\
&= \int_0^\infty e^{-(1+ik) x} \; dx \\
&= \frac{1}{1+ik} \left[e^{-(1+ik) x}\right]_{\infty}^0 \\
&= \frac{1}{1+ik} = \frac{1-ik}{1+k^2}
\end{align*}
$$

# Inversion and Solving Differential Equations
In a generalisation of the corresponding result for Fourier series, one can show that given a transform $$\tilde f(k)$$, the original function $$f(x)$$ can be recovered as:

$$f(x) = \frac{1}{2 \pi} \int_{-\infty}^\infty e^{ikx} \tilde f(k) \; dk = \mathcal{F}^{-1}[\tilde f(k)]$$

Note this provides a result about a double Fourier transform, since we can rewrite the above as

$$f(-x) = \frac{1}{2 \pi} \mathcal{F}[\tilde f(k)](x) \implies \mathcal{F}[\tilde f(k)](x) = 2 \pi f(-x)$$

or equivalently,

$$
\begin{equation} \label{eq:double-fourier}
\widetilde{\tilde f} = 2 \pi f(-x)
\end{equation}
$$

and

$$\tilde f(k) = 2 \pi \mathcal{F}^{-1}[f(-x)]$$

For example, with $$f(x) = \frac{1}{1 + ix}$$, we have $$f(x) = \mathcal{F}[H(k)e^{-k}] \implies \tilde f(k) = 2 \pi H(-k)e^k$$

If we now recall the convolution property derived earlier,

$$\mathcal{F}[f \ast g](k) = (\tilde f \cdot \tilde g)(k)$$

Then we have

$$
\begin{align*}
\mathcal{F}[\tilde f \cdot \tilde g] &= \mathcal{F} \left[ \mathcal{F}[f \ast g] \right] \\
&= 2 \pi (f \ast g)(-x) && \text{Using } \eqref{eq:double-fourier} \\
&= 2 \pi (f(-x) \ast g(-x))(x) && \text{Using the properties of convolution} \\
&= \frac{1}{2 \pi} \left[2 \pi f(-x) \ast 2 \pi g(-x)\right](x) && \text{Putting in the form of } \eqref{eq:double-fourier} \\
&= \frac{1}{2 \pi} \mathcal{F}[\tilde f] \ast \mathcal{F}[\tilde g] && \text{Using } \eqref{eq:double-fourier} \text{ on the arguments of the convolution}
\end{align*}
$$

That is, for any two functions $$f$$ and $$g$$, the Fourier transform of their product is the convolution of their transforms,

$$\mathcal{F}[fg] = \tilde f \ast \tilde g$$

## Solving Differential Equations
We can use the above properties of the Fourier transform to solve differential equations - in particular, taking the Fourier transform of an ODE yields an algebraic equation, which can be easily rearranged to find the Fourier transform of the solution. This is then inverted to give the desired solution.

For example, consider the following equation:

$$y''(x) + 2ay'(x) + (a^2+b^2)y(x) = f(x)$$

Suppose $$a > 0, b \neq 0$$, and impose the initial conditions $$y(0) = y'(0) = 0$$. Taking the Fourier transform of the differential equation, we obtain

$$-k^2 \tilde y + 2iak \tilde y + (a^2 + b^2) \tilde y = \tilde f \implies \tilde y(k) = -\frac{\tilde f(k)}{k^2-2iak-(a^2+b^2)}$$

Considering the denominator, we have

$$(k-ia)^2 = k^2 - 2iak - a^2$$

so that

$$k^2-2iak-a^2-b^2 = (k-ia)^2 - b^2 = (k-ia-b)(k-ia+b)$$

Now let $$z = k - ia$$, and consider

$$\frac{1}{k^2-2iak-(a^2+b^2)} = \frac{1}{(z-b)(z+b)} = \frac{1}{2b} \cdot \frac{(z+b) - (z-b)}{(z-b)(z+b)} = \frac{1}{2b} \cdot \left( \frac{1}{z-b} - \frac{1}{z+b} \right)$$

This means that our equation becomes

$$\tilde y(k) = -\frac{\tilde f(k)}{2b} \cdot \left[ \frac{1}{(k-ia)-b} - \frac{1}{(k-ia)+b} \right]$$

To make further progress on the right-hand side, let $$\tilde g_c(k) = \frac{1}{k-ia-c}$$, where we'll take $$c = \pm b$$. To find $$g_c(x)$$, recall that $$\mathcal{F}\left[H(x)e^{-x}\right] = \frac{1}{1+ik}$$. Denote this by $$E(x)$$ and $$\tilde E(k)$$ respectively. Then

$$-i\tilde g_c(k) = \frac{1}{ik+a-ic} = \frac{1}{i(k-c)+a} \implies -ia \tilde g_c(k) = \frac{1}{1 + i \cdot \frac{k-c}{a}} = \tilde E\left(\frac{k-c}{a}\right)$$

But from the shifting and scaling properties of the Fourier transform, we can identify

$$\tilde E\left(\frac{k-c}{a}\right) = \mathcal{F} \left[ e^{icx} \cdot \lvert a \rvert E(ax) \right]$$

Hence (recalling that $$a > 0$$), $$g_c(x) = i e^{icx} E(ax)$$. This allows us to write

$$\tilde y(k) = -\frac{\tilde f(k)}{2b} \left[ \tilde g_b(k) - \tilde g_{-b}(k) \right]$$

Hence, through linearity and the convolution theorem, we have

$$
\begin{align*}
y(x) &= -\frac{1}{2b} \cdot \int_{-\infty}^\infty f(t) \left[g_b(x-t) - g_{-b}(x-t)\right] \; dt \\
&= -\frac{i}{2b} \cdot \int_{-\infty}^\infty f(t) H(a(x-t)) e^{-a(x-t)} \left[ e^{ib(x-t)} - e^{-ib(x-t)} \right] \; dt \\
&= \frac{1}{b} \cdot \int_{-\infty}^\infty f(t) H(a(x-t)) e^{-a(x-t)} \cdot \frac{e^{ib(x-t)} - e^{-ib(x-t)}}{2i} \; dt \\
&= \frac{1}{b} \int_{-\infty}^x f(t) e^{-a(x-t)} \sin \left[ b(x-t) \right] \; dt
\end{align*}
$$

# Parseval's Theorem and Performing Integrals
Consider the inner product of two Fourier transforms,

$$
\begin{align*}
\left( \tilde f, \tilde g \right) &= \int_{-\infty}^\infty \overline{\tilde f(k)} \tilde g(k) \; dk \\
&= \int_{-\infty}^\infty \left[\int_{-\infty}^\infty e^{ikx} \bar f(x) \; dx \right] \cdot \left[ \int_{-\infty}^\infty e^{-iky} g(y) \; dy \right] \; dk \\
&= \int_{\mathbb R^2} \left[ \bar f(x) g(y) \underbrace{\int_{-\infty}^\infty e^{ik(x-y)} dk}_{2 \pi \delta(x-y)} \right] \; dx dy \\
&= 2 \pi \int_{-\infty}^\infty \bar f(x) g(x) \; dx \\
&= 2 \pi (f, g)
\end{align*}
$$

This result is known as _Parseval's theorem_,

$$(f, g) = \frac{1}{2 \pi} (\tilde f, \tilde g)$$

We can use this to compute integrals using a Fourier transform. For example, consider the function

$$f(x) = \begin{cases} 1 & \lvert x \rvert \leq a \\ 0 & \text{otherwise} \end{cases}$$

Then

$$\tilde f(k) = \int_{-a}^a e^{-ikx} \; dx = \frac{1}{ik} \left( e^{ika} - e^{-ika} \right) = \frac{2}{k} \sin ak$$

and hence

$$
\begin{align*}
(f, f) &= 2a \\
&= \frac{1}{2 \pi} (\tilde f, \tilde f) \\
&= \frac{2}{\pi} \cdot \int_{-\infty}^\infty \frac{\sin^2 ak}{k^2} \; dk
\end{align*}
$$

so that

$$\int_{-\infty}^\infty \frac{\sin^2 ak}{k^2} = a \pi$$