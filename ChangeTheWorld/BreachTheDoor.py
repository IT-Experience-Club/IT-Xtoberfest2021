"""Func"""

def func(text):
    """BreachTheDoor"""
    text = text.split()
    answer = []
    for i in text:
        onlyalpha = ""
        for j in i:
            if j.isalpha():
                onlyalpha += j
        if len(onlyalpha) > 6:
            answer.append(onlyalpha)
    print(" ".join(answer))
func(input())
