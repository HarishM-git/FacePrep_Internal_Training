# **4
# Condition
# No For Loops, No While Loops, No kind of Loops
# No List Comprehensions
# If The Input length is mismataching with the actual inout then print -1
# All the output for the program must be printed only when the program execution is about to complete
# Bonus Point - Avoid Global Variables
def find(t,g):
  if(t==0):
    return g
  b=int(input())
  def rec(l,li):
    if len(l)==0:
      return (li)
    else:
      if(l[0]<0):
        p=l[0]**4
        if(len(li)!=0):
          li[0]+=p
        else:
          li.append(abs(p))
      del l[0]
    return rec(l,li)
  ll=list(map(int,input().split()))
  if(b!=len(ll)):
    l=-1
  else:
    l=rec(ll,[])
  if(not l):
    g.append(0)
  else:
    g.append(l)
  return find(t-1,g)
print(find(int(input()),[]))
