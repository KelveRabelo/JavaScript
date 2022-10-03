
strParam = "cats AND*Dogs-are Awesome"
removed_chars = ['.', ',', '!', '@', '#', '$', '%', '*', '(', ')', '-', '_', '=', '+']
chars = set(removed_chars)
saida = strParam.title()
saida = ''.join(filter(lambda x: x not in chars, saida))

primeira = saida[0:1:1].lower()
saida = primeira + saida[1:len(saida):1].replace(' ', '')
print(saida)

#catsAndDogsAreAwesome