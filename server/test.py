import sys

num1 = 0
num2 = 0

try:
   num1=int(sys.argv[1])
   num2=int(sys.argv[2])
except:
   num1=0
   num2=0    

# if sys.argv[1]:
#     num1 = int(sys.argv[1]
    
# if sys.argv[2]:
    # num2 = int(sys.argv[1]

added = num1 + num2
print('In python', added)