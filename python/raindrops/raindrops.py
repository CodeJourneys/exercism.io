def convert(number):
  return ''.join([{3: 'Pling', 5: 'Plang', 7: 'Plong'}[x] for x in [3,5,7] if not n % x]) or str(n)
