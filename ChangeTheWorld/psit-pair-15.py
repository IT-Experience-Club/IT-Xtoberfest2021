"""Func"""

def func(height, width):
    """Rectangle"""
    area(height, width)
    perimeter(height, width)

def area(height, width):
    """Area"""
    print(height * width)

def perimeter(height, width):
    """Perimeter"""
    print(height*2 + width*2)
func(int(input()), int(input()))
