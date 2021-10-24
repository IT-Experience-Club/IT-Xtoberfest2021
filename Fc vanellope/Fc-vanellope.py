"""BigFrame"""
def main():
    """BigFrame"""
    txt1 = input().strip()
    txt2 = input().strip()
    txt3 = input().strip()
    txt4 = input().strip()
    txt5 = input().strip()
    length = max(len(txt1), len(txt2), len(txt3), len(txt4), len(txt5))
    print("*"*(length+4))
    print("* "+(txt1)+(" "*abs(len(txt1)-length))+" *")
    print("* "+(txt2)+(" "*abs(len(txt2)-length))+" *")
    print("* "+(txt3)+(" "*abs(len(txt3)-length))+" *")
    print("* "+(txt4)+(" "*abs(len(txt4)-length))+" *")
    print("* "+(txt5)+(" "*abs(len(txt5)-length))+" *")
    print("*"*(length+4))
main()
#ไม่รู้มันเท่ดีเลยลงๆไว้5555555555555555555555555555555555555