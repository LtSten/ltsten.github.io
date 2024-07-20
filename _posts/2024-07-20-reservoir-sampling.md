---
title: "Deriving Single-Element Reservoir Sampling"
date: 2024-07-20 14:00:00 +0100
categories:
  - blog
tags:
  - Mathematics
  - Computing
---


# Introduction
Reservoir sampling is a method of selecting a random subset from a collection of a priori unknown size. Here, we consider the problem of selecting a *single* element subject to an arbitrary probability distribution.

In particular, let $N \in \N$ and $X$ a random variable taking values in $\set{1, 2, \dots, N}$ constructed as follows:

* Let $x_1 = 1$
* For each $n > 1$, let $x_n$ be $n$ with probability $p_n$, and $x_{n-1}$ otherwise
* At the end, take $X = x_N$

That is, we begin by selecting the first element, and then consider each subsequent element in turn, replacing our choice for the sampled value of $X$ by the current element $n$ with probability $p_n$.

# Reproducing a Probability Distribution
The above scheme gives rise to the probability distribution where the result $x_N = n$ is produced by:

* Selecting $n$ for $x_n$
* Keeping $n$ selected for all $x_i$ with $i > n$

Therefore,

$$P_n \defeq \mathbb{P}(X = n) = p_n \cdot \prod_{i=n+1}^N (1-p_i)$$

We want to determine how, given a fixed probability distribution $\set{P_n}$, we invert this to compute the per-step probabilities $\set{p_n}$.

Begin by observing that $P_n$ depends only on $p_i$ for $i \geq n$, and in particular, that if we define

$$\bar{P}_n \defeq \frac{P_n}{p_n} = \begin{cases} 1 & n = N \\ \prod_{i=n+1}^N (1-p_i) & \text{otherwise} \end{cases}$$

then the expression for $\bar{P}_{n-1}$ in terms of $\bar{P}_n$ is particularly simple,

$$
\begin{align*}
\bar{P}_{n-1} &= \prod_{i=n}^N (1-p_i) \\
&= (1-p_n) \prod_{i=n+1}^N (1-p_i) \\
&= (1-p_n) \bar{P}_n \\
&= \bar{P}_n - p_n \bar{P}_n \\
&= \bar{P}_n - P_n
\end{align*}
$$

Shifting indices by one, this becomes

$$\bar{P}_n = \bar{P}_{n+1} - P_{n+1}$$

which we can substitute recursively to obtain

$$
\begin{align*}
\bar{P}_n &= \left(\bar{P}_{n+2} - P_{n+2}\right) - P_{n+1} \\
&= \left(\bar{P}_{n+3} - P_{n+3} \right) - P_{n+2} - P_{n+1} \\
&= \dots \\
&= \bar{P}_N - P_N - P_{N-1} - \dots - P_{n+1} \\
&= 1 - \sum_{i=n+1}^N P_i
\end{align*}
$$

and hence

$$\frac{P_n}{p_n} = 1 - \sum_{i=n+1}^N P_i \iff p_n = \frac{P_n}{1 - \sum_{i=n+1}^N P_i}$$

In our sampling method, we want to write $p_n$ in terms of state obtained by sampling *up to* $n$, rather than no earlier than $n$. We can do this by recalling that, since the $\set{P_i}$ are a probability distribution, we have

$$\sum_{i} P_i = 1 \implies \sum_{i={n+1}}^N P_i = 1 - \sum_{i=1}^n P_i$$

so that

$$p_n = \frac{P_n}{\sum_{i=1}^n P_i}$$

# Probability Distribution Examples
## Uniform Distribution
For a uniform distribution, we take $P_n = \frac{1}{N} \; \forall n$. Then $\sum_{i=1}^n P_i = \frac{n}{N}$, and hence

$$p_n = \frac{1}{N} \cdot \left(\frac{n}{N}\right)^{-1} = \frac{1}{n}$$

## Weighted Distribution
For a sequence with weights $\omega_n > 0$, let $\Omega = \sum_n \omega_n$ so that

$$P_n = \frac{\omega_n}{\Omega}$$

To form an expression for $p_n$ in terms of the weights, let $\Omega_n = \sum_{i=1}^n \omega_i$. Then

$$\sum_{i=1}^n P_n = \frac{\Omega_n}{\Omega}$$

and so

$$p_n = \frac{\omega_n}{\Omega} \cdot \left(\frac{\Omega_n}{\Omega}\right)^{-1} = \frac{\omega_n}{\Omega_n}$$