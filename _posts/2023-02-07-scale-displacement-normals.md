---
title: "Transformations of normals under parametric scalings"
date: 2023-02-07 17:00:00 +0000
categories:
  - blog
tags:
  - Mathematics
---

# Introduction
Consider a surface in $$\R^3$$ defined parametrically by

$$
\begin{align*}
\bv{f} : U \subset \R^2 &\to \R^3 \\\
(u, v) &\mapsto \bv{f}(u, v)
\end{align*}
$$

Define the two tangent vectors

$$
\begin{align*}
\hat{\bv{u}} &= \frac{\pderiv{\bv{f}}{u}}{\norm*{\pderiv{\bv{f}}{u}}}
& \hat{\bv{v}} &= \frac{\pderiv{\bv{f}}{v}}{\norm*{\pderiv{\bv{f}}{v}}}
\end{align*}
$$

The normal to the surface at a point $$(u, v)$$ is given by

$$
\begin{align*}
\hat{\bv{n}} &= \frac{\hat{\bv{u}} \times \hat{\bv{v}}}{\norm*{\hat{\bv{u}} \times \hat{\bv{v}}}} \propto \pderiv{\bv{f}}{u} \times \pderiv{\bv{f}}{v}
\end{align*}
$$

# Applying a Scale
Consider the new surface

$$\bv{g}(u, v) = \lambda(u, v) \bv{f}(u, v)$$

for some function $$\lambda : U \to \R$$ which we assume to be strictly positive. We can compute the (unnormalised) normal to $$\bv{g}$$ as

$$
\begin{align*}
\bv{n}_g &= \pderiv{\bv{g}}{u} \times \pderiv{\bv{g}}{v} \\
&= \left[ \pderiv{\lambda}{u} \bv{f} + \lambda \pderiv{\bv{f}}{u} \right] \times \left[ \pderiv{\lambda}{v} \bv{f} + \lambda \pderiv{\bv{f}}{v} \right] \\
&= \lambda \pderiv{\lambda}{v} \cdot \pderiv{\bv{f}}{u} \times \bv{f} \,+\, \lambda \pderiv{\lambda}{u} \cdot \bv{f} \times \pderiv{\bv{f}}{v} \,+\, \lambda^2 \cdot \pderiv{\bv{f}}{u} \times \pderiv{\bv{f}}{v}
\end{align*}
$$

Introduce the normalisation operator $$\mathcal{N}(\bv{x}) = \frac{\bv{x}}{\norm{\bv{x}}}$$ and note that for $k > 0$, for all $$\bv{x} \neq 0$$, we have $$\mathcal{N}(k \bv{x}) = \mathcal{N}(\bv{x})$$. Then

$$
\begin{align*}
\hat{\bv{n}}_g &= \mathcal{N}(\bv{n}_g) \\
&= \mathcal{N}\left( \pderiv{\lambda}{v} \abs*{\pderiv{\bv{f}}{u}} \cdot \hat{\bv{u}}_f \times \bv{f} \,+\, \pderiv{\lambda}{u} \abs*{\pderiv{\bv{f}}{v}} \cdot \bv{f} \times \hat{\bv{v}}_f \,+\, \lambda \abs*{\pderiv{\bv{f}}{u}} \cdot \abs*{\pderiv{\bv{f}}{v}} \cdot \hat{\bv{u}}_f \times \hat{\bv{v}}_f \right)
\end{align*}
$$

# Example
Consider a torus with radii $$R > r > 0$$,

$$\bv{f}(\theta, \phi) = \begin{pmatrix} (R + r \cos \theta) \cos \phi \\ (R + r \cos \theta) \sin \phi \\ r \sin \theta \end{pmatrix}$$

Then we have

$$
\begin{align*}
\pderiv{\bv{f}}{\theta} &= \begin{pmatrix} -r \sin \theta \cos \phi \\ -r \sin \theta \sin \phi \\ r \cos \theta \end{pmatrix} & \pderiv{\bv{f}}{\phi} &= \begin{pmatrix} -(R + r \cos \theta) \sin \phi \\ (R + r \cos \theta) \cos \phi \\ 0 \end{pmatrix} \\
\abs*{\pderiv{\bv{f}}{\theta}} &= r & \abs*{\pderiv{\bv{f}}{\phi}} &= R + r \cos \theta \\
\hat{\bv{\theta}} &= \begin{pmatrix} -\sin \theta \cos \phi \\ -\sin \theta \sin \phi \\ \cos \theta \end{pmatrix} & \hat{\bv{\phi}} &= \begin{pmatrix} -\sin \phi \\ \cos \phi \\ 0 \end{pmatrix}
\end{align*}
$$