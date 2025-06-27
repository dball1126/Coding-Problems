
def sum_array(numbers):
        total = 0
        for number in numbers:
                if number % 2 != 0:
                    total += number
        return total


numbers = [1, 2, 3, 4, 5]
sum_of_numbers = sum_array(numbers)
print(f"The sum of the numbers in the array is: {sum_of_numbers}")