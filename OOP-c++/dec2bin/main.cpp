#include <iostream>
#include <optional>

struct Args
{
    std::string decValue;
};

void PrintResult(int digit);

Args ParseArgs(int argc, char *argv[])
{
    if (argc != 2)
    {
        throw std::invalid_argument("Invalid arguments count. Usage: dec2bin <Dec number>");
    }

    Args args;
    args.decValue = argv[1];
    return args;
}

bool IsPositiveDigit(int digit)
{
    if (digit < 0)
    {
        throw std::out_of_range("");
    }

    return true;
}

std::string ConvertToBin(int digit)
{
    bool isBit = false;
    std::string result;

    for (int i = 31; i >= 0; --i)
    {
        if (isBit)
        {
            result += std::to_string((digit >> i) & 1);
        }
        if (!isBit && (digit >> i) & 1)
        {
            isBit = true;
            result += std::to_string(1);
        }
    }

    if (!isBit)
    {
        std::to_string(0);
    }

    return result;
}

void PrintResult(int digit)
{
    std::string result = ConvertToBin(digit);
    std::cout << result << std::endl;
}

int main(int argc, char *argv[])
{
    try
    {
        auto args = ParseArgs(argc, argv);

        int digit = std::stoi(argv[1]);
        IsPositiveDigit(digit);
        PrintResult(digit);
    }
    catch (const std::invalid_argument &e)
    {
        std::cout << e.what() << std::endl;
        return 1;
    }
    catch (const std::out_of_range &e)
    {
        std::cout << "Number must be > 0 and < max int" << std::endl;
        return 1;
    }

    return 0;
}