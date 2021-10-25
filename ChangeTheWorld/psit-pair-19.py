"""Func"""

def func(q1p, q2p, p1p, p2p):
    """Euclidean distance 2D"""
    print(((q1p - p1p)**2 + (q2p - p2p)**2)**0.5)
func(float(input()), float(input()), float(input()), float(input()))
