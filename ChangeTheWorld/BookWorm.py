"""Func"""

def func():
    """BookWorm"""
    for _ in range(int(input())):
        time = float(input())
        totaltime = sorted([float(input()) for _ in range(int(input()))])
        timetouse = 0
        answer = 0
        for j in totaltime:
            if j + timetouse <= time:
                timetouse += j
                answer += 1
        print(answer)
func()
