
# numbers = (10,11,12,13)

# print(sum(numbers))
# print(sorted(numbers,reverse=True)[1])

text="python programming test"

words=text.split()#['python', 'programming', 'test']

max_word=words[0]#python

for w in words:

    if len(w) > len(max_word):

        max_word=w
        

print(max_word)