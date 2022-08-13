import twint

# print("Welcome ", str(sys.argv[1]))
import nest_asyncio
nest_asyncio.apply()
c = twint.Config()
c.Username = "MrCodeAddict"
c.Limit = 1
twint.run.Search(c)

# print("Hello World")
# import sys
# import json
# import numpy as np
 
# def read_in():
#     lines = sys.stdin.readlines()
#     return json.loads(lines[0])
 
 
# def main():
#     data = read_in()
#     np_data = np.array(data)
#     result = np.sum(np_data)
#     print(result, end='') 
 
 
# if __name__ == '__main__':
#     main()