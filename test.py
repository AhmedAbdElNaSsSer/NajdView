import re

input_string = "ahmed17ahmed18ahmed-defe-3"

# Use regular expressions to split the string
result = re.split(r'[^a-zA-Z]+', input_string)

# Ensure there are at least three components
if len(result) >= 3:
    var1, var2, var3 = result[:3]
    print("Variable 1:", var1)
    print("Variable 2:", var2)
    print("Variable 3:", var3)
else:
    print("Input string does not contain at least three components.")
