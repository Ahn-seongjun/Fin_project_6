name = []
while True:
    a = input("차량이름 입력 : ")
    if a not in name:
        name.append(a)
        print(name)
    elif a == "exit":
        break
    else:
        print('중복값입니다.')
print(name)