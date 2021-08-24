---
title: "Special Functions: Gamma, Beta, and Zeta"
date: 2021-02-09T16:23:04-00:00
categories:
  - blog
tags:
  - Mathematics
---

# Gamma Function
Let $$z \in \mathbb C$$ and define, for $$\operatorname{Re}(z) > 0$$,

$$\Gamma(z) = \int_0^\infty e^{-t} t^{z-1} \; dt$$

This function has a particularly interesting property - consider

$$
\begin{align}
\Gamma(z+1) &= \int_0^\infty e^{-t} t^{z} \; dt \\
&= \underbrace{\left[ -e^{-t} t^{z} \right]_0^\infty}_0 + \int_0^\infty e^{-t} \cdot z t^{z-1} \; dt &&\text{integrating by parts}\\
&= z \Gamma(z)
\end{align}
$$

Observe also that

$$\Gamma(1) = \int_0^\infty e^{-t} \; dt = 1$$

which means that, for $$n \in \mathbb N$$, we have

$$\Gamma(n+1) = n \Gamma(n) = n \times (n-1) \times \dots \times 1 = n!$$

so that $$\Gamma(z)$$ is one possible extension of the factorial to $$\operatorname{Re}(z) > 0$$. Moreover, we can extend this to all $$z \in \mathbb C \setminus \lbrace 0, -1, -2, \dots \rbrace$$ - to do so, observe that

$$\Gamma(z) = \frac{\Gamma(z+1)}{z}$$

holds for $$\operatorname{Re}(z) > 0$$, but that in fact, this relationship provides an analytic continuation into the region $$\operatorname{Re}(z) > -1$$ (excluding $$z = 0$$), and as such, defines a meromorphic function on $$\operatorname{Re}(z) > -1$$. This can then be repeated to define $$\Gamma(z)$$ at all points in $$\mathbb C$$ except the non-positive integers.

# Beta Function
Another useful function is the Beta function, defined for $$\operatorname{Re}(z), \operatorname{Re}(w) > 0$$ by

$$B(z, w) = \int_0^1 t^{z-1} (1-t)^{w-1} \; dt$$

One can derive a useful identity by considering the following:

$$
\begin{align}
\Gamma(z) \Gamma(w) &= \int_0^\infty e^{-t} t^{z-1} \; dt \cdot \int_0^\infty e^{-s} s^{w-1} \; ds \\
&= \int_0^\infty \int_0^\infty e^{-t} t^{z-1} e^{-s} s^{w-1} \; dt \, ds
\end{align}
$$

Now introduce two new variables $$\lambda, \eta$$ and define

$$t = \lambda \eta, \quad s = \lambda (1 - \eta)$$

The Jacobian for this change of coordinates is given by

$$J = \frac{\partial(t, s)}{\partial(\lambda, \eta)} = \begin{pmatrix} \eta & \lambda \\ 1 - \eta & -\lambda \end{pmatrix}$$

which gives

$$\det J = -\eta \lambda - \lambda (1-\eta) = -\lambda \implies dt \, ds = \lvert \lambda \rvert \, d\lambda \, d\eta$$

Our region of integration $$(t, s) \in [0, \infty)^2$$ becomes $$(\lambda, \eta) \in [0, \infty) \times [0, 1]$$, so that

$$
\begin{align}
\Gamma(z) \Gamma(w) &= \int_0^\infty \int_0^1 \left[ e^{-\lambda \eta} \lambda^{z-1} \eta^{z-1} e^{\lambda(1-\eta)} \lambda^{w-1} (1-\eta)^{w-1} \right] \cdot \lambda \; d \eta \, d\lambda \\
&= \int_0^\infty \int_0^1 e^\lambda \lambda^{z+w-1} \eta^{z-1} (1-\eta)^{w-1} \; d\eta \, d\lambda \\
&= \int_0^\infty e^\lambda \lambda^{z+w-1} d\lambda \cdot \int_0^1 \eta^{z-1} (1-\eta)^{w-1} \; d\eta \\
&= \Gamma(z+w) B(z, w)
\end{align}
$$

and hence

$$B(z,w) = \frac{\Gamma(z) \Gamma(w)}{\Gamma(z+w)}$$

In this form, it is clear that the Beta function is symmetric in its arguments - this fact can also be deduced straightforwardly by making the transformation $$t \mapsto 1-t$$ in the integral definition.

One final identity can be obtained by the substitution $$t = \sin^2 \theta$$ in the definition of $$B(z, w)$$. With this, we have

$$B(z, w) = \int_0^{\frac{\pi}{2}} \sin^{2z-2} \theta \cdot \cos^{2w-2} \theta \cdot 2 \sin \theta \cos \theta \, d\theta = 2\int_0^{\frac{\pi}{2}} \sin^{2z-1} \theta \cos^{2w-1} \theta \; d\theta$$

This allows one to quickly conclude that

$$B\left( \frac{1}{2}, \frac{1}{2} \right) = \pi$$

which, using the relation with $$\Gamma$$ and using $$\Gamma(1) = 1$$ gives

$$\Gamma\left(\frac{1}{2}\right)^2 = \pi \implies \Gamma\left(\frac{1}{2}\right) = \sqrt{\pi}$$

where we've determined the sign by going back to the integral definition and noting that necessarily $$\Gamma(x) > 0$$ for $$x > 0$$.

We can also use this relation to express a trigonometric integral in terms of $$\Gamma$$ - let $$z = \frac{n}{2}+\frac{1}{2}$$ and $$w = \frac{1}{2}$$, giving

$$B(z,w) = 2 \int_0^{\frac{\pi}{2}} \sin^n \theta \; d\theta = \frac{\Gamma\left(\frac{n}{2}+\frac{1}{2}\right) \Gamma\left(\frac{1}{2}\right)}{\Gamma\left(\frac{n}{2}+1\right)}$$

so that

$$\int_0^{\frac{\pi}{2}} \sin^n \theta \; d\theta = \frac{\sqrt{\pi}}{2} \cdot \frac{\Gamma\left(\frac{n}{2}+\frac{1}{2}\right)}{\Gamma\left(\frac{n}{2}+1\right)}$$

Moreover, since Beta is symmetric in $$z$$ and $$w$$, considering $$B(w, z)$$ with the above values of $$z$$ and $$w$$ gives

$$\int_0^{\frac{\pi}{2}} \cos^n \theta \; d\theta  = \int_0^{\frac{\pi}{2}} \sin^n \theta \; d\theta$$

which can also be seen straightforwardly by substituting $$\theta \mapsto \frac{\pi}{2} - \theta$$.

# Zeta Function
Let $$s \in \mathbb C$$ and define, for $$\operatorname{Re} s > 1$$,

$$\zeta(s) = \sum_{n = 1}^\infty \frac{1}{n^s}$$

As shown in the post about [Fourier series]({% post_url 2021-01-29-fourier-zeta %}), the value of $$\zeta(2)$$ is given by

$$\zeta(2) = \sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}$$