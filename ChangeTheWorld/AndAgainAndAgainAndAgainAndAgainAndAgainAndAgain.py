"""Func"""

def func(text):
    """AndAgainAndAgainAndAgainAndAgainAndAgainAndAgain"""
    answer = []
    for i in text:
        counter = 0
        counter += i.count("a") + i.count("e") + i.count("i") + i.count("o") + i.count("u")
        if counter >= 2:
            answer.append(i)
    answer.sort()
    if len(answer) == 0:
        print("Nope")
    else:
        print(*answer, sep="\n")

func(input().replace(".", "").split())
